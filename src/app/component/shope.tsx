import Image from 'next/image'
import React from 'react'

const Shope = () => {
    return (
        <div>

            <div className=' h-[716px] text-white font-medium text-[16px]'>

                <div className='     '>
                    <Image src={"/assets/shop-hero-1-product-slide-1.jpg"} alt='image' width={1600}
                        height={716} />
                </div>
                <div className='space-y-10 w-[599px] h-[331px] ml-[200px] mt-[-550px]'>
                    <h5 className='font-medium text-[16px]'>SUMMER 2020</h5>
                    <h1 className='font-medium text-[58px]'>NEW COLLECTION</h1>
                    <h4 className='font-normal text-[20px]'>We know how large objects will act,<br />
                        but things on a small scale.</h4>
                    <button className=' h-[62px] w-[221px] bg-[#2DC071] font-medium text-[24px]'>
                        <h3>SHOP NOW</h3>
                    </button>

                </div>
            </div>
            {/* Second page */}

            {/* <div className='bg-blue-200  h-[770px] mt-[72px] text-black font-medium text-[16px]'>
                <div className='mt-[20px]  h-[62px] w-[607px] bg-red-300 >'>
                    <h2 className='text-[24px]'>EDITOR’S PICK</h2>
                    <p className='text-[20px]'>Problems trying to resolve the conflict between </p>

                </div>

            </div> */}

        </div>



    )
}

export default Shope
