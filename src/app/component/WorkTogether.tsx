'use client'

import { Button } from "antd";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

const WorkTogether = () => {
    return (
        <>
            <section className="text-white flex justify-center items-center px-4 py-2">
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
                                <h2>+91 8053081201</h2>
                            </div>
                            <div>
                                <h1>Email</h1>
                                <h2>sangwansachin631@gmail.com</h2>
                            </div>
                            <div>
                                <h1>Social</h1>
                                <div className="flex gap-2">
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <InstagramIcon />
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