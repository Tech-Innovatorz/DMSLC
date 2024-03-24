import React from 'react'
import { Images } from '../constants'

const DeviceSection = () => {
  return (
    <section className='padding-b xl:padding-l wide:padding-r'>
    <div className='flex flex-col sm:flex-row px-2 gap-10 max-md:gap-0 max-xl:padding-x xl:items-center'>
        <div className='flex flex-col mb-4 max-md:mb-0 '>
            <h1 className='text-8xl font-semibold max-md:text-5xl'>
            Meet on any device
            </h1>
            <div className='text-lg sm:max-w-xl mt-6 mb-14 text-slate-500'>
            Join on your mobile phone or tablet via the Signify app, available on the app Store and Play Store. Or connect from your computer browser – no software install needed.
            </div>
            <div className='px-14'>
                {/* <button className='p-3 rounded-full bg-blue-600 text-white flex items-center gap-4'>Get Started <FaArrowRightLong /></button> */}
            </div>
        </div>
        <img className='mx-auto object-contain  xl:w-[648px] xl:h-[930px] max-xl:h-[522px]' src={Images.DeviceSectionImg} alt="Hero Person Signing" />
    </div>
    </section>
  )
}

export default DeviceSection