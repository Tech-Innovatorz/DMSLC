import React from 'react'
import voice from '../assets/voice.svg'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  const navLinks = document.querySelector('.nav-links')

  function onToggleMenu(e){
    const men=document.getElementById("menu")
    // console.log(e.name)
    console.log(men.name)


      // e.name = e.name === 'menu' ? 'close' : 'menu'
      navLinks.classList.toggle('top-[9%]')
  }

  return (
    <nav className='bg-blue-500 flex justify-between md:justify-normal items-center px-5'>
    <div className='flex items-center w-[60%]'>
        <div className='flex items-center z-10'>
            <img className='w-16' src={voice} alt="..." />
            <h1 className='font-bold w-56 text-sm'>Dual Mode Sign Language Communication Platform</h1>
        </div>
        <div className='nav-links duration-500 absolute md:static bg-blue-500 min-h-[10vh] md:min-h-fit left-0 top-[-100%] w-full md:w-fit flex items-center px-5 justify-center md:justify-normal'>
        <ul className='flex text-center md:flex-row flex-col gap-8 md:gap-0 '>
            <li className='list-none inline-block px-5 mx-5'>Home</li>
            <li className='list-none inline-block px-5 mx-5'>ContactUs</li>
            <li className='list-none inline-block px-5 mx-5'>Project</li>
        </ul>

        </div>
    </div>
        {/* <ion-icon ></ion-icon> */}
        <IoMenu onClick={(e)=>{onToggleMenu(e)}} name="menu" id='menu' className="text-3xl z-10 cursor-pointer md:hidden"/>
    </nav>
  )
}

export default Navbar