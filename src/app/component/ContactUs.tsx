'use client'
import { contat_us } from '@/api/apiClient';
import { Button } from '@mui/material'
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const ContactUs = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone_number: '',
            message: ''
        },
    });
    const mutation = useMutation({
        mutationFn: async (data) => {
            const res = await contat_us(data);
            return res;
        },
        onSuccess: (res: any) => {
            console.log(res, 'res');
            toast.success(res?.message);
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message);
        }
    });
    const submitbtn = (data: any) => {
        mutation.mutate(data);
        reset();
    }

    return (
        <div className='md:m-[20%] mt-16'>
            <h1 className='text-4xl text-yellow-300 text-center md:mt-5 m-1 mt-[40%]'>Contact Us</h1>
            <p className='text-white text-2xl text-center'>Any Question Or Remarks Just write Your Message</p>
            <section className=' flex md:flex-row flex-col justify-start items-center m-8'>
                <section className='w-[50%] md:mt- mb-4 flex justify-center items-center'>
                    <img src='/logo.jpg' className='w-[60%] h-[100%] rounded-full' />
                </section>
                <section>
                    <form className='w-[100%] flex flex-col justify-center items-center gap-4'>
                        <input type="text" placeholder='Enter Your Name' className='w-[100%] rounded-lg text-black px-3 py-3' {...register('name', { required: true })} />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                        <input type="text" placeholder='Enter Your Email' className='w-[100%] rounded-lg text-black px-3 py-3' {...register('email', { required: true })} />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                        <input type="text" placeholder='Enter Your Phone' className='w-[100%] rounded-lg text-black px-3 py-3' {...register('phone_number', { required: true })} />
                        {errors.phone_number && <span className="text-red-500">Phone is required</span>}
                        <input type="text" placeholder='Enter Your Message' className='w-[100%] rounded-lg text-black px-3 py-3' {...register('message', { required: true })} />
                        {errors.message && <span className="text-red-500">Message is required</span>}
                        <Button variant="contained" onClick={handleSubmit(submitbtn)}>Submit</Button>
                    </form>
                </section>
            </section>
            <ToastContainer />
        </div>
    )
}

export default ContactUs