import React from 'react';
import mainlogo from '../../assets/ayatriologo.png';
const Splashscreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">

        <img
          src={mainlogo}
          alt="Logo"
          className="w-80 h-auto transition-all ease-linear duration-500"
        />
      </div>
    </div>
  );
};

export default Splashscreen;
