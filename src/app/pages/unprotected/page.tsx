import ClientTestomonial from '@/app/component/clientTestomonial'
import Home from '@/app/component/Home'
import InternshipCompo from '@/app/component/InternshipCompo'
import OurServices from '@/app/component/ourServices'
import WhoChooseUs from '@/app/component/WhoChooseUs'
import WhoWEAre from '@/app/component/WhoWEAre'
import WorkTogether from '@/app/component/WorkTogether'
import YourCareer from '@/app/component/YourCareer'
import React from 'react'

const page = () => {
    return (
        <main className="h-full ">
            <div className=" h-full bg-[#1b1a16]">
                <Home />
                <WhoWEAre />
                <OurServices />
                <WhoChooseUs />
                <YourCareer />
                <ClientTestomonial />
                <InternshipCompo />
                <WorkTogether />
            </div>
        </main>

    )
}

export default page