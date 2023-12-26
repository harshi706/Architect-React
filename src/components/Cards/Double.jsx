import React from 'react';
import cover from '../../assets/cover.jpg'
import { FaRegPlayCircle } from "react-icons/fa";

const Double = () => {
  return (
    <div className='flex'>
      {/* First Section */}
      <div className='mr-2 mt-6'>
        <img src={cover} className='h-52 w-48 rounded-t-lg'/>
        <div className='bg-black w-48 flex flex-col rounded-b-lg'>
          <div className='text-white text-sm pt-3 pl-4'>Bossman Dlow</div>
          <div className='text-xs pb-3 pl-4'>Slippery</div>
        </div>
      </div>

      {/* Second Section */}
      <div className='pr-0'>
        <img src={cover} className='h-60 w-60 rounded-t-lg'/>
        <div className='bg-black w-60 flex flex-col rounded-b-lg'>
          <div className='flex flex-row items-start'>
            <div className='text-white text-sm pt-3 pl-4'>Bossman Dlow<br/><div className='text-xs pb-6'>Slippery</div></div>
            <button className='bg-white w-16 text-black rounded-full ml-12 mt-4 pl-1 pr-1 pb-1'>Listen</button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className='ml-2 mt-[-12px]'>
      <div className='ml-28 mb-3'><FaRegPlayCircle size={24}/></div>
        <img src={cover} className='h-52 w-48 rounded-t-lg'/>
        <div className='bg-black w-48 flex flex-col rounded-b-lg'>
          <div className='text-white text-sm pt-3 pl-4'>Bossman Dlow</div>
          <div className='text-xs pb-3 pl-4'>Slippery</div>
        </div>
      </div>
    </div>
  );
}
export default Double;
