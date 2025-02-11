'use client'
import { apply_internship, internship_details } from '@/api/apiClient'
import { Button } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'

const page = () => {
    const { id } = useParams();

    const query = useQuery({
        queryKey: ['internship_details'],
        queryFn: async () => {
            const res = await internship_details(id);
            return res;
        }
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            const res = await apply_internship(data);
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

    const onSubmitbtn = async (data: any) => {
        data.internship_id = id;
        console.log(data, 'data');
        mutation.mutate(data);
    }
    console.log('hello');
    const internship_data = query?.data?.data;
    return (
        <>
            <div className='bg-[#1b1a16] px-1 py-1'>
                <div>
                    <h1 className='text-3xl text-center text-white m-4'>Internship Details</h1>
                </div>
                <div className='flex justify-center items-center m-4 '>
                    <div className='flex justify-start md:flex-row flex-col items-center text-white md:w-[70%] w-[90%] md:gap-[8%] gap-10'>
                        <section className='md:w-[50%] w-[90%]'>
                            <h1 >
                                <div dangerouslySetInnerHTML={{ __html: query.data?.data?.description }} />
                            </h1>
                        </section>
                        <section className='md:w-[50%] w-[90%]'>
                            <form onSubmit={handleSubmit(onSubmitbtn)}>
                                <div className='flex flex-col justify-start items-center gap-7 h-[100%]'>
                                    <input type="text" placeholder='Enter Your Name' className='w-[100%] rounded-lg px-4 py-4 text-black outline-none' {...register('name', { required: true })} />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                    <input type="text" placeholder='Enter Your email' className='w-[100%] rounded-lg px-4 py-4 text-black outline-none' {...register('email', { required: true })} />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                    <input type="text" placeholder='Enter Your phone' className='w-[100%] rounded-lg px-4 py-4 text-black outline-none' {...register('phone', { required: true })} />
                                    {errors.phone && <span className='text-red-500'>Phone is required</span>}
                                    <Button variant="contained" type='submit' >Apply</Button>
                                </div>

                            </form>
                        </section>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default page