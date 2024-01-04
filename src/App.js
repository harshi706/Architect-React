import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FormProvider } from "./components/Checkoutcomp/FormContext";
import "./App.css";
const DeliveryServicePage = lazy(() => import("./pages/DeliveryServicePage"));
const InstallationServicePage = lazy(() =>
  import("./pages/InstallationServicePage")
);
const ThisIsAyatrioPage = lazy(() => import("./pages/ThisIsAyatrioPage"));
const SustainabilityPage = lazy(() => import("./pages/SustainabilityPage"));
const DesignServicePage = lazy(() => import("./pages/DesignServicePage"));
const CustomerServicePage = lazy(() => import("./pages/CustomerServicePage"));
const ShoppingInfo = lazy(() => import("./pages/ShoppingInfo"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ReturnPolicyPage = lazy(() => import("./pages/ReturnPolicyPage"));
const PriceGuarantee = lazy(() => import("./pages/PriceGuarantee"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const GiftCards = lazy(() => import("./pages/GiftCards"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
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
// const ItemPage = lazy(() => import("./pages/ItemPage"));

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
  const Currentlocation = window.location.pathname;
  const [location, setLocation] = useState(Currentlocation);
  const navigate = useNavigate();
  // console.log("Device ID:", deviceId);
  useEffect(() => {
    window.onload = () => {
      navigate("/");
    };
  }, []);
  return (
    <>
      <FormProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<Splashpage location={location} />} />
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
            <Route
              path="/virtualexperience/*"
              element={<Virtualexperiance />}
            />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path="/item" element={<ItemPage />} /> */}
            {/* Below routes were added by Syed Amaan Ali */}
            <Route path="/customer-service" element={<CustomerServicePage />} />
            <Route
              path="/customer-service/shopping-at-ayatrio"
              element={<ShoppingInfo />}
            />
            <Route
              path="/customer-service/services"
              element={<ServicesPage />}
            />
            <Route
              path="/customer-service/returns-claims/return-policy"
              element={<ReturnPolicyPage />}
            />
            <Route
              path="/customer-service/price-guarantee"
              element={<PriceGuarantee />}
            />
            <Route path="/customer-service/faq" element={<FaqPage />} />
            <Route
              path="/customer-service/gift-cards"
              element={<GiftCards />}
            />
            <Route
              path="/customer-service/contact-us"
              element={<ContactUsPage />}
            />
            <Route path="/delivery-service" element={<DeliveryServicePage />} />
            <Route
              path="/installation-service"
              element={<InstallationServicePage />}
            />
            <Route path="/this-is-ayatrio" element={<ThisIsAyatrioPage />} />
            <Route
              path="/sustainable-everyday"
              element={<SustainabilityPage />}
            />
            {/* Responsive upto this point */}
            <Route path="/design-service" element={<DesignServicePage />} />
            {/* Above routes were added by Syed Amaan Ali */}
          </Routes>
        </Suspense>
      </FormProvider>
    </>
  );
}

export default App;
