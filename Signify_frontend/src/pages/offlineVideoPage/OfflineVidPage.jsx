import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IoMdDownload } from "react-icons/io";

const OfflineVidPage = () => {

    //initially set the subtitles to be empty
    const [subtitles, setsubtitles] = useState("")
    const [selectedFile, setSelectedFile] = useState("No file chosen");


    //when download button is pressed trigger this event
    const handleDownload =()=>{
        console.log("download event")
    }

    
    useEffect(() => {
        const fileUpload=document.querySelector("#fileInput");

        //event is triggered when file is uploaded
        fileUpload.addEventListener("change",()=>{
            //incase any file is uploaded and subtitles are generated then we can set the subtitles
            setsubtitles("[generate the subtitles]")
        })
    
    }, [])
    

  return (
    <div className='padding-b xl:padding-l xl:padding-r py-6'>
        <div className='px-5'>
            <h1 className='text-4xl font-bold mb-3 lg:mb-5 md:text-5xl xl:text-6xl'>Offline Video Translate</h1>
            <p className='text-slate-500 md:text-lg xl:text-xl'>Our pioneering offline video translation service utilizes advanced LSTM and FSM models to accurately translate sign language videos into English text, seamlessly generating understandable subtitles.</p>
        </div>
        <div className=' flex justify-center items-center relative py-3 mx-4 my-4 rounded-md'>
            
            {/* <input type="file" name="fileUpload" id="fileUpload" className='opacity-0 z-10'/>
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>Upload a File Here</p> */}

            {/* <input type="file" name="fileUpload" id="fileUpload" className='file:p-2 file:rounded-md file:border-none file:mx-2 text-sm text-ellipsis' /> */}
            
            {/* Upload Video Here */}
                <form>
                    <div className="flex flex-row items-center">
                        <input
                        type="file"
                        id="fileInput"
                        onChange={(e) => setSelectedFile(e.target.files[0].name)}
                        hidden
                        />
                        <label
                        htmlFor="fileInput"
                        className="block text-sm text-slate-500 mr-4 py-2 px-4 rounded-md border-0  font-semibold bg-pink-50 hover:bg-pink-100 cursor-pointer
                                lg:text-lg
                             
                             "
                        >
                        Choose file
                        </label>
                        <label className="text-sm text-slate-500 lg:text-lg">{selectedFile}</label>
                    </div>
                </form>

        </div>

        {subtitles&&<div className='px-5 '>
            <h1 className='text-lg md:text-xl'>subtitles generated:</h1>
            <p className='md:text-lg'>
                {subtitles}
            </p>
            <div className='flex justify-center'>
                <button className='bg-blue-600 px-3 py-2 rounded-lg text-white flex items-center gap-3 my-7 lg:text-lg' onClick={handleDownload}> <IoMdDownload className='h-6 w-6 lg:h-8 lg:w-8'/>download subtitles</button>
            </div>
        </div>}
    </div>
  )
}

export default OfflineVidPage