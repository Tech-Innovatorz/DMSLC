import React from 'react'
import { TiVideo } from "react-icons/ti";
import { Images } from '../../constants';
import Navbar from '../../components/Navbar';

const MeetPage = () => {
  return (
    <div className='bg-blue-300 min-h-screen w-screen py-4 flex justify-between items-center px-28'>
        <div className='inline-block w-[40rem]'>
            <p className='text-4xl'>Premium video meetings.</p>
            <p className='text-4xl'> now free for everyone</p><br />
            <p className='text-2xl font-thin'>We reengineer the way of commumnication for everyone, now inclusive of deaf people. In our meet, we make it inclusive to all</p>
            <div className='flex space-x-2 items-center my-12'>
                <button className='w-52 h-12 bg-blue-600 text-lg font-semibold text-white rounded-lg'><TiVideo className='inline-block mr-2 h-7 w-7 fill-white'/>create instant meet</button>
                <div >
                <input type="text" className='h-12 mr-2 rounded-lg' placeholder='enter a code' />
                <button className='disabled:text-gray-500 font-semibold text-lg'>Join</button>
                </div>
                
            </div>
        </div>
        <img src={Images.gMeetPageImage} className='inline-block' alt="..." />
    </div>
  )
}

export default MeetPage