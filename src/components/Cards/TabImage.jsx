import React from "react";
import "./tabs.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
const TabImage = ({src,alt,handleTab,circled}) => {
  return (
    <div className="row-span-2 overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={src}
        alt={alt}
      />
      <div className="text-md text-black absolute top-16 left-10  bg-white border-4 border-slate-400 rounded-full w-5 h-5">
        <div
          className={`flex-row z-10 mt-4 w-36 h-32 flex items-center pb-2 bg-white`}
          onClick={handleTab}
        >
          <div className="flex flex-row relative">
            {circled.map((data) => (
              <div
                className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-2"
                key={data.productId}
              >
                <h2 className="font-bold pt-1 pr-2">{data.productTitle}</h2>
                <p className="font-normal pb-2">{data.productCategory}</p>
                <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                  ₹{data.price}
                </p>
              </div>
            ))}
            <div className="absolute right-0 top-0 border-l border-black flex justify-end items-center h-full pr-2">
              <BsArrowRightCircleFill className="flex ml-2 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabImage;
