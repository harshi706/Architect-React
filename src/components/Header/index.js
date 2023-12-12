import React from "react";
// import "./styles.css";
import mainlogo from "../../assets/ayatriologo.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import SimpleBottomNavigation from "./bottombar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "./menu";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Login } from "@mui/icons-material";
import Expandedbar from "./Expandedbar";

function Header({ howMuchScrolled }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  const handleLoginNav = () => {
    navigate("/login");
  };
  const handleProfileNav = () => {
    console.log("Profile");
    navigate("/profile");
  };
  const onClose =()=>{
    setSearchText("")
  }
  const loginStatus = localStorage.getItem("Login");
  console.log(loginStatus);
  return (
    <header
      className={`fixed w-full  top-0 transition-all ease-in-out duration-300  z-[9999] ${
        isScrolled ? "bg-white" : "bg-white"
      } ${howMuchScrolled > 20 ? "hidden" : ""}`}
    >
     {
      !searchText? <div className="navbar flex justify-evenly items-center w-full">
      <div className="left flex items-center gap-5 ">
        <div className="profile-menu font-bold ">
          <Menu />
        </div>
        <Link to="/virtualexperience/vrooms">
          <div className="font-bold text-lg">Virtual Exprience </div>
        </Link>

        <div className="font-bold text-lg ">New Arivals</div>
      </div>
      <div className="middle">
        <Link to="/home">
          <img src={mainlogo} alt="logo" className="w-44 m-2" />
        </Link>
      </div>
      <div className="right flex items-center gap-4">
        <div className="searchbar pt-4 w-40 h-10 items-right justify-end">
          <input
            type="text"
            onChange={handleSearchChange}
            value={searchText}
            placeholder="Search"
            className="searchTerm relative w-[13rem] h-10 bg-[#efefef] p-4 rounded-full active:border-none focus:outline-none"
          />
           <SearchIcon className="seachbar-div2-icon absolute z-10" />
        </div>
<<<<<<< Updated upstream
        {loginStatus === "true" ? (
          <div className="pro flex  " onClick={handleProfileNav}>
            <AccountCircleIcon />
          </div>
        ) : (
          <div className="pro flex  " onClick={handleLoginNav}>
            <AccountCircleIcon />
          </div>
        )}
=======

>>>>>>> Stashed changes
        <div className="h-10 w-10 cursor-pointer">
          <svg
            id="Travel_Abroad"
            data-name="Travel Abroad"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Travel_Abroad</title>
            <g id="Travel_Abroad-2" data-name="Travel Abroad">
              <path d="M444.62,113.5855l.2394-.2327c14.0249-14.0353,14.4771-36.4088,1.008-49.8817a33.6924,33.6924,0,0,0-24.0132-9.8354,36.4316,36.4316,0,0,0-25.8723,10.8424L365.1965,97.3756,255.0858,64.4116,232.263,87.2411a15.1989,15.1989,0,0,0,0,21.51l1,1,79.534,43.77L301.16,166.15a159.389,159.389,0,0,0-86.4728-25.5427,161.2907,161.2907,0,0,0-17.6995,1.0013l-.5519-.6118c-.2594.2327-.552.495-.8379.761-66.101,7.84-120.5075,55.98-135.65,122.45A158.8173,158.8173,0,0,0,179.5418,454.3648a159.5887,159.5887,0,0,0,35.4141,4c74.537,0,138.1709-50.8156,154.7427-123.577a159.7552,159.7552,0,0,0,3.9862-39.0517,17.8816,17.8816,0,0,0-.6584-10.8965,158.0211,158.0211,0,0,0-23.7338-69.9076c-1.6426-2.6106-3.3716-5.1509-5.15-7.6342l11.8133-10.89L400.0824,276.58l1.0108,1.008a15.2026,15.2026,0,0,0,21.4824-.0038l22.8361-22.8323L412.2282,143.89ZM138.0354,409.2208l-2.6135,4.2959A139.0154,139.0154,0,0,1,77.5508,278.535c8.8939,2.3977,17.8752,5.9384,21.3227,8.4027-.1292.9177-.2726,1.8487-.4151,2.7759C97.1246,298.369,95.11,311.443,105.7667,319.2c9.3262,6.783,17.8619.4389,21.755-2.84,1.5628,1.2607,3.2652,2.5137,5.0179,3.8077,2.7332,2.0149,7.5544,5.5726,9.2863,7.7367-.5482,1.9124-1.3566,4.1734-2.1442,6.3746-3.096,8.6449-6.2975,17.5788-.3391,23.8563,2.0548,2.527,8.1956,14.1417,9.765,18.3246-.0332,1.3927.07,2.9792.2033,5.0435a58.1559,58.1559,0,0,1,.133,8.8778C149.4335,390.3784,137.3371,405.6136,138.0354,409.2208Zm76.9205,29.1906A139.8223,139.8223,0,0,1,148.6687,421.64c9.7356-8.2327,18.1612-21.4567,18.2875-21.67,2.9526-4.9875,2.7835-11.6109,2.2582-19.7534-.0865-1.3632-.1862-2.5336-.1663-3.2851a5.1811,5.1811,0,0,1-.1634,1.1068c1.6-7.0784-8.0227-23.3747-12.6511-30.3174.4788-1.8354,1.4962-4.6749,2.2239-6.7164a90.65,90.65,0,0,0,3.2025-10.1612c2.7493-11.96-8.3591-20.1524-17.2834-26.733a60.2841,60.2841,0,0,1-6.3479-5.0569c-4.0166-4.236-10.7825-7.505-20.6549-.1568.1767-2.1108.5453-4.502.798-6.1512.3325-2.1479.6555-4.2921.8617-6.3574,1.1466-11.5739-11.3487-20.7613-37.0738-27.3343a137.9391,137.9391,0,0,1,96.6578-93.8049,64.3087,64.3087,0,0,0-4.3957,17.4524c-.4294,3.8741-.9842,7.3815-1.4734,10.4709-1.9513,12.3319-4.1658,26.31,13.546,34.1971a64.3835,64.3835,0,0,0,21.8092,5.5927,53.8235,53.8235,0,0,1,6.47.9348c.6014,2.9992.2195,9.16.0627,11.6907-.2194,3.534-.455,7.3444.6755,10.54,1.4592,8.0665,8.5082,37.5422,35.92,56.5545a44.8878,44.8878,0,0,1-13.1832,5.473c-2.3075.4427-4.6721.7381-6.96,1.024-9.3594,1.1743-22.1777,2.7731-27.54,17.556-2.3845,6.5342-.8379,11.2918.8807,14.1313,4.2693,7.0594,12.5751,8.1728,18.64,8.9841.9776.13,2.3513.3164,3.1759.4788,3.7534,2.75,15.4707,10.5375,27.6174,10.5375a23.6,23.6,0,0,0,16.036-5.9556c1.9988-1.6958,11.4751-1.5856,16.037-1.5257,9.6558.113,18.7729.2261,24.5917-5.6563a14.6894,14.6894,0,0,0,4.2161-10.9354c-.2062-8.3325,15.7434-17.2938,28.5617-24.4958,3.0923-1.7356,6.2539-3.5207,9.3262-5.3732q-.8622,6.7231-2.3836,13.4235A138.1154,138.1154,0,0,1,214.9559,438.4114ZM332.4054,225.5449a138.1163,138.1163,0,0,1,21.1232,66.0877c-2.8927,3.6642-13.4292,9.5893-19.9965,13.2762-17.16,9.6425-36.4582,20.4858-38.5529,38.41-2.5137.2034-6.1351.153-8.798.1236-10.2182-.1131-21.7692-.2632-29.45,6.49-3.3212,2.9155-13.4292-1.5732-19.2014-6.0715-3.2319-2.5241-7.0955-3.1388-11.1957-3.6946a63.6046,63.6046,0,0,1,7.2352-1.18c2.48-.3126,5.2934-.6622,8.2393-1.2274,8.9443-1.7158,32.2525-11.5008,34.1943-24.4321a12.4042,12.4042,0,0,0-6.7925-13.017c-29.6922-15.6873-34.2475-47.3983-34.4242-48.6979l-.3486-2.8034c.0361-.6584.08-1.37.1159-1.9817.5918-9.5162,1.6891-27.2318-12.2892-31.5106a60.7687,60.7687,0,0,0-12.066-2.1916,44.5848,44.5848,0,0,1-15.7709-3.9663c-2.414-1.0745-2.9156-1.7822-2.9156-1.7822-.6089-1.2474.2926-6.9264.951-11.0722.5253-3.3117,1.1172-7.0624,1.5988-11.4048,1.2939-11.6708,5.9955-18.999,10.48-23.9533,3.3583-.2394,6.7365-.3895,10.1517-.3895a139.5721,139.5721,0,0,1,72.7339,20.502l-.9975,1.081a49.1105,49.1105,0,0,0-4.7775,5.5993l-35.6706-9.234L230.3412,194.15a13.91,13.91,0,0,0-.0038,19.68l1.121,1.1238,41.0865,20.8516,1.4763,1.4762,20.8516,41.0933,1.1238,1.1209a13.9123,13.9123,0,0,0,19.6774.0067l15.65-15.6446-9.4231-36.4021a48.2992,48.2992,0,0,0,5.2868-4.5353l2.1346-1.9646C330.3667,222.4659,331.4174,223.9755,332.4054,225.5449Zm90.4761,23.5106-9.7888,9.7888-51.9365-94.373-47.6235,43.9061-.2831.27a27.5271,27.5271,0,0,1-7.2618,5.2431l-7.2751,3.591,10.4443,40.3294-1.5561,1.5561-17.2273-33.9454-5.9651-5.9717-33.9416-17.22,1.5533-1.5532,39.747,10.2913,3.5511-7.3948a27.5194,27.5194,0,0,1,5.36-7.4784l44.043-47.7736L250.9856,96.7344l9.7888-9.7926,110.5468,33.09L410.19,78.4868a16.6009,16.6009,0,0,1,11.6641-4.9011,13.8764,13.8764,0,0,1,9.9047,3.99c5.663,5.6621,5.2469,15.3083-.9044,21.566l-41.2832,38.6165Z" />
            </g>
          </svg>
        </div>

        <div className="h-10 w-10 cursor-pointer">
          <svg
            id="Travel_Abroad"
            data-name="Travel Abroad"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Travel_Abroad</title>
            <g id="Travel_Abroad-2" data-name="Travel Abroad">
              <path d="M444.62,113.5855l.2394-.2327c14.0249-14.0353,14.4771-36.4088,1.008-49.8817a33.6924,33.6924,0,0,0-24.0132-9.8354,36.4316,36.4316,0,0,0-25.8723,10.8424L365.1965,97.3756,255.0858,64.4116,232.263,87.2411a15.1989,15.1989,0,0,0,0,21.51l1,1,79.534,43.77L301.16,166.15a159.389,159.389,0,0,0-86.4728-25.5427,161.2907,161.2907,0,0,0-17.6995,1.0013l-.5519-.6118c-.2594.2327-.552.495-.8379.761-66.101,7.84-120.5075,55.98-135.65,122.45A158.8173,158.8173,0,0,0,179.5418,454.3648a159.5887,159.5887,0,0,0,35.4141,4c74.537,0,138.1709-50.8156,154.7427-123.577a159.7552,159.7552,0,0,0,3.9862-39.0517,17.8816,17.8816,0,0,0-.6584-10.8965,158.0211,158.0211,0,0,0-23.7338-69.9076c-1.6426-2.6106-3.3716-5.1509-5.15-7.6342l11.8133-10.89L400.0824,276.58l1.0108,1.008a15.2026,15.2026,0,0,0,21.4824-.0038l22.8361-22.8323L412.2282,143.89ZM138.0354,409.2208l-2.6135,4.2959A139.0154,139.0154,0,0,1,77.5508,278.535c8.8939,2.3977,17.8752,5.9384,21.3227,8.4027-.1292.9177-.2726,1.8487-.4151,2.7759C97.1246,298.369,95.11,311.443,105.7667,319.2c9.3262,6.783,17.8619.4389,21.755-2.84,1.5628,1.2607,3.2652,2.5137,5.0179,3.8077,2.7332,2.0149,7.5544,5.5726,9.2863,7.7367-.5482,1.9124-1.3566,4.1734-2.1442,6.3746-3.096,8.6449-6.2975,17.5788-.3391,23.8563,2.0548,2.527,8.1956,14.1417,9.765,18.3246-.0332,1.3927.07,2.9792.2033,5.0435a58.1559,58.1559,0,0,1,.133,8.8778C149.4335,390.3784,137.3371,405.6136,138.0354,409.2208Zm76.9205,29.1906A139.8223,139.8223,0,0,1,148.6687,421.64c9.7356-8.2327,18.1612-21.4567,18.2875-21.67,2.9526-4.9875,2.7835-11.6109,2.2582-19.7534-.0865-1.3632-.1862-2.5336-.1663-3.2851a5.1811,5.1811,0,0,1-.1634,1.1068c1.6-7.0784-8.0227-23.3747-12.6511-30.3174.4788-1.8354,1.4962-4.6749,2.2239-6.7164a90.65,90.65,0,0,0,3.2025-10.1612c2.7493-11.96-8.3591-20.1524-17.2834-26.733a60.2841,60.2841,0,0,1-6.3479-5.0569c-4.0166-4.236-10.7825-7.505-20.6549-.1568.1767-2.1108.5453-4.502.798-6.1512.3325-2.1479.6555-4.2921.8617-6.3574,1.1466-11.5739-11.3487-20.7613-37.0738-27.3343a137.9391,137.9391,0,0,1,96.6578-93.8049,64.3087,64.3087,0,0,0-4.3957,17.4524c-.4294,3.8741-.9842,7.3815-1.4734,10.4709-1.9513,12.3319-4.1658,26.31,13.546,34.1971a64.3835,64.3835,0,0,0,21.8092,5.5927,53.8235,53.8235,0,0,1,6.47.9348c.6014,2.9992.2195,9.16.0627,11.6907-.2194,3.534-.455,7.3444.6755,10.54,1.4592,8.0665,8.5082,37.5422,35.92,56.5545a44.8878,44.8878,0,0,1-13.1832,5.473c-2.3075.4427-4.6721.7381-6.96,1.024-9.3594,1.1743-22.1777,2.7731-27.54,17.556-2.3845,6.5342-.8379,11.2918.8807,14.1313,4.2693,7.0594,12.5751,8.1728,18.64,8.9841.9776.13,2.3513.3164,3.1759.4788,3.7534,2.75,15.4707,10.5375,27.6174,10.5375a23.6,23.6,0,0,0,16.036-5.9556c1.9988-1.6958,11.4751-1.5856,16.037-1.5257,9.6558.113,18.7729.2261,24.5917-5.6563a14.6894,14.6894,0,0,0,4.2161-10.9354c-.2062-8.3325,15.7434-17.2938,28.5617-24.4958,3.0923-1.7356,6.2539-3.5207,9.3262-5.3732q-.8622,6.7231-2.3836,13.4235A138.1154,138.1154,0,0,1,214.9559,438.4114ZM332.4054,225.5449a138.1163,138.1163,0,0,1,21.1232,66.0877c-2.8927,3.6642-13.4292,9.5893-19.9965,13.2762-17.16,9.6425-36.4582,20.4858-38.5529,38.41-2.5137.2034-6.1351.153-8.798.1236-10.2182-.1131-21.7692-.2632-29.45,6.49-3.3212,2.9155-13.4292-1.5732-19.2014-6.0715-3.2319-2.5241-7.0955-3.1388-11.1957-3.6946a63.6046,63.6046,0,0,1,7.2352-1.18c2.48-.3126,5.2934-.6622,8.2393-1.2274,8.9443-1.7158,32.2525-11.5008,34.1943-24.4321a12.4042,12.4042,0,0,0-6.7925-13.017c-29.6922-15.6873-34.2475-47.3983-34.4242-48.6979l-.3486-2.8034c.0361-.6584.08-1.37.1159-1.9817.5918-9.5162,1.6891-27.2318-12.2892-31.5106a60.7687,60.7687,0,0,0-12.066-2.1916,44.5848,44.5848,0,0,1-15.7709-3.9663c-2.414-1.0745-2.9156-1.7822-2.9156-1.7822-.6089-1.2474.2926-6.9264.951-11.0722.5253-3.3117,1.1172-7.0624,1.5988-11.4048,1.2939-11.6708,5.9955-18.999,10.48-23.9533,3.3583-.2394,6.7365-.3895,10.1517-.3895a139.5721,139.5721,0,0,1,72.7339,20.502l-.9975,1.081a49.1105,49.1105,0,0,0-4.7775,5.5993l-35.6706-9.234L230.3412,194.15a13.91,13.91,0,0,0-.0038,19.68l1.121,1.1238,41.0865,20.8516,1.4763,1.4762,20.8516,41.0933,1.1238,1.1209a13.9123,13.9123,0,0,0,19.6774.0067l15.65-15.6446-9.4231-36.4021a48.2992,48.2992,0,0,0,5.2868-4.5353l2.1346-1.9646C330.3667,222.4659,331.4174,223.9755,332.4054,225.5449Zm90.4761,23.5106-9.7888,9.7888-51.9365-94.373-47.6235,43.9061-.2831.27a27.5271,27.5271,0,0,1-7.2618,5.2431l-7.2751,3.591,10.4443,40.3294-1.5561,1.5561-17.2273-33.9454-5.9651-5.9717-33.9416-17.22,1.5533-1.5532,39.747,10.2913,3.5511-7.3948a27.5194,27.5194,0,0,1,5.36-7.4784l44.043-47.7736L250.9856,96.7344l9.7888-9.7926,110.5468,33.09L410.19,78.4868a16.6009,16.6009,0,0,1,11.6641-4.9011,13.8764,13.8764,0,0,1,9.9047,3.99c5.663,5.6621,5.2469,15.3083-.9044,21.566l-41.2832,38.6165Z" />
            </g>
          </svg>
        </div>
        {loginStatus === "true" ? (
          <div className="pro flex  " onClick={handleProfileNav}>
            <AccountCircleIcon />
          </div>
        ) : (
          <div
            className="bg-blue-600 w-12 h-7 shadow-xl text-white text-center font-semibold cursor-pointer rounded-lg "
            onClick={handleLoginNav}
          >
            Login
          </div>
        )}
       
      </div>
    </div>:<Expandedbar searchText={searchText} onClose={onClose} />
     }
    </header>
  );
}
export default Header;
