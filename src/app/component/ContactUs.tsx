import { Button } from '@mui/material'
import React from 'react'

const ContactUs = () => {
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
                    <input type="text" placeholder='Enter Your Name' className='w-[100%] rounded-lg text-black'/>
                    <input type="text" placeholder='Enter Your Email' className='w-[100%] rounded-lg text-black'/>
                    <input type="text" placeholder='Enter Your Phone' className='w-[100%] rounded-lg text-black'/>
                    <input type="text" placeholder='Enter Your Message' className='w-[100%] rounded-lg text-black'/>
                    <Button  variant="contained">Submit</Button>
                </form>
            </section>
        </section>
    </div>
  )
}

export default ContactUs