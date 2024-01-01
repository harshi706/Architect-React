import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import Curtain from "../../assets/product/the-bottom-of-a-beige-curtain-and-a-sheer-white-silverloenn--78a01828702a4e6707ed5b193abb8aa1.avif";
const meausrement = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:px-[50px] px-[20px] relative ">
      <div className="sm:w-2/3 w-full sm:h-auto h-full flex-2 sm:flex-grow-0  object-cover">
        <img src={Curtain} alt="" />
      </div>
      <div className="sm:w-1/3 w-full sm:h-auto flex-1 sm:flex-grow bg-slate-300 sm:text-[30px] text-[20px] font-bold px-10 sm:py-10 py-5">
        <div className="flex flex-col sm:gap-32 gap-20">
        <div>
          <p> Tips for choosing the right curtain length</p>
        </div>

        <div>
          <IoArrowForwardCircle size={55} className="absolute bottom-7" />

        </div>

        </div>
      </div>
    </div>
  );
};

export default meausrement;
