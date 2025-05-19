import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.authReducer.status);

    useEffect(() => {
        // TODO: make it simple
        if (authentication && authStatus !== authentication) {
            navigate('/login');
        } else if (!authentication && authStatus === authentication) {
            navigate('/');
        }
        setLoader(false);
    }, [authentication, authStatus, navigate]);
    return loader ? <h1>Loading...</h1> : { children };
} 