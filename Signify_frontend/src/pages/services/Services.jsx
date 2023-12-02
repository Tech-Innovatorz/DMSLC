import React, { useState } from 'react'
import voice from '../../assets/voice.svg'

const Services = () => {
  
  // const [vidCallBtn, VideoCallBtnTrigger] = useState(false)
  
  // VideoCallBtnTrigger = () => {
    
  // }

  return (
    <div className="py-10 text-center flex items-center flex-col">
            <div className='flex'>
                <img className='w-16' src={voice} alt="..." />
                <h1 className='font-bold w-56 text-lg text-white'>Dual Mode Sign Language Communication Platform</h1>
            </div>
            <div className="w-[80%] mt-5 text-white">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lorem consectetur, fringilla mi sed, egestas sem. Donec maximus ac augue vel maximus. Quisque eu facilisis risus, a auctor velit. Nam eget tortor non neque varius pulvinar id iaculis enim. Fusce porta, ex sit amet sagittis ultricies, turpis libero pretium ligula, pellentesque suscipit leo sem eu massa. Donec nisi dolor, pellentesque vitae posuere non, tristique a nulla. Cras congue, nunc eget rhoncus porttitor, orci est egestas lacus, venenatis aliquet ipsum leo id libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ultrices sem est.</p> 
            <br />
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam viverra felis sit amet pulvinar. Donec vulputate felis nisi, sed dapibus elit aliquet id. Nulla in congue massa. Praesent et ultricies leo, eu sollicitudin ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur malesuada.</p>

            </div>
          <div className="md:grid md:gap-3 md:grid-cols-9 md:grid-rows-2 flex flex-col md:w-1/2 my-10"> 
          <button className="md:col-start-1 md:col-end-4 h-14 bg-[#5BA0E7] rounded-xl text-white font-bold my-3 md:my-0">Video Call</button>
          <button className="md:col-start-7 md:col-end-10 h-14 bg-[#5BA0E7] rounded-xl text-white font-bold my-3 md:my-0">Upload Video</button>
          <button className="md:col-start-4 md:col-end-7 h-14 bg-[#5BA0E7] rounded-xl text-white font-bold my-3 md:my-0">RealTime Communication</button>
          </div>
        </div>
  )
}

export default Services