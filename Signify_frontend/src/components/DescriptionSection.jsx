import React from 'react'
import { Images } from '../constants'

const DescriptionSection = () => {
  return (
    <section className='padding-b xl:padding-l wide:padding-r'>
    <div className='flex flex-col-reverse xl:flex-row px-2 gap-10 max-md:gap-0 max-xl:padding-x xl:items-center'>
        <img className='mx-auto max-md:object-contain object-cover xl:w-[610px] xl:h-[500px] max-xl:h-[522px] w-screen' src={Images.DescSectionImg} alt="Hero Person Signing" />
        <div className='flex flex-col mb-4 max-md:mb-0 '>
            <h1 className='text-8xl font-semibold max-md:text-5xl'>
            Connect with Loved Ones
            </h1>
            <div className='text-lg sm:max-w-2xl  mt-6 mb-14 text-slate-500'>
            Whether scheduled or spontaneous, in real-time calls or exchanging video messages, Google Meet helps you connect in the ways that work best for you.
            </div>
            
        </div>
    </div>
    </section>
  )
}

export default DescriptionSection