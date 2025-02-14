'use client'
import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { forgotPasswordMutation } from '@/hooks/useMutation';


const ForgotPassword = () => {
    const router = useRouter();
    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: ''
        }
    });
    const mutation = forgotPasswordMutation();

    const confirmButton = (data: any) => {
        mutation.mutate(data);
    }
    return (
        <>
            <div className='flex justify-center items-center min-h-screen '>
                <div className='bg-[#FFFFFF] shadow-2xl h-[80vh] md:w-[40%] w-[90%]  flex justify-cente items-center flex-col rounded-t-4xl'>
                    <div className='bg-[#1b1a16] w-[100%] flex justify-center items-center p-4 '>
                        <img src='/logo.jpg' alt='logo' className='w-[200px]' />
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 mt-4'>
                        <span className='font-semibold text-[26px] leading-[26px]'>Forgot Password</span>
                        <span className='text-18px leading-[27px]'>Enter your email address to rest your Password</span></div>
                    <div className='mt-4'>
                        <form className='flex justify-start items-start flex-col gap-4 w-[100%]'>
                            <div className='flex flex-col justify-start items-start w-[100%]'>
                                <label className='font-[600px] text-[14px] leading-[18px] text-[#202020]'>email</label>
                                <input type="email" placeholder='enter your email' className='w-[100%] px-2 py-2 rounded-md border-black border-[1px]' {...register('email', { required: true })} />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                        </form>
                    </div>
                    <div><Button variant='contained' color='primary' className='mt-4' type='submit' onClick={handleSubmit(confirmButton)}>{mutation?.isPending ? 'Sending...' : 'Send'}</Button></div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default ForgotPassword