'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import Link from 'next/link'
import { userLoginMutation } from '@/hooks/useMutation';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState<any>(false);
    const LoginButton: any = async (data: any) => {
        mutation.mutate(data);
    }
    const mutation = userLoginMutation();

    return (
        <>
            <div className='flex justify-center items-center min-h-screen '>
                <div className='bg-[#FFFFFF] shadow-2xl h-[80vh pb-2 md:w-[40%] w-[90%]  flex justify-cente items-center flex-col rounded-t-4xl'>
                    <div className='bg-[#1b1a16] w-[100%] flex justify-center items-center p-4 '>
                        <img src='/logo.jpg' alt='logo' className='w-[200px]' />
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 mt-4'>
                        <span className='font-semibold text-[26px] leading-[26px]'>Let's get started</span>
                        <span className='text-18px leading-[27px]'>please enter your details</span></div>
                    <div className='mt-4'>
                        <form className='flex justify-start items-start flex-col gap-4 w-[100%]'>
                            <div className='flex flex-col justify-start items-start w-[100%]'>
                                <label className='font-[600px] text-[14px] leading-[18px] text-[#202020]'>email</label>
                                <input type="email" placeholder='enter your email' className='w-[100%] px-2 py-2 rounded-md border-black border-[1px]' {...register('email', { required: true })} />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div>
                                <label className='font-[600px] text-[14px] leading-[18px] text-[#202020]'>password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'} placeholder='enter your email' className='w-[100%] px-2 py-2 rounded-md border-black border-[1px]' {...register('password', { required: true })} />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                    <span className='absolute right-2 top-3 active:cursor-pointer accent-violet-800'>
                                        {/* <img src='/eye.png' alt='eye' onClick={() => setShowPassword(!showPassword)} /> */}
                                    </span>
                                </div>
                            </div>
                            {/* <div>2</div> */}
                        </form>
                        <Link href='/forgot-password'>
                            <h1 className='text-blue-400 text-end cursor-pointer active:text-blue-500 mt-1'>Forgot password</h1>
                        </Link>
                    </div>
                    <div><Button variant='contained' color='primary' className='mt-4' type='submit' onClick={handleSubmit(LoginButton)}>LOgin</Button></div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login