import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'] })

const Header = () => {

    return (
        <div className={`${montserrat.className} flex justify-between bg-[#252B42] h-[58px] p-[10px] text-white font-medium text-[14px]`}>
            <div className='flex  h-[46px] w-[415px] p-[10px]  space-x-[30px]  '>
                <ul className='flex items-center space-x-[5px] '>
                    <IoCallOutline className='h-[16px] w-[16px]' />
                    <li>  (225) 555-0118</li>

                </ul>
                <ul className='flex items-center space-x-[5px] '>
                    <TfiEmail className='h-[16px] w-[16px]' />
                    <li>michelle.rivera@example.com</li>
                </ul>
            </div>
            <div className='flex  h-[44px] w-[332px] p-[10px] space-x-[30px] '>
                Follow Us  and get a chance to win 80% off
            </div>
            <div className='flex justify-center items-center  h-[46px] w-[233px] p-[10px] space-x-[30px]'>
                Follow Us  :
                <ul className='flex items-center space-x-[10px] pl-[5px] '>
                    <li><FaInstagram className='h-[16px] w-[16px]' /></li>
                    <li><FaYoutube className='h-[11.24px] w-[16px]' /></li>
                    <li><FaFacebook className='h-[16px] w-[16px]' /></li>
                    <li><FaTwitter className='h-[13px] w-[16px]' /></li>
                </ul>
            </div>

        </div>
    )
}

export default Header
