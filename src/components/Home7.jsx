import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Drop } from './Drop';
import { Drop2 } from './Drop2';
export const Home7 = () => {
   // const [selectedOption, setSelectedOption] = useState("india");
    return (
        <div className='w-full h-full flex  flex-col justify-center items-center bg-[#F8F8F8]'>
            <div className='flex  relative left-[460px]'>
            <Drop />
            <Drop2/>
            </div>
 

           

            <aside className='flex justify-center itmes-center gap-20 p-20'>
                <div className='font-fam opacity-80 leading-8'>
                    <p className='text-xl font-medium text-black'>About Zomato</p>
                    <p>Who We Are</p>
                    <p>Blog</p>
                    <p>Work With Us</p>
                    <p>Investor Relations</p>
                    <p>Report Fraud</p>
                    <p>Press Kit</p>
                    <p>Contact Us</p>
                </div>
                <div className='leading-8 font-fam opacity-80'>
                    <p className='text-xl font-medium '>Zomaverse</p>
                    <p>Zomato</p>
                    <p>Blinkit</p>
                    <p>Feeding India</p>
                    <p>Hyperpure</p>
                    <p>Zomato Live</p>
                    <p>Zomaland</p>
                    <p> Weather Union</p>

                </div>
                <div className='leading-8 font-fam  opacity-80'>
                    <p className='text-xl font-medium'>For Restaurants</p>
                    <p>Partner With Us</p>
                    <p>Apps For You</p>
                </div>
                <div className='leading-8 font-fam opacity-80'>
                    <p className='text-xl font-medium'>learn More</p>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Terms</p>
                    <p>Sitemap</p>
                </div>
                <div className='leading-8 font-fam '>
                    <p className='font-medium text-xl opacity-80 mb-3'>Social links</p>
                    <div className='flex items-center justify-center gap-4 mb-5'>
                        <FaInstagram className='w-6 h-6 p-1 bg-black text-white rounded' />
                        <FaFacebookF className='w-6 h-6 p-1 bg-black text-white rounded' />
                        <FaLinkedin className='w-6 h-6 p-1 bg-black text-white rounded' />
                        <FaYoutube className='w-6 h-6 p-1 bg-black text-white rounded' />
                        <FaXTwitter className='w-6 h-6 p-1 bg-black text-white rounded' />

                    </div>

                    <img data-aos="zoom-in"   data-aos-once="true" data-aos-duration="600"  className='w-36 h-10 mb-2 ' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                    <img data-aos="zoom-in"   data-aos-once="true" data-aos-duration="600"  className='w-36 h-10 mb-2' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                </div>
            </aside>






        </div>
    )
}
