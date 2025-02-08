import React from 'react'
import { Montserrat } from "next/font/google";
import { BsPerson, BsSearch } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";
const montserrat = Montserrat({ subsets: ['latin'] })
import { SlHeart } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className={`${montserrat.className} mt-[10px] flex items-center h-[58px] p-[10px] text-black font-medium text-[14px] justify-between`}>
        <div className=' flex items-center h-[58px] w-[187px] p-[10px] font-bold text-[24px]'>
        Bandage
        </div>

        <div className='w-[365px] h-[25px] ml-[200px] '>
            <ul className=' flex items-center space-x-[20px] '>
                <li>Home</li>
                <li>Shope</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
            </ul>
        </div>

        <div className='flex space-x-8 text-[#23A6F0] p-[5px] items-center  h-[54px] '>
            <BsPerson className=' m-[5px] h-[16px] w-[16px] '/>
            Login / Register
            <BsSearch className='m-[5px]  h-[16px] w-[16px]'/>
            <LiaShoppingCartSolid className='h-[16px] w-[16px]'/>1
            <SlHeart className='m-[5px] h-[16px] w-[16px]'/>1
            
        </div>

    </div>
  )
}

export default Navbar
