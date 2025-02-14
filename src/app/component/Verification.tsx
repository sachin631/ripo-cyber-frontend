'use client'
import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import { forgotPasswordMutation, verifyUserOtp } from '@/hooks/useMutation'
import { getDataFromTanstack } from '@/tanstack/tanstackStorage'


const Verification = () => {
    const { handleSubmit, reset, register, formState: { errors } } = useForm();
    const mutation = verifyUserOtp();
    const mutation2 = forgotPasswordMutation();


    const verifyButton = (data: any) => {
        const user_email = getDataFromTanstack('email');
        data.email = user_email;
        mutation.mutate(data);;
    }
    const resendButton = (data: any) => {
        const user_email = getDataFromTanstack('email');
        data = {
            email: user_email
        };
        mutation2.mutate(data);
    }
    return (
        <>
            <div className='flex justify-center items-center min-h-screen '>
                <div className='bg-[#FFFFFF] shadow-2xl h-[80vh] md:w-[40%] w-[90%]  flex justify-cente items-center flex-col rounded-t-4xl'>
                    <div className='bg-[#1b1a16] w-[100%] flex justify-center items-center p-4 '>
                        <img src='/logo.jpg' alt='logo' className='w-[200px]' />
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 mt-4'>
                        <span className='font-semibold text-[26px] leading-[26px]'>Verification</span>
                        <span className='text-18px leading-[27px]'>we have sent a 4 digit code to your email</span></div>
                    <div className='mt-4'>
                        <form className='flex justify-start items-start flex-col gap-4 w-[100%]'>
                            <div className='flex flex-col justify-start items-start w-[100%]'>
                                <label className='font-[600px] text-[14px] leading-[18px] text-[#202020]'>verification</label>
                                <input type="text" placeholder='enter otp' className='w-[100%] px-2 py-2 rounded-md border-black border-[1px]' {...register('otp', { required: true })} />
                                {errors.otp && <span className='text-red-500'>otp is required</span>}
                            </div>
                        </form>
                    </div>
                    <div className='flex gap-4 mt-2 justify-between items-center'>
                        <span className='text-[14px]'>Didn't receive code?</span>
                        <div className='text-blue-500 cursor-pointer' onClick={resendButton}>Resend otp</div>
                    </div>
                    <div><Button variant='contained' color='primary' className='mt-4' type='submit' onClick={handleSubmit(verifyButton)}>{mutation.isPending ? 'Verifying...' : 'verify & continue'}</Button></div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Verification