import React, { useEffect, useState } from 'react'
import { FaLess } from 'react-icons/fa'

export const Home5 = () => {
  const[email,setemail]=useState()

function mail (a){
  setemail(!a)
 

}


  return (
    <div className='w-full h-full'>
      <div className='flex w-full h-[500px] justify-center items-center bg-[#FFFBF7] gap-20 mt-36 '>
        <img className='w-64 h-64' src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" />
        <div className=' flex flex-col gap-5'>
          <h1 className='text-4xl  font-normal font-fam relative '>
            Get the Zomato app</h1>
          <p className='font-fam'>We will send you a link, open it on your phone to download <br /> the app</p>
          <div className='flex gap-7  '>
            <span  className='text-sm font-fam  flex items-center gap-3'><input onClick={()=>{mail(false)}} name='email' type="radio" className='mr-1 text-center cursor-pointer radio w-[20px] h-10 input' />Email</span>
            <span  className='text-sm font-fam flex items-center gap-3 '>

              <input name='email' onClick={()=>{mail(true)}} type="radio" className='mr-1 text-center cursor-pointer bg-black  w-[20px] h-10  ' />Phone</span>
          </div>
          <div className='flex items-center  gap-7 '>
            <span className='bg-white border-2 rounded  border-red-500 w-[24vw] h-14' >
              <select className={` border-none h-12  focus:outline-none  font-fam  p-3 text-sm font-normal"}  ${ email ?"hidden ":""} `} id="country" name="country">

                <option value="australia">91</option>
                <option value="canada">81</option>
                <option value="usa">21</option>


              </select>
              <input className={`w-[19vw] h-12 ml-3 border-[1px] border-t-0 border-b-0 border-r-0  font-fam  ${email ?"border-l-0 ":""} focus:outline-none focus:border-green-800 p-4`} placeholder={`${email ? "email":"Type here..."}`} type="text" />
            </span>
            
            <button className='w-[165px] h-12  bg-[#E03546] text-white font-fam rounded opacity-90 text-sm'> Share App Link</button>
          </div>
          <p className='font-fam opacity-40'>Download app from</p>
          <div className='flex gap-5'>
            <img data-aos="zoom-in"   data-aos-once="true" data-aos-duration="600"  className='w-90 h-10' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
            <img data-aos="zoom-in"   data-aos-once="true" data-aos-duration="600"  className='w-90 h-10  ' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
          </div>
        </div>

      </div>
      
    </div>
  )
}
