import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";

const Calculation = () => {
  const [widthstate, setwidthstate] = useState(0);
  const [heightstate, setheightstate] = useState(0);
  const [pricestate, setpricestate] = useState(0);
  const [coststate, setcoststate] = useState(7000);
  const [rollstate, setrollstate] = useState(0);

  const priceCal = () => {
    const area = (widthstate * heightstate) / 50;
    const calculatedPrice = area * coststate;
    setpricestate(calculatedPrice.toFixed(2));
    setrollstate(area.toFixed(2));
  };

  useEffect(() => {
    priceCal();
  }, [widthstate, heightstate, coststate]);

  const [hidden, setHidden] = useState(false);
  const handleCal = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      <div className="calculation-container sm">
        <div className="text-lg flex items-center justify-center">
          <div>
            <CiCalculator1 size={24} className="flex-start -ml-4 mr-3 mb-3" />
          </div>
          <span className=" self-start">Calculate</span>
          {!hidden ? (
            <MdOutlineArrowForwardIos
              size={16}
              onClick={handleCal}
              className="cursor-pointer ml-32"
            />
          ) : (
            <IoIosArrowDown
              size={16}
              onClick={handleCal}
              className="cursor-pointer ml-32"
            />
          )}
        </div>

        <div className="pb-3 text-gray-600 sm:pl-5 -mt-4 pt-1">
          As per your requirement
        </div>
        {hidden && (
          <div className="calc mr-4 mb-4 mt-4 flex-col">
            {/* Dimension Inputs */}
            <div className="dim flex flex-row">
              <div
                className="height border border-gray-300  w-1/2 p-2 flex flex-col"
                style={{
                  borderRadius: "10px 0px 0px 0px",
                }}
              >
                <h3 className="mb-2 ml-2 font-semibold">Height (Meters)</h3>
                <input
                  onChange={(e) => {
                    setheightstate(e.target.value);
                    priceCal();
                  }}
                  value={heightstate}
                  type="text"
                  className="input-field focus:outline-none w-full h-full ml-2 active:border-none"
                />
              </div>
              <div
                className="width border border-gray-300  w-1/2 p-2 flex flex-col"
                style={{
                  borderRadius: "0px 10px 0px 0px",
                }}
              >
                <h3 className="mb-2 ml-2 font-semibold">Width (Meters)</h3>
                <input
                  onChange={(e) => {
                    setwidthstate(e.target.value);
                    priceCal();
                  }}
                  value={widthstate}
                  type="text"
                  className="input-field focus:outline-none w-full h-full active:border-none ml-2"
                />
              </div>
            </div>

            <div
              className="price border border-gray-300  w-full p-2 flex flex-col"
              style={{
                borderRadius: "0px 0px 10px 10px",
              }}
            >
              <h3 className="mb-2 ml-2 font-semibold">Price</h3>
              <h2 className="ml-2 mb-2">
                {pricestate} ({rollstate} Rolls Requires)
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculation;
