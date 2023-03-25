import React from "react";
import Card from "./Card";
import bimpe from "../assets/Ellipse 199.png"
import david from "../assets/Ellipse 200 (1).png"
import ifeoma from "../assets/Ellipse 199.png"
import isaac from "../assets/Ellipse 200.png"

const Feedbacks = () => {
    const users = [

        {
            name: "Bimpe Adigun",
            occupation: "Content Creator",
            src: bimpe,
            feedback: `Africash is a really good app and it has made my life easier. I can now order as many things as
            I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.`,

        },
        {
            name: "David Aguda",
            occupation: "Software Developer",
            src: david,
            feedback: `Africash is a really good app and it has made my life easier. I can now order as many things as
            I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.`,
        },
        {
            name: "Ifeoma Oluchi",
            occupation: "Retailer",
            src: ifeoma,
            feedback: `Africash is a really good app and it has made my life easier. I can now order as many things as
            I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.`,
        },
        {
            name: "Isaac Cole",
            occupation: "Accountant",
            src: isaac,
            feedback: `Africash is a really good app and it has made my life easier. I can now order as many things as
            I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.`,
        },
    ]
    return <div className="flex flex-col  space-y-2 mx-3 my-5 md:mt-16">
        <div className="flex flex-col items-center md:mb-12">
            <h2 className=" text-2xl font-semibold text-center m-5 max-w-[23rem] md:text-4xl md:max-w-[35rem]">Still on the fence? here's what
                <span className="text-[#068353] "> our users</span> are saying</h2>
        </div>
        <div className="overflow-x-auto no-scrollbar md:ml-24">
            <div className="flex flex-row w-fit overflow-x-auto items-center">
                <Card name={users[0].name} occupation={users[0].occupation} feedback={users[0].feedback} src={users[0].src} />
                <Card name={users[1].name} occupation={users[1].occupation} feedback={users[1].feedback} src={users[1].src} />
                <Card name={users[2].name} occupation={users[2].occupation} feedback={users[2].feedback} src={users[2].src} />
                <Card name={users[3].name} occupation={users[3].occupation} feedback={users[3].feedback} src={users[3].src} />
            </div>
        </div>
    </div>;
};

export default Feedbacks;
