import React from 'react'
import { Images } from '../../../constants'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const SignLanOfflineVid = () => {
    
    const nav=useNavigate();

    const handleButtonClick=()=>{
        nav("/vidoffline")
    }
    

    return (
        <div className='padding-b xl:padding-l xl:padding-r'>
            <div className='flex flex-col lg:flex-row px-2 gap-10 max-md:gap-0 max-xl:padding-x xl:items-center'>
                <div className='flex flex-col mb-4 max-md:mb-0 '>
                    <h1 className=' font-semibold max-md:text-5xl md:text-6xl xl:text-8xl'>
                    Offline Video Translate
                    </h1>
                    <div className='text-lg lg:text-xl sm:max-w-xl md:max-w-3xl mt-6 mb-5 text-slate-500 leading-10'>
                    Our groundbreaking service utilizes advanced algorithms to translate  sign language into English text by analyzing uploaded videos, providing  accurate English subtitles seamlessly.                    
                    </div>
                </div>
                <img className=' lg:mt-4 xl:mr-10 mx-auto max-md:object-contain object-cover xl:w-[522px] xl:h-[348px] max-xl:h-[262px] max-xl:w-[393px] w-screen' src={Images.SignLanguageOfflineTranslatePic} alt="Hero Person Signing" />
            </div>
            <div className='px-14 mt-14'>
                <button className='p-3 rounded-full bg-purple-600 text-white flex items-center gap-4 mx-auto hover:bg-purple-400 duration-150 text-2xl font-bold' onClick={handleButtonClick}>Get Started <FaArrowRightLong className='h-10 w-10'/></button>
            </div>
        </div>
    )
}

export default SignLanOfflineVid