import React from "react";
import phone from "../assets/Frame 14456.png"
import Companies from "../components/Companies";
import phone2 from "../assets/Group 1.png"
import phone3 from "../assets/Group 2.png"



const About = () => {
    return (
        <>
            <div className="flex flex-col items-center  mt-5 md:flex-row md:space-x-1 md:items-center md:mt-20 md:ml-20 ">
                <div className="flex flex-col items-center mt-14 md:mt-0">
                    <div className="w-[22rem] mt-14 md:w-auto md:mt-0">
                        <h2 className="text-5xl font-bold min-w text-center m-3 md:text-left md:m-5">Africa in one financial platform</h2>
                        <p className="font-medium text-center m-5 md:text-left md:pr-10">Africash is a digital ecosystem designed to make Africa one.  It’s goal is to  bring the dream of financial inclusion to all people across the continent.</p>
                    </div>
                    <button className="rounded-full p-3 bg-[#068353] hover:bg-[#26bd83] text-white text-sm md:mr-[35rem]">Get Started for free</button>
                </div>
                <img src={phone} alt="hi" className="m-10 relative w-full md:w-[48rem] md:h-[30rem]  " />
            </div>
            <Companies />
            <div className="md:mt-[5rem]">
                <div className="md:flex flex-col items-center text-center">
                <h2 className=" text-xl font-semibold  m-8 text-center px-10 md:px-0 md:text-4xl md:max-w-[50rem] ">Trusted by<span className="text-[#068353] "> 200 Million+ </span> active users across 54 countries</h2>
                </div>
                <div className="md:flex-row md:flex md:m-10 md:items-center md:space-x-40">
                    <img src={phone2} alt="hi" className="relative right-[-2rem] h-[25rem] md:h-[32rem] md:w-[29rem]" />
                    <div className="flex flex-col m-5 mt-[1rem] pl-4 md:w-[28rem]">
                        <h2 className=" text-2xl font-semibold text-left m-1 md:text-4xl ">Travel to every country in Africa without hopping on a plane</h2>
                        <p className="text-left font-md m-1 ">We are buildinga digital community that will empower you to take control of your money and make it work for you</p>
                        <button className="text-[#068353] bg-transparent text-left m-1 hover:underline">Learn More</button>
                    </div>
                </div>
                <div className="md:flex-row-reverse md:flex mt-16 mb-12 md:m-10 md:items-center md:mr-[20rem] md:space-x-40">
                    <img src={phone3} alt="hi" className=" relative right-[-10rem] h-[25rem] md:left-[10rem] md:h-auto md:w-auto" />
                    <div className="flex flex-col m-5 pl-4 md:w-[30rem]">
                        <h2 className=" text-2xl font-semibold text-left m-1 md:text-4xl  ">Earn rewards as you spend</h2>
                        <p className="text-left font-md m-1 ">We are building a digital community that will empower you to take control of your money and make it work for you</p>
                        <button className="text-[#068353] bg-transparent text-left m-1  hover:underline">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
