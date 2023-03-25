import Africash from "../assets/Frame 5.png"
import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bg-[#068353] w-screen space-y-4 text-white p-5 h-auto flex flex-col  md:flex-row md:items-start md:p-20 md:space-x-[10rem] pb-10 pt-10">
                <img src={Africash} className="w-fit h-fit md:mt-4 hover:cursor-pointer" alt="africash logo" />
                <ul className="space-y-2 md:space-y-5  ">
                    <li className="text-md mb-1 ">Company</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">About us</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">Blog</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">Careers</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">Community</li>
                </ul>
                <ul className="space-y-2 md:space-y-5">
                    <li className="text-md mb-1">Features</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">Within Africa</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">International</li>
                </ul>
                <ul className="space-y-2 md:space-y-5">
                    <li className="text-md mb-1 space-x-1">Help</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">Contact</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">FAQ</li>
                </ul>
                <ul className="space-y-2 md:space-y-5">
                    <li className="text-md mb-1">Legal</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">Terms & conditions</li>
                    <li className="text-sm font-light hover:cursor-pointer hover:underline underline-offset-4 ">Privacy policy</li>
                </ul>
            </div>
        </>
    );
};

export default Footer;
