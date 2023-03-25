import React from "react";
import lady from "../assets/image (1).png"
import bg from "../assets/benefits (2).png"

const ladyBG = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:mt-32">
      <img src={bg} alt="dkjf" className="bg-[#45ae7b] w-full" />
      {/* <div className="w-full ">
<h2>Perks of using us?</h2>
<ul>
    <li>No monthly fees </li>
</ul>
</div> */}
      <img src={lady} alt="dkjf" className="bg-[#45ae7b] w-full " />

    </div>
  );
};

export default ladyBG;
