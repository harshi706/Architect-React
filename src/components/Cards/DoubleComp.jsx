import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import right from '../../assets/right.png';
import game from "../../assets/game.jpg";
import Double from "./Double";
const DoubleComp = () => {
  return (
    // sm:h-[35rem] 
    <div className="py-20 grid sm:grid-cols-2 grid-cols-1 sm:w-auto w-[100%] gap-4 sm:px-[50px]">
      <div className="col-span-1 ml-0 sm:pr-8 pr-0 bg-zinc-100 text-black overflow-hidden">
        <div className="pl-4 pt-4">
          <div className="flex text-3xl  pl-0 pt-0">
            {" "}
            <FaApple size={32} />
            Music
          </div>
          <div className="text-md   pl-0">
            {" "}
            Over 100 million songs.
          </div>
          <div className="text-md  pl-0 pb-5">
            Start listening for free today.
          </div>
          <div className="flex">
            <a href="#" className="flex  pr-0 ">
              Try it free <sup className="mt-3 text-[0.6rem]">10</sup>
              <GoArrowUpRight className="mt-2 ml-1" />
            </a>
            <a href="#" className="flex ">
              Learn more <img src={right} className=" ml-1 w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="pt-36 ml-[-1rem]">
          <Double />
        </div>
      </div>
      <div className="col-span-1  mr-0 bg-zinc-100 text-black overflow-hidden">
        <div className="pl-4 pt-4">
          <div className="flex text-3xl pl-0 pt-0">
            <FaApple size={32} />
            Arcade
          </div>
          <div className="text-md  pl-0">
            Get 3 months of Apple Arcade free
          </div>
          <div className="text-md pl-0 pb-5">when you buy an iPhone.</div>
          <div className="flex pl-0 text-sky-600">
            <a href="#" className="flex pr-4">
              Try it free <sup className="mt-3 text-[0.6rem]">11</sup>
              <GoArrowUpRight className="mt-2 ml-1" />
            </a>
            <a href="#" className="flex">
              Learn more <img src={right} className="ml-1 w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="mt-20">
          <img
            src={game}
            className="w-[120%] h-[400px] object-cover"
            alt="Games Image"
          />
        </div>
      </div>
    </div>

  );
};

export default DoubleComp;
