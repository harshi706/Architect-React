import React from "react";
import apple from "../../Dropitems/apple.jpg";

const Phone = () => {
  return (
    <div>
      <div className="sm:relative flex flex-col sm:h-auto h-[75vh] items-center sm:px-[50px] px-[20px] sm:z-50 z-50  ">
        <div className=" sm:absolute sm:top-20 text-center flex flex-col items-center justify-center gap-3 sm:w-[40vw] w-[80vw] ">
          <div className="z-20 font-bold sm:text-4xl text-xl  ">
            Why Ayatrio is the best place 
            to buy home farnising
          </div>
          <div className="z-20 text-base sm:w-[35vw] w-[70vw]">
            You can choose a payment option that works for you, pay less with a
            trade-in, connect your new iPhone to your carrier, and get set up
            quickly. You can also chat with a Specialist anytime.
          </div>
          {/* <div className="z-20 sm:text-base sm:hidden block  text-xs w-[35vw] ">
            You can choose a payment option that works for you, pay less with a
            trade-in, connect your new iPhone to your carrier.
          </div> */}

          <a href="#" className="text-sky-600 z-20 sm:text-lg text-sm">
            Learn more &gt;
          </a>
        </div>
        <div>
          <img src={apple} alt="" className="h-100  sm:w-100 w-full" />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Phone;
