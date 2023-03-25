import React from "react";
import quartz from "../assets/Quartzlogo.png"
import bloomberg from "../assets/New_Bloomberg_Logo.png"
import cnbc from "../assets/cnbc africa.png"
import forbes from "../assets/Forbes_logo.png"
import tc from "../assets/TechCrunch_logo.png"


const Companies = () => {
    const companyLogos = [
        {
            src: quartz
        },
        {
            src: bloomberg
        },
        {
            src: cnbc
        },
        {
            src: forbes
        },
        {
            src: tc
        },
    ]
    return (
        <div className="w-full bg-[#EDF0F5] h-[5rem] flex flex-row space-x-8 px-3 items-center  no-scrollbar overflow-x-auto md:space-x-[5rem] md:px-[10rem]  md:w-screen md:h-[7rem]">
            {companyLogos.map((imgSrc) => (<img src={imgSrc.src} className="w-auto h-[1.5em] md:w-auto md:h-auto" />))}
        </div>
    );
};

export default Companies;
