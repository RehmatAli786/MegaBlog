import React, { useState } from 'react'
import { Link, useNavigation } from 'react-router-dom'
import { Input, Button } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../services/appwrite/auth'
import { login } from '../features/auth/authSlice'

function Signup() {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    try {
      const userData = await authService.createAccount(data);
      if (currentUser) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) useDispatch(login(currentUser));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className='d-flex justify-content-center align-item-center'>
      <div className="mx-auto w-100 bg-secondary rounded p-10 border border-black col-lg-6">
        <h2 className='text-center fs-2 fw-bold'>Sing up to create account</h2>
        <p className="mt-2 text-center fs-6">
          Already have account?&nbsp;
          <Link
            to='/login'
            className='text-primary'
          >
            Sign up
          </Link>
        </p>
        {error && <p className='text-danger mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <Input
            label="Full Name"
            placeh0lder="Enter your full name"
            type="text"
            {...register("fullName", {
              required: true
            })}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) => {
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email must be a valid address."
                }
              }
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button
          childern="Create Account"
          type='button'
          className='w-100'
          />
        </form>
      </div>
    </div>
  )
}

export default Signup
