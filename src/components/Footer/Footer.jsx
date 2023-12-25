import React from 'react'
import Joinayatrio from './Footer_child/Join_Ayatrio_Family'
import Ayatrio_Family from './Footer_child/Ayatrio_Family'
import Ayatrio_Services from './Footer_child/Ayatrio_Services'
import Help_Supports from './Footer_child/Help_Supports'
import About_Ayatrio from './Footer_child/About_Ayatrio'

const Footer = () => {
  return (
    <div>
      <div className='px-[50px] my-5'>
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
      </div>
    </div>
  )
}

export default Footer
