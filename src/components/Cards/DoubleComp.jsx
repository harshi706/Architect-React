import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import game from "../../assets/game.jpg";
import Double from "./Double";
const DoubleComp = () => {
  return (
    <div>
      <div className=" text-center grid sm:grid-cols-2 grid-cols-1 sm:h-[35rem] sm:w-auto w-[100%] gap-4 sm:px-[50px] px-[20px]">
        <div className="col-span-1 sm:ml-12 ml-0 sm:pr-8 pr-0 bg-green-950 text-white overflow-hidden">
          <div>
            <div className="flex items-center justify-center text-3xl  pl-0 sm:pt-16 pt-0">
              {" "}
              <FaApple size={32} />
              Music
            </div>
            <div className="text-md   pl-0">
              {" "}
              Over 100 million songs.
            </div>
            <div className="text-md text-center  pl-0 pb-5">
              Start listening for free today.
            </div>
            <div className="flex  items-center justify-center">
              <a href="#" className="flex  pr-0 ">
                Try it free <sup className="mt-3 text-[0.6rem]">10</sup>
                <GoArrowUpRight className="mt-2 ml-1" />
              </a>
              <a href="#" className="flex ">
                Learn more <FaAngleRight className="mt-2 ml-1" />
              </a>
            </div>
          </div>
          <div className="pt-7 ml-[-1rem]">
            <Double />
          </div>
        </div>
        <div className="col-span-1  mr-0 bg-zinc-100 text-black overflow-hidden">
          <div className="">
            <div className="flex items-center justify-center text-3xl pl-0  sm:pt-16 pt-0">
              <FaApple size={32} />
              Arcade
            </div>
            <div className="text-md  pl-0">
              Get 3 months of Apple Arcade free
            </div>
            <div className="text-md pl-0 pb-5">when you buy an iPhone.</div>
            <div className="flex items-center justify-center pl-0 text-sky-600">
              <a href="#" className="flex pr-4">
                Try it free <sup className="mt-3 text-[0.6rem]">11</sup>
                <GoArrowUpRight className="mt-2 ml-1" />
              </a>
              <a href="#" className="flex">
                Learn more <FaAngleRight className="mt-2 ml-1" />
              </a>
            </div>
          </div>
          <div className="mt-12">
            <img
              src={game}
              className="w-[120%] h-[400px] object-cover"
              alt="Games Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleComp;
