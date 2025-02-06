'use client'
import { internship_listing } from '@/api/apiClient'
import { useQuery } from '@tanstack/react-query'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const InternshipCompo: React.FC = () => {
  const query = useQuery({
    queryKey: ['internship_listing'],
    queryFn: async () => {
      const response = await internship_listing();
      return response;
    }
  });

  const internship_list = query?.data?.data;
  const router = useRouter();
  return (
    <section className=' text-white mt-4 mb-4 md:mb-0' id='internship'>
      <div className='px-10  main-div pb-4'>
        <h1 className='text-center md:text-6xl text-3xl mb-6'>Intership</h1>
        <div className='flex  md:flex-ro flex-col gap-6'>
          {internship_list?.map((curelem: any) => {
            return (
              <div key={curelem._id}>
                <h1 className='px-4 text-center py-4 w-[100] h-[80%] bg-blue-500 rounded-lg hover:bg-blue-400 cursor-pointer' onClick={() => router.push(`/intershipDetails/${curelem?._id}`)}>{curelem?.name}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InternshipCompo