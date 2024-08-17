import React, { useState } from 'react'
import { home3 } from './defalutData'
export const Home3 = () => {
    const [home, sethome] = useState(home3)

    return (
        <div>
            <div className='w-full h-full p-10'>

                <div className='flex justify-center items-center gap-60 p-2 '>
                    <div>
                        <h1 className='text-4xl p-2'>Collections</h1>
                        <p className='text-[17px] font-[400] p-2'>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</p>
                    </div>

                    <p className='text-1xl font-medium text-red-500'>All Collections in Chennai</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    {
                        home.map((val) => {
                            return (
                                <div data-aos="zoom-in"   data-aos-once="true" data-aos-duration="600" className=' w-[270px] h-80 relative cursor-pointer'>
                                    <img className='w-[270px] h-80 rounded' src={val.img} alt="" />
                                    <div className='w-full h-full bg-black absolute top-0 opacity-50'></div>
                                    <div className='absolute bottom-0 p-3'>
                                        <p className='text-white text-[17px] font-medium'>  {val.cont}</p>
                                        <p className='text-white font-sm font-medium'>{val.plc}</p>
                                    </div>
                                </div>

                            )
                        })

                    }


                </div>
                

            </div>
        </div>
    )
}
