import { Delete, HeartBroken, HeatPumpOutlined } from "@mui/icons-material";
import React from "react";
import Footer from "../Footer/Footer";

const Cart = () => {
  return (
    <div>
      <div className="main-cart flex justify-center items-center min-h-screen">
        <div className="cartContainer flex flex-col sm:flex-row w-4/5 h-4/5 bg-white sm:gap-0 gap-10 sm:my-0 my-20 ">
          <div className="left-cart flex-col flex sm:w-2/3 w-[90vw] pr-8">
            <h1 className="sm:text-4xl text-2xl mb-6 font-semibold">Bag</h1>
            <div className="bagContainer">
              <div className="cartitem flex mb-6 border-b pb-4">
                <div className="img w-48 h-48 mr-8">
                  <img
                    src="https://secure-images.nike.com/is/image/DotCom/DZ3544_200?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
                    className="w-full h-full object-cover rounded-md"
                    alt="Product"
                  />
                </div>
                <div className="cartContent flex flex-col justify-between">
                  <div className="mainright">
                    <div className="leftContent flex flex-col">
                      <h2 className="sm:text-xl text-lg sm:font-semibold font-medium  mb-2">
                        Nike Air Max Pulse Roam
                      </h2>
                      <h3 className="text-gray-600">Men's Shoes</h3>
                    </div>
                    <div className="rightContent sm:text-xl text-lg sm:font-semibold font-medium">
                      ₹31,491,699
                    </div>
                    <div className="icons flex items-center space-x-2 mt-4">
                      <Delete className="hover:text-slate-500 cursor-pointer" />
                      <HeartBroken className="text-red-700 hover:text-red-500 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-cart flex flex-col sm:w-1/3 w-[80vw]">
            <h1 className="sm:text-4xl text-2xl font-semibold mb-6">
              Order Summary
            </h1>
            <div className="subtotal flex justify-between items-center mb-4">
              <div className="text-lg">Subtotal</div>
              <div className="text-lg sm:font-semibold font-medium">
                ₹31,491,692
              </div>
            </div>
            <div className="deliveryCharges flex justify-between items-center mb-4">
              <div className="text-lg">Delivery Charges</div>
              <div className="text-lg sm:font-semibold font-medium">₹7</div>
            </div>
            <hr className="my-4" />
            <div className="total flex justify-between items-center mb-6">
              <div className="sm:text-xl text-lg sm:font-semibold font-medium">
                Total
              </div>
              <div className="sm:text-xl text-lg sm:font-semibold font-medium">
                ₹31,491,699
              </div>
            </div>
            <div className="guestCheckout flex items-center justify-center my-4">
              <button className="bg-black text-white sm:w-full w-[40vw] sm:h-14 h-9 rounded-full	 hover:bg-gray-900 transition duration-300">
                Guest Checkout
              </button>
            </div>
            <div className="memberCheckout my-4 flex items-center justify-center">
              <button className="bg-black text-white sm:w-full w-[40vw] sm:h-14 h-9 rounded-full	 hover:bg-gray-900 transition duration-300">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer className="block" />
    </div>
  );
};

export default Cart;
