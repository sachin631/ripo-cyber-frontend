import ClientTestomonial from '@/app/component/clientTestomonial'
import InternshipCompo from '@/app/component/InternshipCompo'
import Navbar from '@/app/component/Navbar'
import OurServices from '@/app/component/ourServices'
import WhoChooseUs from '@/app/component/WhoChooseUs'
import WhoWEAre from '@/app/component/WhoWEAre'
import WorkTogether from '@/app/component/WorkTogether'
import YourCareer from '@/app/component/YourCareer'
import React from 'react'

const layout = ({ children }: any) => {
    return (
        <div>
            <Navbar />
            {children}
            {/* <HomeComponent /> */}
            {/* <WhoWEAre />
            <OurServices />
            <WhoChooseUs />
            <YourCareer />
            <ClientTestomonial />
            <InternshipCompo />
            <WorkTogether /> */}
        </div>
    )
}

export default layout