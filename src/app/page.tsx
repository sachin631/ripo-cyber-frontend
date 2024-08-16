import { Button } from "antd";
import HomeComponent from "./component/Home";
import WhoWEAre from "./component/WhoWEAre";
import OurServices from "./component/ourServices";
import WhoChooseUs from "./component/WhoChooseUs";
import YourCareer from "./component/YourCareer";
import ClientTestomonial from "./component/clientTestomonial";

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
      </div>
    </main>
  );
}
