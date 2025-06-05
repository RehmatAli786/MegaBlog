
import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authService from './services/appwrite/auth';
import { login, logout } from './features/auth/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
          
        }
      })
      .finally(setLoading(false));
      
  }, []);

  return !loading ? (
    <div className="d-flex flex-wrap align-content-between bg-secondary min-vh-100">
      <div className="w-100 d-block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>

  ) : <p>Loading....</p>
}

export default App
