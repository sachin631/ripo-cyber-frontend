'use client'
import { Card, Col, Row } from 'antd';

const ClientTestomonial: React.FC = () => {
    const data: any = [{ name: "Ritik Dhillion", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }]
    return (
        <>
            <section className='px-10 py-5 w-[100%]'>
                <h1 className='text-4xl text-center text-white'>CLIENT TESTIMONIALS</h1>
                <div className='mt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-center overflow-y-auto'>
                    {
                        data.map((curelem: any) => (
                            <>
                                <Card bordered={true} className='w-[100%] px-6'>
                                    <div className='flex justify-center items-center gap-2 px-6'>
                                        <img alt='image' className='' src={curelem.image_url} />
                                        <h1 className='text-xl'>{curelem.name}</h1>                                    
                                    </div>
                                    <div className='mt-4'>{curelem.discription}</div>
                                </Card>
                            </>
                        ))
                    }

                </div>
            </section>

        </>
    )
}

export default ClientTestomonial