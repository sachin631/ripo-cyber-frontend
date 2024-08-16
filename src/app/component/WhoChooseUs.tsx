'use client'
import { Card, Col, Row } from 'antd';

const WhoChooseUs: React.FC = () => {
    const data: any = [{ title: "title", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." },{ title: "title", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." },{ title: "title", image_url: "/it_service.png", discription: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque officiis molestias ut qui! Voluptatem libero ab eveniet facere officiis nam deserunt, porro et consequuntur ut ducimus sed ipsam eos." }]
    return (
        <>
            <section className='px-10 py-10 w-[100%]'> 
                <h1 className='text-4xl text-center text-white'>WHY CHOOSE US</h1>
                <div className='mt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-center '>
                    {
                        data.map((curelem: any) => (
                            <>
                                {/* <Col span={8} className='w-[100%]'> */}
                                    <Card title={curelem.title} bordered={true} className='w-[90%]'>
                                        <img alt='image' className='' src={curelem.image_url}/>
                                        <div className='mt-4'>{curelem.discription}</div>
                                    </Card>
                                {/* </Col> */}
                            </>
                        ))
                    }
                                                           
                </div>
            </section>

        </>
    )
}

export default WhoChooseUs