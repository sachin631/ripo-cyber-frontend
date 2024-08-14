import React, { useContext } from "react";
import { Button } from "antd";

const Home: React.FC = () => {
  return (
    <section className="h-full text-white flex justify-center items-center w-[100%] px-10">
      <div className="flex justify-between items-center md">
        <div className="text-6xl flex flex-col gap-3 ">
          <span>IT SOLUTIONS </span>
          <span>THAT TRANSFORM</span>
          <span>YOUR BUSINESS</span>
          <div>
            <Button className="text-black">Learn more</Button>
          </div>
        </div>
        <figure className="w-full md:w-[40%]">
          <img src="/logo.jpg" />
        </figure>
      </div>
    </section>
  );
};

export default Home;
