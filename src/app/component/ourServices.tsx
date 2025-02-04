'use client'
import { get_our_services_listing } from "@/api/apiClient";
import { DATA_TYPE } from "@/app.constant";
import { useQuery } from "@tanstack/react-query";
import { Card } from "antd"
import Meta from "antd/es/card/Meta"

const OurServices: React.FC = () => {
    const query = useQuery({
        queryKey: ['services_listing'],
        queryFn: async () => {
            const res = await get_our_services_listing(DATA_TYPE.OUR_SERVICES);
            return res;
        }
    });
    if (query?.isLoading) {
        return <div className="flex justify-center items-center">loading...</div>
    }
    const OUR_SERVICES_list = query?.data?.data?.use_cases;
    return (
        <>
            <section className="text-white mt-10 px-10 py-10">
                <h1 className="text-center text-4xl p-4">OUR SERVICES</h1>
                <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-evenly md:mt-4 overflow-x-auto scrollbar-hide ">
                    {
                        OUR_SERVICES_list?.map((curelem: any, index: number) => (
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

export default OurServices