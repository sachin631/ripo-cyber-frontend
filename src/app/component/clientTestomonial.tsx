'use client'
import { get_our_services_listing } from '@/api/apiClient';
import { DATA_TYPE } from '@/app.constant';
import { useQuery } from '@tanstack/react-query';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';

const ClientTestomonial: React.FC = () => {
    const query = useQuery({
        queryKey: ['client_testomonial_listing'],
        queryFn: async () => {
            const res = await get_our_services_listing(DATA_TYPE.USE_CASE);
            return res;
        }
    });
    if (query?.isLoading) {
        return <div className="flex justify-center items-center">loading...</div>
    }
    const OUR_use_cases_list = query?.data?.data?.use_cases;
    const data: any = [{ name: "Ritik Dhillion", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }, { name: "Sachin Sangwan", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }]
    return (
        <>
            <section className='px-10 py-5 w-[100%] ' id="useCase">
                <h1 className='text-4xl text-center text-white'>CLIENT TESTIMONIALS</h1>
                <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:justify-evenly md:mt-4 overflow-x-auto scrollbar-hide'>
                    {
                        OUR_use_cases_list?.map((curelem: any,index:any) => (
                                // <Card bordered={true} className='w-[100%] px-6 my-6 max-h-[70vh] ' key={curelem?._id}>
                                //     <div className='flex justify-center items-center gap-2 px-6'>
                                //         <img alt='image' className='' src={curelem?.image?.url} />
                                //         <h1 className='text-xl'>{curelem?.name}</h1>
                                //     </div>
                                //     <div className='mt-4'>{curelem.description}</div>
                                // </Card>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                key={index}
                                cover={<img alt="example" src={curelem?.image?.url} />}
                                className="max-h-[60vh] overflow-x-hidden overflow-y-auto min-w-[240px] scrollbar-hide"
                            >
                                <Meta title={curelem.name} description={curelem.description} />
                            </Card>
                        ))
                    }

                </div>
            </section>

        </>
    )
}

export default ClientTestomonial