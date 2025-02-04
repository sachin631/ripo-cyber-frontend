'use client'
import { privacy_details } from "@/api/apiClient";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const WhoWEAre = () => {
  const query=useQuery({
    queryKey:['who_we_are'],
    queryFn:async()=>{
      const res=await privacy_details()
      return res;
    }
  });
  if(query.isLoading){
    return(
      <div>Loading....</div>
    )
  }
  if(query.isError){
    const error:any=query.error as any;
    toast.error(error?.response?.data?.message || 'something went wrong');
  }
  console.log(query.data,'who we are');

  return (
    <>
      <section className="bg-[#1b1a16] px-10 text-white" id="about">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center text-4xl py-4">WHO WE ARE</h1>
          <div className="text-center px-8">
           <div dangerouslySetInnerHTML={{ __html: query.data?.data?.about_us }} />
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
};

export default WhoWEAre;
