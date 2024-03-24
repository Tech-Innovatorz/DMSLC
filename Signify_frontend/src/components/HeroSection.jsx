import React from 'react'
import { Images } from '../constants'
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className='padding-b xl:padding-l wide:padding-r'>
    <div className='flex flex-col xl:flex-row px-2 gap-10 max-md:gap-0 max-xl:padding-x xl:items-center'>
        <div className='flex flex-col mb-4 max-md:mb-0 '>
            <h1 className='text-8xl font-semibold max-md:text-5xl'>
            Video calls with anyone, anywhere
            </h1>
            <div className='text-lg sm:max-w-xl mt-6 mb-14 text-slate-500'>
            Stay connected and collaborate with friends, family and colleagues no matter where you are.
            </div>
            <div className='px-14'>
                <button className='p-3 rounded-full bg-blue-600 text-white flex items-center gap-4'>Get Started <FaArrowRightLong /></button>
            </div>
        </div>
        <img className='mx-auto max-md:object-contain object-cover xl:w-[610px] xl:h-[500px] max-xl:h-[522px] w-screen' src={Images.HeroSectionImg} alt="Hero Person Signing" />
    </div>
    </section>
  )
}

export default HeroSection