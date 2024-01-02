import React from 'react'
import './styles.css'
import Joinayatrio from './Footer_child/Join_Ayatrio_Family'
import AyatrioFamily from './Footer_child/Ayatrio_Family'
import AyatrioServices from './Footer_child/Ayatrio_Services'
import HelpSupports from './Footer_child/Help_Supports'
import AboutAyatrio from './Footer_child/About_Ayatrio'
import Image from '../../assets/ayatriologo.png';


const Footer = () => {
  return (
    <div>
      
      <div className="sm:px-[50px] px-[20px] mt-20 pt-10 footer-container ">
        <div className="filter_container flex gap-32">
          <div className="grid sm:grid-cols-6 grid-cols-1">
            <div className="sm:col-span-2 row-span-1 col-span-1 mr-12 mb-5">
              <Joinayatrio />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <AyatrioFamily />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <AyatrioServices />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <HelpSupports />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
            <div className="col-span-1">
              <AboutAyatrio />
            </div>
            <hr className=" border w-[75vw] sm:hidden block" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="flex sm:px-[50px] px-[20px]  sm:flex-row flex-col justify-between p-4">
            <div class="flex  items-center space-x-4 text-lg font-semibold tracking-tight">
              <div class="py-2 text-black" >Sign in</div>
              <div class="py-2">Sign up</div>
              <div class="py-2 text-black" >Sign in</div>
              <div class="py-2">Sign up</div>
            </div>

            <div class="flex gap-3 items-center text-lg font-semibold tracking-tight">
              <div class="py-2 text-black" >Cookie policy</div>
              <div class="py-2">Cookie settings</div>
            </div>
          </div>
        </div>
        <div class="flex ">
          <div className='footer_tcon  w-full  justify-center py-2'>
            <img className='sm:w-[20%] w-[30%]' src={Image} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
