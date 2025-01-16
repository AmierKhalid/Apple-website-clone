import React from 'react'
import apple from "./images/apple.svg"
import search from "./images/search.svg"
import bag from "./images/bag.svg"
import {navLists} from "../constants/index"
const Navbar = () => {
  return (
<header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
    <nav className='flex w-full screen-max-width'>
        <img src={apple} alt='idk' width={"18"} height={"18"}/>
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav,i)=>(
            <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>
        <div className='flex item-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={search} width={"18"} height={"18"}/>
          <img src={bag} width={"18"} height={"18"}/>
        </div>
    </nav>
</header>
  )
}

export default Navbar
