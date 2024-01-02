import React, { useState } from "react";
import { GoCircle } from "react-icons/go";
import { TiTick } from "react-icons/ti";
const Button = ({onSelect}) => {
 
const [showTick,setShowTick]=useState(false)
const handleClick=()=>{
  setShowTick(!showTick);
  onSelect();
}


  return (
    <div>
      <button onClick={handleClick} className="absolute top-5 right-5 text-center border-none rounded-[50%] z-100 ">
      {showTick && <TiTick size={25} color="#2F4F4F" /> && <GoCircle size={30} color="white" />}
        {!showTick }
     
      </button>
    </div>
  );
};

export default Button;
