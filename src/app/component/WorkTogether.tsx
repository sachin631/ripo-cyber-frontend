'use client'

import { Button } from "antd";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apply_internship, work_together } from "@/api/apiClient";

const WorkTogether = () => {
    const query = useQuery({
        queryKey: ['work_together_details'],
        queryFn: async () => {
            const res = await work_together();
            return res;
        }
    });

    
    const work_togerther_data = query?.data?.data
    return (
        <>
            <section className="text-white flex justify-center items-center px- ">
                <div className="flex md:flex-row flex-col justify-center items-center gap-4 ">
                    <div>
                        <div className="">
                            <h1 className="text-4xl">Lets's Work Together</h1>
                            <h2 className="py-2">Book a free consultation</h2>
                        </div>
                        <div>
                            <Link href="/contact"><Button>Contact Us</Button></Link>
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <div>
                                <h1>PHONE</h1>
                                <h2>{work_togerther_data?.phone}</h2>
                            </div>
                            <div>
                                <h1>Email</h1>
                                <h2>{work_togerther_data?.email}</h2>
                            </div>
                            <div>
                                <h1>Social</h1>
                                <div className="flex gap-2">
                                    < a href={work_togerther_data ? work_togerther_data?.fb_link : '/'} target="_blank" rel="noopener noreferrer"> <FacebookIcon /> </a>
                                    < a href={work_togerther_data ? work_togerther_data?.twitter_link : '/'}>  <TwitterIcon /> </a>
                                    < a href={work_togerther_data ? work_togerther_data?.insta_link : '/'}> <InstagramIcon /></a>
                                    < a href={work_togerther_data ? work_togerther_data?.fb_link : '/'}></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:w-[60%] w-[100%]">
                        <img src="/logo.jpg" alt="image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkTogether