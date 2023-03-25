import React from "react";

const Footer = () => {
  return(
    <>
    <div className="bg-[#068353] w-screen space-y-4 text-white p-5 h-auto flex flex-col  md:flex-row md:items-start md:p-20 md:space-x-[10rem]">
        <h1 className="text-2xl md:mt-4">Africash</h1>
        <ul className="space-y-2 md:space-y-5">
            <li className="text-md mb-1 ">Company</li>
            <li className="text-sm font-light">About us</li>
            <li className="text-sm font-light">Blog</li>
            <li className="text-sm font-light">Careers</li>
            <li className="text-sm font-light">Community</li>
        </ul>
        <ul className="space-y-2 md:space-y-5">
            <li  className="text-md mb-1">Features</li>
            <li className="text-sm font-light">Within Africa</li>
            <li className="text-sm font-light">International</li>
        </ul>
        <ul className="space-y-2 md:space-y-5">
            <li  className="text-md mb-1 space-x-1">Help</li>
            <li className="text-sm font-light">Contact</li>
            <li className="text-sm font-light">FAQ</li>
        </ul>
        <ul className="space-y-2 md:space-y-5">
            <li  className="text-md mb-1">Legal</li>
            <li className="text-sm font-light">Terms & conditions</li>
            <li className="text-sm font-light">Privacy policy</li>
        </ul>
    </div>
    </>
  );
};

export default Footer;
