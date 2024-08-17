
import React, { useState } from 'react';
import { GoChevronRight } from "react-icons/go";
export const Drop = () => {
    const [hidden, sethidden] = useState(true);
    const [selected, setSelected] = useState({ name: "India", img: "https://imgk.timesnownews.com/story/1565779931-National_Flag.jpg?tr=w-1200,h-900" });


    function on() {
        sethidden(!hidden);
    }

    const data = [
        { name: "India", img: "https://imgk.timesnownews.com/story/1565779931-National_Flag.jpg?tr=w-1200,h-900" },
        { name: "UAE", img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" }
    ];

    return (
        <div className='font-fam w-full full p-20'>
            <div className='grid place-items-center  relative   '>

                <div onClick={on} className='  p-5 text-black    flex gap-5 items-center justify-center  h-8 opacity-70 border-2 rounded w-[130px] '>
                    {selected.name && (
                        < div className='flex text-1xl flex items-center '>
                            <img src={selected.img} className="inline-block w-6 h-4 mr-2" />
                            <p className='text-1xl font-fam  font-medium'>{selected.name}</p>

                        </div>

                    )}
                    <GoChevronRight className="rotate-90 w-5 h-5 " />


                </div>
                <div className=' absolute bottom-12 right-20 '>
                    <div className={`w-96 rounded h-16 p-5 shadow-lg ...  flex items-center gap-20 ${hidden ? "hidden" : "block"}`}>

                        {data.map((val, index) => (
                            <div className='  '>
                                <div key={index} className='flex items-center cursor-pointer    ' onClick={() => {
                                    setSelected({ name: val.name, img: val.img });
                                    sethidden(true); // This hides the dropdown after selection
                                }}>
                                    <p>{val.name}</p>
                                    <img className='w-6 h-4 ml-2 ' src={val.img} alt={val.name} />
                                </div>
                            </div>
                        ))}

                    </div>
                   

                </div>



            </div>
            
                    
        </div>
    );
};

