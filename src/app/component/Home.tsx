'use client'
import React, { useContext } from "react";
// import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { get_home_content } from "@/api/apiClient";
import { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
import Link from "next/link";

const Home: React.FC = () => {
  const query = useQuery({
    queryKey: ['home_details'],
    queryFn: async () => {
      const res = await get_home_content();
      return res;
    }
  });
  if (query.isLoading) {
    return (
      <>
        <section className="flex justify-start  items-center">loding...</section>
      </>
    );
  }
  if (query.isError) {
    const error: any = query.error as AxiosError;
    toast.error(error?.response?.data?.message || 'something went wrong');
  }
  return (
    <section className="h-full text-white flex justify-center items-center w-[100%] px-10 pt-10">
      <div className="md:flex  md:items-center justify-center">
        <div className="md:text-6xl text-2xl flex flex-col justify-center items-center gap-3 ">
          <div dangerouslySetInnerHTML={{ __html: query.data?.data?.description }} />
          <div>
        <Link href="/pages/unprotected/#internship"><Button className="text-black" href="/pages/unprotected/#internship" variant="contained">Learn more</Button></Link>
          </div>
        </div>
        <figure className="w-full md:w-[40%] ">
          <img src="/logo.jpg" className="rounded-full " />
        </figure>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Home;
