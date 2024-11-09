'use client'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const InternshipCompo: React.FC = () => {
  const router=useRouter();
  return (
    <section className=' text-white mt-4 mb-4 md:mb-0' id='internship'>
      <div className='px-10  main-div pb-4'>
        <h1 className='text-center md:text-6xl text-3xl mb-6'>Intership</h1>
        <div className='flex justify-center items-center gap-4 mt-4'>
          <div className='flex flex-col gap-6'>
            <Button type='primary' className='px-4 py-4' onClick={() => router.push('/intershipDetails/1')}>Python</Button>
            <Button type='primary' className='px-4 py-4' onClick={() => router.push('/intershipDetails/1')}>Web Development</Button>
            <Button type='primary' className='px-4 py-4' onClick={() => router.push('/intershipDetails/1')}>Python</Button>
            <Button type='primary' className='px-4 py-4' onClick={() => router.push('/intershipDetails/1')}>Web Development</Button>
          </div>
          <div className='w-[30%] md:w-[40%] h-[20%]'>
            <img src='/it_service.png' className='md:rounded'/>
          </div>
          <div className='flex flex-col gap-6'>
            <Button type='primary' className='px-4 py-4'>Cyber Security</Button>
            <Button type='primary' className='px-4 py-4'>Cloud Computing</Button>
            <Button type='primary' className='px-4 py-4'>Cyber Security</Button>
            <Button type='primary' className='px-4 py-4'>Cloud Computing</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternshipCompo