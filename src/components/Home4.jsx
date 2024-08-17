import React, { useState } from 'react'
import { home4 } from './defalutData'
import { GoChevronRight } from "react-icons/go";
import { seemore } from './defalutData';

export const Home4 = () => {
    const [place, setplace] = useState(home4)
    const [more, setmore] = useState(seemore)
    const [open, setopen] = useState(false)

    function onclickfun() {
        setopen(!open)
    }
    const value=()=>{
        more.forEach((index1,index2)=>{
            
            
                if(index2==2){
                    
                    if(!open){
                    return{...index1,name:index1.name="see less"}
                }  else{
                    return{...index1,name:index1.name="See more"}
                }
            }else{
        
            }
         
            }
  
        )
}
    return (


        <div>
            <h1 className='text-4xl text-center mr-96 p-10'>Popular localities in and around <span className='font-bold'>chennai</span></h1>
            <div className='mx-auto w-[70%]   '>
                <div className={` grid grid-cols-3 ${open ? "h-full ":" h-[210px]"} overflow-hidden    gap-2 `}>
                    {
                        place.map((val, index) => {
                            return (

                                <div  key={index} className='p-10 w-90 h-20  mb-5 flex items-center justify-between gap-30 cursor-pointer shadow-customShadow  ' >
                                    <div className='font-fam' >
                                        <p className='text-[18px] font-normal tracking-wide'>{val.name}</p>
                                        <p className={`text-[16px] transition text-customGray ${open ? "":" "}`}>{val.plc}</p> 
                                    </div>
                                    <div className='cursor-pointer flex' >
                                        <GoChevronRight className="" />
                                    </div>
                                </div>
                                

                            )


                        })
                    }
                </div>
                <div className='grid grid-cols-3 gap-2 mylist'>

              
                {
                    more.map((d,index)=>{
                        return(
                            <>
                             <div onClick={() => {
                                    if (index === 2) {
                                        value() ;  onclickfun() 

                                
                                    } else {
                                        return null
                                    }
                                }} key={index} className='p-10 w-90 h-20 font-fam  mb-5 flex items-center justify-between gap-30 cursor-pointer shadow-customShadow  ' >
                                    <div className='value' >
                                        <p className='text-[18px] font-normal tracking-wide'>{d.name}</p>
                                        <span className={`text-[16px]  transition text-customGray  ${open ? "span":""}    `}>{d.plc}</span> 
                                    </div>
                                    <div className='cursor-pointer flex icon' >
                                        <GoChevronRight className={`${open ? "":""}`} />
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
                  </div>



            </div>

        </div>

    )
}
