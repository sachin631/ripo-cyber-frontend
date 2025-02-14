'use client'
import { Button } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { queryClient } from '@/tanstack/Store'
import Link from 'next/link'
import { Modal } from 'antd'
import { useNewPassword } from '@/hooks/useMutation'

const NewPassword = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            password: '',
            confirm_password: ''
        }
    });

    const mutation = useNewPassword();

    useEffect(() => {
        if (mutation.isSuccess) {
            setIsModalOpen(true);
        }
    }, [mutation.isSuccess]);

    const onSubmit = (data: any) => {
        if (data.password !== data.confirm_password) {
            toast.error('Passwords do not match');
            return;
        }
        data.email = queryClient.getQueryData(['email']);
        mutation.mutate(data);
    }

    return (
        <>
            <Modal title="" open={isModalOpen} footer={null}>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <img src="/tickMark.svg" alt="logo" className='w-[200px]' />
                    <h1 className='text-center font-bold'>Password Changed Successfully</h1>
                    <p className='text-center'>You can use your new password to login into your account</p>
                    <Button className='px-4 py-4 bg-[#1b1a16] text-white'><Link href='/login'>Login</Link></Button>
                </div>
            </Modal>
            <div className='flex justify-center items-center min-h-screen '>
                <div className='bg-[#FFFFFF] shadow-2xl h-[80vh] md:w-[40%] w-[90%] flex justify-center items-center flex-col rounded-t-4xl'>
                    <div className='bg-[#1b1a16] w-[100%] flex justify-center items-center p-3 '>
                        <img src='/logo.jpg' alt='logo' className='w-[200px]' />
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 mt-4'>
                        <span className='font-semibold text-[26px] leading-[26px]'>New Password</span>
                        <span className='text-18px leading-[27px]'>Create a new password to login into your account</span>
                    </div>
                    <div className='mt-4 w-[80%]'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full'>
                            <div className='flex flex-col w-full'>
                                <label className='font-semibold text-[14px] text-[#202020]'>Password</label>
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    className='w-full px-2 py-2 rounded-md border border-black'
                                    {...register('password', { required: 'Password is required' })}
                                />
                                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='font-semibold text-[14px] text-[#202020]'>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder='Confirm your password'
                                    className='w-full px-2 py-2 rounded-md border border-black'
                                    {...register('confirm_password', { required: 'Confirm Password is required' })}
                                />
                                {errors.confirm_password && <span className='text-red-500'>{errors.confirm_password.message}</span>}
                            </div>
                            <Button variant='contained' color='primary' type='submit' className='mt-4'>Confirm</Button>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default NewPassword
