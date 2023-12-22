import React, { useState } from 'react'
import {MdAccountCircle, MdClose, MdMenu} from 'react-icons/md'
const Navbar = () => {
    const [menu, setMenu]=useState(false)
    const handleClick=()=>{
        setMenu(true)
    }
    const handleClose=()=>{
        setMenu(false)
    }
  return (
    <div className='flex justify-between items-center p-2 bg-stone-800 '>
        {/**Navbar with account option and a harmburger */}
        <div className='p-2'>
            {/**title */}
            <h1 className='text-lime-500 font-bold text-2xl'>HearthStone Apartments</h1>
        </div>

        {/**different pages links */}
        <div className='hidden md:flex items-center gap-4' >
            <ul className='flex gap-4 text-stone-50 text-xl'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Feedback</li>

            </ul>
            {/**account icon */}
        <div>
            <MdAccountCircle size={25} className='text-white font-bold cursor-pointer' />
        </div>
        </div>

        {/**harmburger menu */}
        <div className='md:hidden'>
<MdMenu onClick={handleClick} size={25} className='text-white font-bold cursor-pointer' />
        </div>
        {/**Menu on harmbuger */}
        {
            menu &&
            <div className=' top-0 left-0 fixed w-[200px] p-2 bg-stone-800 font-bold h-full  ease-in-out duration-300 '>
                <MdClose onClick={handleClose} size={25} className='text-white font-bold m-4 cursor-pointer' />
                <ul className='flex flex-col gap-4 top-4  text-lime-500 text-2xl'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Feedback</li>

            </ul>
            </div>
        }
    </div>
  )
}

export default Navbar