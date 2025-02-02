import { Button } from "antd";
import HomeComponent from "./component/Home";
import WhoWEAre from "./component/WhoWEAre";
import OurServices from "./component/ourServices";
import WhoChooseUs from "./component/WhoChooseUs";
import YourCareer from "./component/YourCareer";
import ClientTestomonial from "./component/clientTestomonial";
import WorkTogether from "./component/WorkTogether";
import InternshipCompo from "./component/InternshipCompo";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="h-full ">
      <div className=" h-full bg-[#1b1a16]">
        <HomeComponent />
        <WhoWEAre/>
        <OurServices/>
        <WhoChooseUs/>
        <YourCareer/>
        <ClientTestomonial/>
        <InternshipCompo/>
        <WorkTogether/>
      </div>
    </main>
  );
}
