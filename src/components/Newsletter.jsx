import React from "react";
import appleplay from "../assets/Google_Play_Store_badge_EN.png"
import googleplay from "../assets/Google_Play_Store_badge_EN.png"


const Newsletter = () => {
  return(
    <>
    <div className="md:flex md:flex-col md:items-center">
    <div className="bg-cover rounded-xl bg-center h-80 w-full bg-hero md:bg-main-hero   md:max-w-[70rem] flex flex-col items-center justify-center" >
       <h1 className="text-white text-3xl md:text-4xl font-semibold text-center p-[2rem] pt-[8rem]">Do business with the world</h1>
       <div className="flex flex-row space-x-1 pb-[7rem] hover:cursor">
       <img src={appleplay}/>
        <img src={googleplay}/>
        </div>
    </div>
    </div>
    <div className="my-14 md:mx-24 md:my-[7rem]">
        <h1 className="text-2xl font-semibold text-center p-8 md:text-3xl md:text-left md:mb-10">Keep up with us by signing up for our newsletter</h1>
        <div className="flex flex-row rounded-3xl  border-black border-[0.3px] mx-10 pl-3 p-1 items-center space-x-3 md:space-x-14  md:h-10 md:w-[35rem]">
            <input className="w-[25rem]  h-8" placeholder="Email address"/>
            <button className="bg-[#068353] rounded-3xl p-2 mx-3 text-white md:h-8 text-center items-center flex  ">Subscribe</button>
        </div>
    </div>
    </>
  );
};

export default Newsletter;
