import React from "react";
import Header from "../components/Header";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import FAQSwiper from "../components/FAQSwiper/FAQSwiper";

const servicesData = [
  {
    id: 1,
    image:
      "https://www.ikea.com/ext/ingkadam/m/6b1de71d2067e4/webimage-PH188791-crop001.png?f=xxs",
    text: "Home",
  },
  {
    id: 2,
    image:
      "https://www.ikea.com/ext/ingkadam/m/5eff6dba17cd5e0a/webimage-PH189426-crop001.png?f=xxs",
    text: "Services",
  },
  {
    id: 3,
    image:
      "https://www.ikea.com/ext/ingkadam/m/359516937fc35a0b/webimage-PH188794-crop001.png?f=xxs",
    text: "How to shop",
  },
  {
    id: 4,
    image:
      "https://www.ikea.com/ext/ingkadam/m/7cb5eb6036568fe0/webimage-PH188796-crop001.png?f=xxs",
    text: "FAQs",
  },
  {
    id: 5,
    image:
      "https://www.ikea.com/ext/ingkadam/m/653823675e79d329/webimage-PH186303-crop001.png?f=xxs",
    text: "Return Policy",
  },
  {
    id: 6,
    image:
      "https://www.ikea.com/ext/ingkadam/m/7a75be96e1f166f4/webimage-PH188793-crop001.png?f=xxs",
    text: "Gift Cards",
  },
  {
    id: 7,
    image:
      "https://www.ikea.com/ext/ingkadam/m/5452a1af43063195/webimage-PH188795-crop001.png?f=xxs",
    text: "Price Guarantee",
  },
  {
    id: 8,
    image:
      "https://www.ikea.com/ext/ingkadam/m/21dae79cdba26758/webimage-PH188797-crop001.png?f=xxs",
    text: "Contact us",
  },
];

const gridDataRow1 = [
  {
    heading: "Return or exchange products",
    text: "Find out all about how to exchange or return your products.",
  },
  {
    heading: "Click & Collect",
    text: "Order your favorite products online and collect it later",
  },
  {
    heading: "Missing a part",
    text: "Order fittings and spare parts",
  },
  {
    heading: "Stock availability",
    text: "Plan your shopping before buying",
  },
];

const gridDataRow2 = [
  {
    heading: "Warranty",
    text: "IKEA products comes with warranty",
  },
  {
    heading: "Terms and conditions",
    text: "Check all t&c's here",
  },
];

const CustomerServicePage = () => {
  const navigate = useNavigate();

  const handleOptionClick = (id) => {
    if (id === 1) {
      navigate("/home");
    } else if (id === 2) {
      navigate("/customer-service/services");
    } else if (id === 3) {
      navigate("/customer-service/shopping-at-ayatrio");
    } else if (id === 4) {
      navigate("/customer-service/faq");
    } else if (id === 5) {
      navigate("/customer-service/returns-claims/return-policy");
    } else if (id === 6) {
      navigate("/customer-service/gift-cards");
    } else if (id === 7) {
      navigate("/customer-service/price-guarantee");
    } else if (id === 8) {
      navigate("/customer-service/contact-us");
    } else {
      navigate("/home");
    }
  };
  return (
    <div>
      <Header />
      <div className="mt-20 sm:ml-[50px] ml-[20px] sm:mr-[50px] mr-[20px] p-10 space-y-10">
        <div className="space-y-6">
          <h1 className="font-bold text-4xl">Customer Service</h1>
          <div className="flex space-x-5">
            {servicesData.map((option, id) => {
              return (
                <div
                  className="flex flex-col hover:underline cursor-pointer"
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                >
                  <img
                    className="max-h-[85px] max-w-[150px]"
                    src={option.image}
                  />
                  <p className="text-sm">{option.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Helping you help yourself </h2>
          <p className="flex flex-wrap max-w-[1000px]">
            Looking to check the status of your order? Want to return a product
            or order a spare part? We have convenient self service options which
            will let you do just that!{" "}
          </p>
        </div>
        {/* Section of grid starts */}
        <section>
          <div className="flex flex-wrap space-y-2 w-full">
            <div className="flex space-x-1">
              {gridDataRow1.map((gridItem) => {
                return (
                  <div>
                    <div className="flex flex-col items-center text-center bg-gray-200 p-6">
                      <h3 className="font-bold">{gridItem.heading}</h3>
                      <p>{gridItem.text}</p>
                      <p className="underline text-gray-500">Read more</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full space-x-1">
              {gridDataRow2.map((gridItem) => {
                return (
                  <div className="w-1/2">
                    <div className="flex flex-col items-center text-center bg-gray-200 p-6">
                      <h3 className="font-bold">{gridItem.heading}</h3>
                      <p>{gridItem.text}</p>
                      <p className="underline text-gray-500">Read more</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Section of grid ends */}
        {/* FAQs search bar section starts */}
        <section>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl">
                <strong>Frequently Asked Questions</strong>
              </h2>
            </div>
            <div className="flex flex-wrap w-full">
              <input
                className="w-full bg-gray-200 border border-transparent rounded-full items-center transition duration-200 ease-in-out flex relative overflow-hidden p-5"
                id="search"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
        </section>
        {/* FAQs search bar section ends */}
        <FAQSwiper />
        <FAQ />
        {/* Plan and Shop from home starts */}
        <section>
          <div className="flex w-full justify-between items-start space-x-5">
            <div className="flex flex-col w-1/2 space-y-2">
              <h2 className="text-2xl font-bold">Plan and shop from home</h2>
              <p>
                Are you looking for innovative solutions in furnishing your
                home? Together with our interior designers you can create your
                dream interior. Our specialists are ready to help you with
                advice, online or in-store​.
              </p>
            </div>
            <div className="flex w-1/2">
              <img
                className="object-contain w-full h-auto "
                src="https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ocaFzVRnDARFnANjyd6CMrwAI0Ua6I0Na_MKej8IysA="
              />
            </div>
          </div>
        </section>
        {/* Plan and Shop from home starts */}
        {/* Three buttons section starts */}
        <section>
          <div className="flex justify-between items-center space-x-4">
            <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
              Book interior design
            </button>
            <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
              Book personal shopper
            </button>
            <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
              Book kitchen planning
            </button>
          </div>
        </section>
        {/* Three buttons section ends */}
        {/* Find an ikea section starts */}
        <section>
          <div className="flex w-full">
            <div className="flex w-2/3">
              <img
                className="w-full h-auto"
                src="https://www.ikea.com/ext/ingkadam/m/314e597614cbeb4e/original/PE315126-crop003.jpg?f=xxl"
              />
            </div>
            <div className="bg-gray-200 flex w-1/3">
              <div className="p-7 space-y-5">
                <div>
                  <h3 className="font-bold text-xl">Find an IKEA near you</h3>
                  <p>
                    Visit us in store and get inspired. We're open and excited
                    for your visit. Browse our products, walk through our room
                    settings, and grab a bite to go.
                  </p>
                </div>
                <div>
                  <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                    find your IKEA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Find an ikea section ends */}
        {/* Still have questions section starts */}
        <section>
          <div className="flex space-y-9 flex-col">
            <div>
              <h2 className="font-bold text-xl">
                Do you still have questions?
              </h2>
              <p className="max-w-[900px]">
                To help you the best way possible, you can now look for a
                solution in a more targeted way. If you can't find the answer,
                we will offer you the best way to get in contact with us.
              </p>
            </div>
            <div>
              <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                Contact us
              </button>
            </div>
          </div>
        </section>
        {/* Still have questions section ends */}
      </div>
      <Footer />
    </div>
  );
};

export default CustomerServicePage;
