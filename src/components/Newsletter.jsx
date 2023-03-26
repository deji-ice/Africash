import React from "react";
import twitter from "../assets/Frame 14443.png"
import meta from "../assets/Frame 14445.png"
import linkedIn from "../assets/Frame 14446.png"
import instagram from "../assets/Frame 14444.png"
import mdBackground from "../assets/Frame 14438 (3).png"
import smBackground from "../assets/Frame 14438 (2).png"

const Newsletter = () => {
  return (
    <>
      <div className="md:flex md:flex-col md:items-center">
       
        <img src={mdBackground} className="hidden md:w-screen md:flex "/> 
        <img src={smBackground} className="md:hidden w-full"/>

      </div>
      <div className="my-14 md:mx-24 md:my-[7rem]">
        <h1 className="text-2xl font-semibold text-center p-8 md:text-4xl md:text-left md:mb-10">Keep up with us by signing up for our newsletter</h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-row rounded-3xl  border-gray-800 border-[0.2px] mx-4 md:mx-10 pl-3 md:ml-9 p-1 items-center space-x-[2px] md:space-x-[10rem]  md:h-10 w-[21.7rem] md:w-[35rem]">
            <input className="w-[25rem]  h-8" placeholder="Email address" />
            <button className="bg-[#068353] text-sm rounded-3xl p-2  text-white md:h-8 text-center items-center flex  ">Subscribe</button>
          </div>
          <div className="hidden md:flex space-x-5">
            <img src={instagram} className="hover:cursor-pointer" />
            <img src={twitter}  className="hover:cursor-pointer" />
            <img src={meta}  className="hover:cursor-pointer"  />
            <img src={linkedIn}  className="hover:cursor-pointer"  />
          </div>
          </div>
        </div>
      </>
      );
};

      export default Newsletter;
