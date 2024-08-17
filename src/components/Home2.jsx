import React, { useState } from 'react'
import { home2 } from './defalutData'
export const Home2 = () => {
  const [data, setdata] = useState(home2)
  return (
    <div className=' flex justify-center itmes-center gap-10 p-10  ' >
      {
        data.map((val) => {
          return (
  <div  data-aos="zoom-in">
 <div   className=' flex  w-  z-0 hover:scale-105 duration-300'>
              <div className=' w-[370px]  relative  '>
                <img className='w-full h-56 rounded-[10px]' src={val.img} alt="" />
                <div className='absolute top-[150px]  w-full  h-20 text-sm font-medium bg-white  flex flex-col justify center items-cneter p-3 gap-2 shadow-2xl  rounded'>
                  <p className='text-[19px] font-normal'>{val.head}</p>
                  <p className='text-[#868687]'>{val.p}</p>
                </div>

              </div>
            </div>
  </div>
           
          )
        })
      }
   </div>
   
  )
}
