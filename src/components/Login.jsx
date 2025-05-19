import React, { useState } from 'react'
import { Input, Button, Logo } from "../components/index";
import { Link, useNavigation } from "react-router-dom";
import authService from '../services/appwrite/auth';
import { login as authLogin } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const Login = async (data) => {
        setError("");
        console.log(data);
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) useDispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='d-flex text-center justifuy-content-center w-100'>
            <div className="bg-secondary rounded-3 p-5 border border-dark">
                <div className="d-flex justify-content-center">
                    <span className="d-inline-block w-100">
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center fw-bold fs-2'>Sign in your account</h2>
                <p className='mt-2 text-center text-dark'>
                    Don&apos;t have any account?
                    <Link to='/signup'
                        className='fs-3 text-primary'
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-danger text-center mt-8'>{error}</p>}
                <form onSubmit={handleSubmit(Login)} className='mt-8'>
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => {
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address."
                                }
                            }
                        })}
                    />
                    <Input
                        label="Password:"
                        type="password"
                        placeholder="Enter your password."
                        {...register("password", {
                            required: true
                        })}
                    />
                    <Button
                        childern="Login"
                        type='submit'
                        className='w-100'
                    />
                </form>
            </div>
        </div>
    )
}

export default Login