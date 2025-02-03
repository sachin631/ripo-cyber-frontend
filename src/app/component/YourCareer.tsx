'use client'

import { carerr_details } from "@/api/apiClient";
import { useQuery } from "@tanstack/react-query";

const YourCareer = () => {
    const query = useQuery({
        queryKey: ['carerr_details'],
        queryFn: async () => {
            const res = await carerr_details();
            return res;
        }
    });
    if (query.isLoading) {
        return <div>Loading...</div>
    }
    const carerr = query.data?.data;
    return (
        <>
            <h1 className="text-center text-4xl text-white mt-10" id="career">Your Career</h1>
            <section className="flex justify-center items-center  py-10 px-10 text-white">
                <p>
                    <div dangerouslySetInnerHTML={{ __html: carerr?.description }} />
                </p>
            </section>
        </>
    )
}

export default YourCareer;