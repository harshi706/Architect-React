import { Delete, HeartBroken, HeatPumpOutlined } from "@mui/icons-material";
import React from "react";

const Cart = () => {
  return (
    <div className="main flex justify-center items-center min-h-screen bg-gray-100">
      <div className="cartContainer flex w-4/5 h-4/5 bg-white rounded-md shadow-lg p-8">
        {/* Left Section - Cart Items */}
        <div className="left flex-col flex w-2/3 pr-8">
          <h1 className="text-4xl mb-6 font-semibold">Bag</h1>
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
                    <h2 className="text-xl font-semibold mb-2">Nike Air Max Pulse Roam</h2>
                    <h3 className="text-gray-600">Men's Shoes</h3>
                  </div>
                  <div className="rightContent text-xl font-semibold">
                    ₹31,491,699
                  </div>
                  <div className="icons flex items-center space-x-2 mt-4">
                    <Delete className="hover:text-slate-500 cursor-pointer" />
                    <HeartBroken  className="text-red-700 hover:text-red-500 cursor-pointer"  />
                  </div>
                </div>
              </div>
            </div>
            {/* Add more CartItem components if needed */}
          </div>
        </div>

        {/* Right Section - Summary and Checkout */}
        <div className="right flex flex-col w-1/3">
          <h1 className="text-4xl font-semibold mb-6">Order Summary</h1>
          <div className="subtotal flex justify-between items-center mb-4">
            <div className="text-lg">Subtotal</div>
            <div className="text-lg font-semibold">₹31,491,692</div>
          </div>
          <div className="deliveryCharges flex justify-between items-center mb-4">
            <div className="text-lg">Delivery Charges</div>
            <div className="text-lg font-semibold">₹7</div>
          </div>
          <hr className="my-4" />
          <div className="total flex justify-between items-center mb-6">
            <div className="text-xl font-semibold">Total</div>
            <div className="text-xl font-semibold">₹31,491,699</div>
          </div>
          <div className="guestCheckout">
            <button className="bg-black text-white w-full h-16 rounded-xl hover:bg-gray-900 transition duration-300">
              Guest Checkout
            </button>
          </div>
          <div className="memberCheckout mt-4">
            <button className="bg-black text-white w-full h-16 rounded-xl hover:bg-gray-900 transition duration-300">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
