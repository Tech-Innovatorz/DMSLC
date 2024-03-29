import React, { useEffect, useState } from 'react'
import { Images } from '../constants';

const SignConversionWindow = ({imageUrl,signConversionWindow}) => {

   

  
  return (
    <div id='signConversion-window'
            className={`h-52 w-52 bg-green-500 absolute bottom-[110%] rounded-lg transition-all duration-300  ${signConversionWindow?"opacity-100":"opacity-0"}`}
            >
              <img src={imageUrl} alt="no image" className='object-cover w-full h-full rounded-lg'/>
    </div>
  )
}

export default SignConversionWindow