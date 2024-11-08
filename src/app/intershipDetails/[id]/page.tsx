import { Button } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <>
        <div>
            <h1 className='text-3xl text-center text-white m-4'>Internship Details</h1>
        </div>
        <div className='flex justify-center items-center m-4 '>
            <div className='flex justify-start md:flex-row flex-col items-center text-white md:w-[70%] w-[90%] md:gap-[8%] gap-10'>
                <section className='md:w-[50%] w-[90%]'>
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptate mollitia pariatur quis nemo quam, aut sed nulla, adipisci dicta consequatur deserunt quisquam voluptates. Recusandae corporis ipsum facilis ullam voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe eum dolorem, neque assumenda odit, atque nihil deserunt officiis placeat corrupti error velit sequi vel deleniti. Dolores expedita deserunt tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla adipisci cumque ipsam est ad odit quam! Incidunt, sit animi. Dolor neque sed hic incidunt quis unde dignissimos iusto est. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatibus dolor velit odit aut qui doloremque nobis perferendis, aspernatur ut. Veritatis, facilis! Voluptate sapiente consequatur optio vero dolorum, officiis eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet odio minima cum, numquam illum maiores error, laboriosam perferendis enim cumque unde possimus natus quis, hic quibusdam. Expedita, quo beatae.</h1>
                </section>
                <section className='md:w-[50%] w-[90%]'>
                        <form>
                            <div className='flex flex-col justify-start items-center gap-7 h-[100%]'>
                            <input type="text" placeholder='Enter Your Name' className='w-[100%] rounded-lg'/>
                            <input type="text" placeholder='Enter Your Email' className='w-[100%] rounded-lg'/>
                            <input type="text" placeholder='Enter Your Phone' className='w-[100%] rounded-lg'/>
                            <Button  variant="contained">Apply</Button>
                            </div>
                            
                        </form>
                </section>
            </div>
        </div>
        </>
    )
}

export default page