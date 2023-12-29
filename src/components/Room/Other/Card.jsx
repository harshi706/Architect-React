import React from "react";
import { useState, useEffect } from "react";
import Calculation from "./Calculation";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import '../styles.css'
const Card = () => {
  const [imgColor, setImgColor] = useState("red");
  const [widthstate, setwidthstate] = useState(0);
  const [heightstate, setheightstate] = useState(0);
  const [pricestate, setpricestate] = useState(0);
  const [coststate, setcoststate] = useState(7000);
  const [rollstate, setrollstate] = useState(0);

  const[visible,setVisible]=useState(false);
  const handleClick=()=>{
    setVisible(!visible);
  };
  const[hidden, setHidden]=useState(false);
  const handlefunc=()=>{
    setHidden(!hidden);
  }

  const imgSets = {
    red: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36a7d256-5bf5-4eb8-a73a-26c483bd7329/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e262f53-c243-462b-83e5-ea547d0d9472/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/afcc0d47-2541-410a-9048-71e26bcae111/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36a7d256-5bf5-4eb8-a73a-26c483bd7329/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
    ],
    blue: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1e4673c-ca2e-48a2-8527-bd9a92e3d20e/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/137cd799-0bbe-4b4a-af8e-4d24ea4e71ef/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/722b1721-b5e5-464e-91d2-cf597ebc1ec1/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/22598587-c4b5-446b-bc01-69bf80681cdf/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
    ],
    green: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51971fe1-512d-4cb5-8c2b-67c44c19de09/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a16c51c-d2e3-430b-8e47-b0aed425ad2b/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b49ed36-ab47-4da1-aeb2-9b530f73de29/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e7c2768b-2762-47c6-b4a3-313499358ce8/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(imgSets[imgColor][0]);
  const priceCal = () => {
    const area = (widthstate * heightstate) / 50;
    const calculatedPrice = area * coststate;
    setpricestate(calculatedPrice.toFixed(2));
    setrollstate(area.toFixed(2));
  };
  useEffect(() => {
    priceCal();
  }, [widthstate, heightstate, coststate]);

  const changeColor = (color) => {
    setImgColor(color);
    setSelectedImage(imgSets[color][0]);
    priceCal();
    if (color === "red") {
      setcoststate(17000);
    } else if (color === "blue") {
      setcoststate(18000);
    } else {
      setcoststate(13000);
    }
  };

  return (
    <>
      {/* texts */}
      <div className="flex justify-start gap-4 w-[28vw] ml-10">
      <div className=" mt-10 sm:w-auto w-[80vw] prefence-text">
        <div className="textHolders flex flex-col ml-0">
          <h1 className="text-2xl font-bold mb-2">Football Shoe</h1>
          <h3 className="mb-2 font-semibold">
            Collection: Metropolitan Stories Travel Styles
          </h3>
          <h3 className="mb-4 font-semibold">
            Pattern Number: 77siu7Cr7-{imgColor}
          </h3>
          <div className="price">
            <h2 className="font-bold mb-1">MRP: ₹{coststate}/Shoe</h2>
            <h5 className="">incl. Of taxes</h5>
            <h4>Also Includes Taxes</h4>
          </div>
        </div>

        {/* color-container */}
        <div className="colorContainer flex flex-col items-start mt-4 sm:w-auto w-[80vw]">
          <h1 className="mb-2 font-bold">Other Colorways</h1>
          <div className="colors flex gap-3">
            <div
              onClick={() => changeColor("red")}
              className={`color1 w-[50px] h-[50px] rounded-full ${
                imgColor === "red" ? "border border-slate-800" : ""
              }   bg-red-500`}
            ></div>
            <div
              onClick={() => changeColor("blue")}
              className={`color1 w-[50px] h-[50px] rounded-full ${
                imgColor === "blue" ? "border border-slate-800" : ""
              }  bg-blue-500`}
            ></div>
            <div
              onClick={() => changeColor("green")}
              className={`color1 w-[50px] h-[50px] rounded-full  ${
                imgColor === "green" ? "border border-slate-800" : ""
              } bg-green-500`}
            ></div>
          </div>
        </div>

        {/* calculations */}
        <div className="border border-gray-300 w-72 rounded-xl mt-2 pt-4 pb-4 pl-3">
        <div className="flex items-center">
           
            <div className="pl-3"><Calculation/></div>
          </div>
         
        
          <hr />
          <div className="flex items-center pt-3">
        <div>
          <TbTruckDelivery size={24} />
        </div>
        <div className="pl-3">Delivery</div>
      </div>
      <div className="sm:pl-60 -ml-3 -mt-1">
        {!visible ? (
        <div className='mt-1 mr-6 cursor-pointer'><MdOutlineArrowForwardIos size={16} onClick={handleClick} /></div>
        ) : (
          <div className='mt-1 mr-6 cursor-pointer'><IoIosArrowDown size={16} onClick={handleClick} /></div>
        )}
      </div>
      <div className="pb-3 text-gray-600 sm:pl-8 -mt-4">
        Check availability
      </div>
      {visible && <div><div className="pl-7">Enter pincode:</div><input type="number" name="pincode" value="" className="border border-black ml-8 mb-2" /></div>}
      <hr />
      <div className="flex pt-3">
        <div className="sm:pr-3">
          <FaStoreAlt size={24} />
        </div>
            <div>In-store</div>
          </div>
          <div className="sm:pl-60 -ml-3 -mt-1">
          {!hidden ? (
          <div className='mt-1 mr-6 cursor-pointer'><MdOutlineArrowForwardIos size={16} onClick={handlefunc} /></div>
        ) : (
          <div className='mt-1 mr-6 cursor-pointer'><IoIosArrowDown size={16} onClick={handlefunc} /></div>
        )}          </div>
          <div className="text-gray-600 pl-9 -mt-4">Check in-store stock</div>
          {hidden && <div><div className="pl-7">Enter city:</div><input type="text" name="city" value="" className="border border-black ml-8 mb-2" /></div>}
        </div>

        {/* //buttons */}
        <div className="buttons mt-4 sm:w-auto w-[80vw] ">
          <div className="guestCheckout">
            <button className="bg-black text-white w-80 h-16 rounded-full hover:bg-gray-900 transition duration-300">
              Add To Bag
            </button>
          </div>
          <div className="memberCheckout mt-4">
            <button className="bg-black text-white w-80 h-16 rounded-full hover:bg-gray-900 transition duration-300">
              Contact
            </button>
          </div>
        </div>
           </div>
      </div>
    </>
  );
};

export default Card;
