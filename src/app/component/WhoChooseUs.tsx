'use client'
import { get_our_services_listing } from '@/api/apiClient';
import { DATA_TYPE } from '@/app.constant';
import { useQuery } from '@tanstack/react-query';
import { Card, Col, Row } from 'antd';

const WhoChooseUs: React.FC = () => {
    const query = useQuery({
        queryKey: ['services_listing'],
        queryFn: async () => {
            const res = await get_our_services_listing(DATA_TYPE.WHY_US);
            return res;
        }
    });
    if (query?.isLoading) {
        return <div className="flex justify-center items-center">loading...</div>
    }
    const OUR_why_list = query?.data?.data?.use_cases;
    return (
        <>
            <section className='px-10 py-10 w-[100%]'>
                <h1 className='text-4xl text-center text-white'>WHY CHOOSE US</h1>
                <div className='mt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-center overflow-x-auto'>
                    {
                        OUR_why_list.map((curelem: any) => (
                            <>
                                {/* <Col span={8} className='w-[100%]'> */}
                                <Card title={curelem?.name} bordered={true} className='w-[90%] h-[60vh] overflow-x-hidden overflow-y-auto' >
                                    <img alt='image' className='' src={curelem?.image?.url} />
                                    <div className='mt-4'>{curelem?.description}</div>
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