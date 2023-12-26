import React from 'react'
import { FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import game from '../../assets/game.jpg'
import Double from './Double';
const DoubleComp = () => {
  return (
    <div>
      <div className='grid grid-cols-2 h-[35rem] gap-4 mb-12'>
        <div className='col-span-1 ml-12 pr-8 bg-green-950 text-white overflow-hidden'>
        <div ><div className='flex text-3xl pl-56 pt-16'> <FaApple size={32}/>Music</div>
        <div className='text-md pl-52'> Over 100 million songs.</div>
        <div className='text-md pl-48 pb-5' >Start listening for free today.</div>
        <div className='flex pl-48'>
  <a href='#' className='flex pr-4'>Try it free <sup className='mt-3 text-[0.6rem]'>10</sup><GoArrowUpRight className='mt-2 ml-1'/></a>
  <a href='#' className='flex '>Learn more <FaAngleRight className='mt-2 ml-1'/></a>
</div>
        </div>
        <div className='pt-7 ml-[-1rem]'>
        <Double/>
</div>
        </div>
        <div className='col-span-1 mr-12  bg-zinc-100 text-black overflow-hidden'>
  <div>
    <div className='flex text-3xl pl-56 pt-16'>
      <FaApple size={32}/>Arcade
    </div>
    <div className='text-md pl-44'>Get 3 months of Apple Arcade free</div>
    <div className='text-md pl-52 pb-5'>when you buy an iPhone.</div>
    <div className='flex pl-48 text-sky-600'>
      <a href='#' className='flex pr-4'>
        Try it free <sup className='mt-3 text-[0.6rem]'>11</sup><GoArrowUpRight className='mt-2 ml-1'/>
      </a>
      <a href='#' className='flex'>
        Learn more <FaAngleRight className='mt-2 ml-1'/>
      </a>
    </div>
  </div>
  <div className='mt-12'>
    <img src={game} className='w-[120%] h-[400px] object-cover' alt='Games Image' />
  </div>
</div>
      </div>
    </div>
  )
}

export default DoubleComp
