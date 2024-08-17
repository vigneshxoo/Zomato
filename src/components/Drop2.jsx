import React, { useState } from 'react'
import { TfiWorld } from "react-icons/tfi";
import { GoChevronRight } from "react-icons/go";
export const Drop2 = () => {
    const [state, setstate] = useState("Italian")
    const [fal, setfal] = useState(false)
    console.log(state)
    const list = ["English", "Turcke", "Proutcus", "indonoesion", "Espon", "Cestio", "Solvenchine", "Polish", "italian", "vetinasion"]
    return (
        <div className='flex flex-col justify-center items-center w-full relative '>
            <div className='cursor-pointer opacity-80 rounded' onClick={() => setfal(!fal)}>
                <p className='flex justify-center items-center gap-2  p-2 font-fam  font-medium h-12 border-2'><TfiWorld />{state}    <GoChevronRight className="rotate-90 w-5 h-5 " /></p>
            </div>
            <div className={`${fal ? "hidden" : "block"} w-44 shadow-lg ...  text-center font-fam rounded bottom-36 absolute  `} >
                <div className=''>

                    {

                        list.map((val) => {
                            return (
                                <div className=' '>
                                    <p className='cursor-pointer mb-3' onClick={(e) => { setstate(val); setfal(true) }}>{val}</p>
                                </div>
                            )

                        })

                    }




                </div>

            </div>

        </div>
    )
}
