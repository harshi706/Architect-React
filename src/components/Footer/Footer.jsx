import React from 'react'
import './styles.css'
import Joinayatrio from './Footer_child/Join_Ayatrio_Family'
import Ayatrio_Family from './Footer_child/Ayatrio_Family'
import Ayatrio_Services from './Footer_child/Ayatrio_Services'
import Help_Supports from './Footer_child/Help_Supports'
import About_Ayatrio from './Footer_child/About_Ayatrio'
import Image from '../../assets/ayatriologo.png';


const Footer = () => {
  return (
    <div>
      {/* <div className='p-12 bg-{#f5f5f5}'>
        <div className='filter_container flex gap-32'>
          <div className='grid grid-cols-6'>
            <div className='col-span-2 mr-12'>
              <Joinayatrio />
            </div>
            <div className='col-span-1'>
              <Ayatrio_Family />
            </div>
            <div className='col-span-1'>
              <Ayatrio_Services />
            </div>
            <div className='col-span-1'>
              <Help_Supports />
            </div>
            <div className='col-span-1'>
              <About_Ayatrio />
            </div>
          </div>
        </div>
      </div> */}
      <div className="sm:px-[50px] px-[20px] mt-20 pt-10 footer-container ">
        <div className="filter_container flex gap-32">
          <div className="grid sm:grid-cols-6 grid-cols-1">
            <div className="sm:col-span-2 row-span-1 col-span-1 mr-12 mb-5">
              <Joinayatrio />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <Ayatrio_Family />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <Ayatrio_Services />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <Help_Supports />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <About_Ayatrio />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />


          </div>
        </div>
      </div>
      <div>

        <div>
          <div class="flex sm:px-[50px] px-[20px] justify-between p-4">
            <div class="flex items-center space-x-4 text-lg font-semibold tracking-tight">
              <div class="py-2 text-black" >Sign in</div>
              <div class="py-2">Sign up</div>
              <div class="py-2 text-black" >Sign in</div>
              <div class="py-2">Sign up</div>
            </div>

            <div class="flex items-center text-lg font-semibold tracking-tight">
              <div class="py-2 text-black" >Cookie policy</div>
              <div class="py-2">Cookie settings</div>
            </div>

          </div>
        </div>

        <div class="flex ">
          <div className='footer_tcon  w-full  justify-center py-2'>
            <img className='w-[20%]' src={Image} alt='' />
          </div>

        </div>




      </div>
    </div>
  )
}

export default Footer
