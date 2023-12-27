import React, { useState } from "react";
const Doublecard = () => {
  const img = [
    "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <div className="main-doublecard w-full h-full flex sm:flex-row flex-col  gap-[10px] sm:px-[50px] px-[20px]  ">
        <div className="left-doublecard  flex flex-col items-center justify-center sm:w-1/2 w-full h-full">
          <div className="flex w-full h-full justify-center items-center">
            <div className="relative flex justify-center items-center  w-full h-full">
              <h1 className=" text-white z-20 font-bold text-2xl absolute">
                Ayatrio
              </h1>
              <img src={img[0]} alt="" className="w-full h-full " />
            </div>
          </div>
        </div>
        <div className="right-doublecard  flex sm:w-1/2 w-full h-full">
          <div className="flex w-full h-full justify-center items-center">
            <div className="relative flex justify-center items-center  w-full h-full">
              <h1 className=" text-white z-20 font-bold text-2xl absolute">
                Ayatrio
              </h1>
              <img src={img[1]} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doublecard;
