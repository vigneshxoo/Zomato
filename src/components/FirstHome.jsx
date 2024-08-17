import React from 'react'
// import {  FaLocationDot  } from "react-icons/io5";

import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Home2 } from './Home2';
export const FirstHome = () => {
  return (
    <div className='w-full h-full'>
      {/* applying relative */}
      <div className='w-full h-[400px] bg-green-500 relative z-20'>
        <div className='bg-no-repeat h-[100%] w-full bg-center bg-cover bg-[url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)]'>
          <div className='flex justify-around p-10'>
            <div className='text-white text-xl font-medium'>
              <p>Get tha app</p>
            </div>
            <div className='flex justify-cneter items-center gap-14 text-white text-sm font-medium'>
              <p>Invester Realtion</p>
              <p>Contact</p>
              <p>Night Life</p>
            </div>
          </div>

          <div className='flex  flex-col justify-cneter items-center w-full h-full absolute top-36 left-1/2 transform -translate-x-1/2 '>
            <img className='w-80 h-16 ' src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
            <p className='text-3xl p-4 font-fam text-white'>Discover the best food & drinks in Chennai</p>
            <div className='w-[500px]'>
              <span className='flex justify-center items-center gap-2 bg-white rounded-[13px] z-10 '>

                <div className='bg-white h-12 w-7 flex justify-center items-center relative'>
                  <FaLocationDot className=' w-6 h-6 absolute left-4 text-red-500' />
                </div>
                <div className='w-20'>
                  <select className='h-12 border-none  focus:outline-none w-28 p-2 text-sm font-normal' id="country" name="country">

                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>


                  </select>
                </div>

                <div className="relative group">
                  <div className="flex items-center bg-white gap-2 border-[0.1px]  border-black-800 border-t-0 border-b-0 border-r-0 ">
                    <CiSearch className='ml-2 w-5 h-5 ' />
                    <input placeholder='search for resturent and dish'
                      className="w-80 h-12 focus:outline-none p-2"
                      type="text"
                    />
                  </div>
                  <div className="absolute w-96 top-20 h-80 bg-black hidden group-focus-within:block">

                  </div>
                </div>

              </span>

            </div>

          </div>


        </div>


      </div>
        <Home2/>
    </div>
  )
}
