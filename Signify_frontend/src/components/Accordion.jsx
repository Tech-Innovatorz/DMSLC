import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Accordion = ({accordionTitle,accordionContent}) => {
    const [accordionVisible, setAccordionVisible] = useState(false);
  return (
    <>
    <div className='p-4 '>
        <button className='w-full flex justify-between mb-3' onClick={()=>{setAccordionVisible(!accordionVisible)}}>
            <span className='text-left text-lg font-semibold'>{accordionTitle}</span>
            <span className={`flex items-start`}><RiArrowDropDownLine className={`w-6 h-6 ${accordionVisible?"rotate-180":""} transition-all duration-150`}/></span>
        </button>
        <div className={`grid overflow-hidden transition-all duration-100 ease-in-out ${accordionVisible? "grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`}>
            <p className='overflow-hidden text-slate-500'>
            {accordionContent}
            </p>
        </div>

    </div>
    
    </>
  )
}

export default Accordion