import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FormProvider } from "./components/Checkoutcomp/FormContext";
import Loader from "react-loader-spinner";
import ProgressBar from "react-loader-spinner";
import './App.css'
const Splashpage = lazy(() => import("./pages/Splashpage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MapPage = lazy(() => import("./pages/MapPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const MagazinePage = lazy(() => import("./pages/MagazinePage"));
const RoomPage = lazy(() => import("./pages/RoomPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Paymentpage = lazy(() => import("./pages/Paymentpage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const Virtualexperiance = lazy(() => import("./pages/Virtualexperiance"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ItemPage = lazy(() => import("./pages/ItemPage"));

function App() {
  const [deviceId, setDeviceId] = useState(null);

  const generateDeviceId = () => {
    const existingDeviceId = localStorage.getItem("deviceId");
    if (existingDeviceId) {
      setDeviceId(existingDeviceId);
    } else {
      const navigatorInfo = `${navigator.userAgent}${navigator.language}${navigator.platform}`;
      const hash = btoa(navigatorInfo);
      setDeviceId(hash);
      localStorage.setItem("deviceid", hash);
    }
  };

  useEffect(() => {
    generateDeviceId();
  }, []);

  console.log("Device ID:", deviceId);

  return (
    <>
      <FormProvider>
        <Suspense fallback={<div class="loader">
          <div class="loader__element"></div>
        </div>}>
        {/* <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              
              <Loader type="TailSpin" color="#4A90E2" height={80} width={80} />
            </div>
          }
        > */}
        
        {/* <div class="loader">
          <div class="loader__element"></div>
        </div> */}

        <Routes>
          <Route path="/" element={<Splashpage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ayatrio-map" element={<MapPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Paymentpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/virtualexperience/*" element={<Virtualexperiance />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/item" element={<ItemPage />} />
        </Routes>
        </Suspense>
      </FormProvider>
    </>
  );
}

export default App;
