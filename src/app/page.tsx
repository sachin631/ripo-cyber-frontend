import { Button } from "antd";
import HomeComponent from "./component/Home";
import WhoWEAre from "./component/WhoWEAre";

export default function Home(): JSX.Element {
  return (
    <main className="h-full ">
      <div className=" h-full bg-[#1b1a16]">
        <HomeComponent />
        <WhoWEAre/>
      </div>
    </main>
  );
}
