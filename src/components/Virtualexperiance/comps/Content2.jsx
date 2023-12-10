import React from "react";

import image1 from "../../../assets/last3/i (1).webp";
import image2 from "../../../assets/last3/i (2).webp";
import image3 from "../../../assets/last3/i (3).webp";  
import image4 from "../../../assets/last3/i (4).webp";  
import image6 from "../../../assets/last3/i (7).webp";  
import image11 from "../../../assets/last3/i (8).webp"; 
import { useNavigate } from "react-router-dom";
import Header from "../../Header";

const Content2 = () => {
  let navigate =  useNavigate()
  const prevHandler = ()=>{
    navigate('/virtualexperience/budget')
   }
   const nextHandler = ()=>{
    navigate('/virtualexperience/content3')
   }
  return (
    <div className="w-full h-full  absolute top-0 right-0 text-sm">
      <Header/>
      <div className="heading flex items-center justify-between m-20">
    <h1 className="font-bold text-xl text-rose-900" >Which Color of Wood Flooring <br />Are You Intrested in?</h1>
    <p className="text-bold text-xl">5 of 6</p>
      </div>
      <div className="tiles flex justify-center items-center flex-col gap-10 ">
        <div className="row-1 flex flex-row gap-20">
          <div>
            <img className="w-12 h-12" src={image1} alt="" />
            <p>Off white</p>
          </div>

          <div>
            <img className="w-12 h-12" src={image2} alt="" />
            <p>Natural</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image3} alt="" />
            <p>Taupe</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image4} alt="" />
            <p>Medium <br /> Brown</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image6} alt="" />
            <p>Grey</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image11} alt="" />
            <p>Smoke</p>
          </div>
        </div>
        <div className="row-1 flex flex-row gap-20">
          <div>
            <img className="w-12 h-12" src={image1} alt="" />
            <p>Off white</p>
          </div>

          <div>
            <img className="w-12 h-12" src={image2} alt="" />
            <p>Natural</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image3} alt="" />
            <p>Taupe</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image4} alt="" />
            <p>Medium <br /> Brown</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image6} alt="" />
            <p>Grey</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image11} alt="" />
            <p>Smoke</p>
          </div>
        </div>
        <div className="row-1 flex flex-row gap-20">
          <div>
            <img className="w-12 h-12" src={image1} alt="" />
            <p>Off white</p>
          </div>

          <div>
            <img className="w-12 h-12" src={image2} alt="" />
            <p>Natural</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image3} alt="" />
            <p>Taupe</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image4} alt="" />
            <p>Medium <br /> Brown</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image6} alt="" />
            <p>Grey</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image11} alt="" />
            <p>Smoke</p>
          </div>
        </div>
      </div>

      <button onClick={prevHandler} className="mt-8 w-40 absolute left-16 rounded-2xl p-1 border-solid border-2 border-slate-400">
        Previous Question
      </button>

      <div className="mt-8 flex flex-row absolute right-16 gap-4  text-gray-400">
        <p>
          {" "}
          Products available (728){" "}
          <span className=" underline ">Skip to results</span>
        </p>
        <button onClick={nextHandler} className=" w-40 rounded-2xl p-1 border-solid border-2 bg-slate-500 text-white border-slate-500">
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Content2;
