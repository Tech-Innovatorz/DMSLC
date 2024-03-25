import React from 'react'
import { Images } from '../../../constants'
import { FaArrowRightLong } from "react-icons/fa6";



const SignLanVidCall = () => {
    return (
        <div className='padding-b xl:padding-l xl:padding-r'>
            <div className='flex flex-col lg:flex-row px-2 gap-10 max-md:gap-0 max-xl:padding-x xl:items-center'>
                <div className='flex flex-col mb-4 max-md:mb-0 '>
                    <h1 className=' font-semibold max-md:text-5xl md:text-6xl xl:text-8xl'>
                        Sign Language Video call
                    </h1>
                    <div className='text-lg lg:text-xl sm:max-w-xl mt-6 mb-5 text-slate-500 leading-10'>
                        Empowering communication for the deaf and hard of hearing, our project  seamlessly translates sign language into English text in real-time  during video calls.
                    </div>
                </div>
                <img className=' lg:mt-4 xl:mr-10 mx-auto max-md:object-contain object-cover xl:w-[522px] xl:h-[348px] max-xl:h-[262px] max-xl:w-[393px] w-screen' src={Images.SignLanguageVideoCallPic} alt="Hero Person Signing" />
            </div>
            <div className='px-14 mt-14'>
                <button className='p-3 rounded-full bg-purple-600 text-white flex items-center gap-4 mx-auto hover:bg-purple-400 duration-150 text-2xl font-bold'>Get Started <FaArrowRightLong className='h-10 w-10'/></button>
            </div>
        </div>
    )
}

export default SignLanVidCall