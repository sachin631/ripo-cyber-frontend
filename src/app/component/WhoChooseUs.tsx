'use client'
import { get_our_services_listing } from '@/api/apiClient';
import { DATA_TYPE } from '@/app.constant';
import { useQuery } from '@tanstack/react-query';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const WhoChooseUs: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['why_choose_us'],
        queryFn: async () => {
            const res = await get_our_services_listing(DATA_TYPE.WHY_US);
            return res;
        }
    });

    if (isLoading) {
        return <div className="flex justify-center items-center">Loading...</div>;
    }

    const OUR_why_list = data?.data?.use_cases || [];

    return (
        <section className="px-10 py-10 w-full">
            <h1 className="text-4xl text-center text-white">WHY CHOOSE US</h1>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-center">
                {OUR_why_list.map((curelem: any, index: any) => (
                    // <Card 
                    //     key={curelem?._id} 
                    //     title={curelem?.name} 
                    //     bordered={true} 
                    //     className="w-[90% h-[60vh] overflow-x-hidden overflow-y-auto"
                    // >
                    //     <img 
                    //         alt="image" 
                    //         className="w-full h-40 object-cover" 
                    //         src={curelem?.image?.url || '/default-image.jpg'} 
                    //     />
                    //     <div className="mt-4">{curelem?.description}</div>
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
                ))}
            </div>
        </section>
    );
}

export default WhoChooseUs;
