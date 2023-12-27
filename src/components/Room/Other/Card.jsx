import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calculation from "./Calculation";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";

const Card = () => {
  const [imgColor, setImgColor] = useState("red");
  const [widthstate, setwidthstate] = useState(0);
  const [heightstate, setheightstate] = useState(0);
  const [pricestate, setpricestate] = useState(0);
  const [coststate, setcoststate] = useState(7000);
  const [rollstate, setrollstate] = useState(0);


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
  const dropdownHeadings = [
    "Dropdown Text 1",
    "Dropdown Text 2",
    "Dropdown Text 3",
    "Dropdown Text 7",

  ];
  const dropdownTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "siuuuuuuuuuuuuuu.",

  ];
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
      <div className="room-card ml-24 mt-[-300px]  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <span className="font-bold mr-1 text-black text-xl">₹11,897 </span>
          <span className="font-normal text-lg text-gray-500">night</span>
        </div>
        <div className="actions-area my-4">
          <div className="date-pickers flex w-full rounded-tl-lg rounded-tr-lg m-0 border">
            <div className="date-right w-1/2 p-3 text-sm text-left">Check In</div>
            <div className="date-left w-1/2 border-l p-3 text-sm text-left">
              CheckOut
            </div>
          </div>
          <div className="dropdown">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-black bg-white rounded-br-lg rounded-bl-lg text-sm flex justify-between px-5 py-3 text-center border mb-4 mt-0 w-full"
              type="button">
              Guest{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Guest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/checkout">
          <button
            type="button"
            className="change-dates flex justify-center text-center font-semibold rounded-lg border border-transparent w-full">
            Change dates
          </button>
        </Link>
      </div>


      {/* texts */}
      <div className="mt-[-240px]">
      <div className="textHolders flex flex-col ml-28">
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
      <div className="colorContainer flex flex-col items-start mt-4 ml-28">
        <h1 className="mb-2 font-bold">Other Colorways</h1>
        <div className="colors flex gap-3">
          <div
            onClick={() => changeColor("red")}
            className={`color1 w-[50px] h-[50px] rounded-full ${imgColor === "red" ? "border border-slate-800" : ""
              }   bg-red-500`}
          ></div>
          <div
            onClick={() => changeColor("blue")}
            className={`color1 w-[50px] h-[50px] rounded-full ${imgColor === "blue" ? "border border-slate-800" : ""
              }  bg-blue-500`}
          ></div>
          <div
            onClick={() => changeColor("green")}
            className={`color1 w-[50px] h-[50px] rounded-full  ${imgColor === "green" ? "border border-slate-800" : ""
              } bg-green-500`}
          ></div>
        </div>
      </div>

      {/* calculations */}
      <Calculation />

      {/* //buttons */}
      <div className="buttons mt-4 ml-32">
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

      {/* table */}
      <div className="ml-36 mt-8 font-bold">How to get it</div>
      <div className="border border-gray-300 w-72 rounded-xl ml-36 mt-2 pt-4 pb-4 pl-3">
      <div className="flex items-center">
    <div><TbTruckDelivery size={24} /></div>
    <div className="pl-3">Delivery</div>
  </div>
  <div className="pl-60 -ml-3 -mt-1"><MdOutlineArrowForwardIos /></div>
  <div className="pb-3 text-gray-600 pl-8 -mt-4">Check availability</div>
        <hr/>
        <div className="flex pt-3">
        <div className="pr-3"><FaStoreAlt size={24} /></div>
        <div>In-store</div>
        </div>
        <div className="pl-60 -ml-3 -mt-1"><MdOutlineArrowForwardIos /></div>
        <div className="text-gray-600 pl-9 -mt-4">Check in-store stock</div>
        
      </div></div>
      
    </>
  );
};

export default Card;
