'use client'
import { Button } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { user_login } from '@/api/apiClient'


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState<any>(false);
    const router = useRouter();
    const LoginButton = async (data: any) => {
        mutation.mutate(data);
    }
    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = user_login(data);
            return response;
        },
        onSuccess: async (res: any) => {
            console.log(res, 'resres');
            localStorage.setItem('token', res?.data.token);
            toast.success(res?.message);
            router.push('/protected/dashboard');
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message);
        }
    })

    return (
        <>
            <div className='flex justify-center items-center min-h-screen '>
                <div className='bg-[#FFFFFF] shadow-2xl h-[80vh] md:w-[40%] w-[90%]  flex justify-cente items-center flex-col rounded-t-4xl'>
                    <div className='bg-[#0097FF] w-[100%] flex justify-center items-center p-4 '>
                        <img src='/clindle_logo.svg' alt='logo' />
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 mt-4'>
                        <span className='font-semibold text-[26px] leading-[26px]'>Let's get started</span>
                        <span className='text-18px leading-[27px]'>please enter your details</span></div>
                    <div className='mt-4'>
                        <form className='flex justify-start items-start flex-col gap-4 w-[100%]'>
                            <div className='flex flex-col justify-start items-start w-[100%]'>
                                <label className='font-[600px] text-[14px] leading-[18px] text-[#202020]'>email</label>
                                <input type="email"  placeholder='enter your email' className='w-[100%] px-2 py-2 rounded-md border-black border-[1px]' {...register('email', { required: true })} />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div>
                                <label className='font-[600px] text-[14px] leading-[18px] text-[#202020]'>password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'}  placeholder='enter your email' className='w-[100%] px-2 py-2 rounded-md border-black border-[1px]' {...register('password', { required: true })} />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                    <span className='absolute right-2 top-3 active:cursor-pointer accent-violet-800'>
                                        <img src='/eye.png' alt='eye' onClick={() => setShowPassword(!showPassword)} />
                                    </span>
                                </div>
                            </div>
                            {/* <div>2</div> */}
                        </form>
                    </div>
                    <div><Button variant='contained' color='primary' className='mt-4' type='submit' onClick={handleSubmit(LoginButton)}>LOgin</Button></div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login