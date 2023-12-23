import React, { useState } from 'react';
import './styles.css'
import { FaChevronDown ,FaChevronUp} from "react-icons/fa";
const Imagechanger = () => {
  const [index, setIndex] = useState(0);
  const [openStates, setOpenStates] = useState([false, false, false]); // State to track open/close state

  const text = [
    "dsadasdorem ipsum dolor sit amet, consectetur adipissit amet, consect eiusmod tempor incididunt ut labore et dolore magnasit amet, consect eiusmod tempor incididunt ut labore et dolore magnacing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    "orem ipsudolor sit amet, consect eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisc dolor sit amet, consectetur adipisciieniam,",
    "lorem ipsum dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  ];

  const img = [
    'https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const img2 = [
    'https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];  const img3 = [
    'https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const Heading = ['Watch your heart', 'Tune into your wellness', 'Improve your sleep habits'];

  const handleToggle = (clickedIndex) => {
    const newOpenStates = openStates.map((state, idx) => (idx === clickedIndex ? !state : false));
    setOpenStates(newOpenStates);
    setIndex(clickedIndex);
  };

  return (
<>
      <div className="main w-full h-full flex p-2">
        <div className="left text-container flex flex-col pr-24 pl-12 w-1/2 h-full p-1">
          <div className="text-container">
            <h1 className="font-bold text-3xl">Get to know your <br />health</h1>
            <h3 className='font-bold text-gray-500 mb-4'>Bands shown may be sold separately and may not be <br />available in all countries</h3>
          </div>
          {Heading.map((value, idx) => (
            <div key={idx} className='mb-7 trending-choice'>
              {idx === 1 && (
                <>
                  <div className="line-horizontal dark-black-line h-1 w-full bg-gray-300 " />
                  <div onClick={() => setIndex(idx)} className='flex  items-center justify-between'>
                  <h1
                    
                    className="text-2xl my-4 font-bold text-left cursor-pointer"
                  >
                    {value}
                  </h1>
                  {index === idx ? <FaChevronUp className='text-2xl my-4 font-sans text-gray-500 text-left cursor-pointer'/> : <FaChevronDown className='text-2xl my-4 text-gray-500 text-left cursor-pointer'/>}
                  </div>
                </>
              )}
              {idx !== 1 && (
                <div onClick={() => setIndex(idx)} className='flex items-center justify-between'>
                  <h1
                  
                  className="text-2xl mb-2 font-bold text-left cursor-pointer"
                >
                  {value}
                </h1>
                {openStates[idx] ? (
                  <FaChevronUp className="text-2xl text-gray-500 cursor-pointer" />
                ) : (
                  <FaChevronDown className="text-2xl text-gray-500 cursor-pointer" />
                )}
              </div>
              <div className={`w-[23rem] ${openStates[idx] ? 'open' : ''}`}>
                <p className={`${idx + 1}text`}>{openStates[idx] ? text[idx] : ''}</p>
                {idx === 1 && <hr className="line-horizontal dark-black-line h-1 w-full bg-gray-300 mt-4 mb-2" />}
              </div>
            </div>
          ))}
        </div>
        <div className="right image-container flex w-1/2 h-full p-1">
          <div className="flex w-full h-full justify-center items-center">
            <img src={img[index]} alt="" className="rounded-[50px] sm:w-[80%] w-[80vw] sm:h-[72%] h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagechanger;
