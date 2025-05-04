'use client'
import { apply_internship, internship_details } from '@/api/apiClient'
import { Button } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'

const InternshipDetailsPage = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string; // Type assertion

    // Redirect if no ID
    if (!id) {
        router.push('/error');
        return null;
    }

    const query = useQuery({
        queryKey: ['internship_details', id], // Include id in query key
        queryFn: async () => {
            if (!id) throw new Error('Internship ID is required');
            const res = await internship_details(id);
            return res;
        },
        enabled: !!id // Only run query if id exists
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
            const res = await apply_internship({ ...data, internship_id: id });
            return res;
        },
        onSuccess: (res: any) => {
            toast.success(res?.message || 'Application submitted successfully!');
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message || 'Application failed');
        }
    });

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    }

    if (query.isLoading) return <div>Loading...</div>;
    if (query.isError) return <div>Error loading internship details</div>;

    return (
        <div className='bg-[#1b1a16] px-1 py-1'>
            <div>
                <h1 className='text-3xl text-center text-white m-4'>Internship Details</h1>
            </div>
            <div className='flex justify-center items-center m-4'>
                <div className='flex justify-start md:flex-row flex-col items-center text-white md:w-[70%] w-[90%] md:gap-[8%] gap-10'>
                    <section className='md:w-[50%] w-[90%]'>
                        <div dangerouslySetInnerHTML={{ __html: query.data?.data?.description || '' }} />
                    </section>
                    <section className='md:w-[50%] w-[90%]'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col justify-start items-center gap-7 h-[100%]'>
                                <input 
                                    type="text" 
                                    placeholder='Enter Your Name' 
                                    className='w-[100%] rounded-lg px-4 py-4 text-black outline-none' 
                                    {...register('name', { required: 'Name is required' })} 
                                />
                                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                                
                                <input 
                                    type="email" 
                                    placeholder='Enter Your email' 
                                    className='w-[100%] rounded-lg px-4 py-4 text-black outline-none' 
                                    {...register('email', { 
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email format'
                                        }
                                    })} 
                                />
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                                
                                <input 
                                    type="tel" 
                                    placeholder='Enter Your phone' 
                                    className='w-[100%] rounded-lg px-4 py-4 text-black outline-none' 
                                    {...register('phone', { 
                                        required: 'Phone is required',
                                        minLength: {
                                            value: 10,
                                            message: 'Phone must be at least 10 characters'
                                        }
                                    })} 
                                />
                                {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                                
                                <Button 
                                    variant="contained" 
                                    type='submit'
                                    disabled={mutation.isPending}
                                >
                                    {mutation.isPending ? 'Applying...' : 'Apply'}
                                </Button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default InternshipDetailsPage;
