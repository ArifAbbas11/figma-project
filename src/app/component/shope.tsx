import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const Shope = () => {
    return (
        <div>

            <div className=' h-[760px] text-white font-medium text-[16px]'>

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

            <div className=' h-[770px]  bg-[#FAFAFA] text-black font-medium text-[16px]'>
                <div className='mx-auto  h-[62px] w-[607px]'>
                    <h2 className='flex justify-center pt-[50px] text-[24px]'>EDITOR’S PICK</h2>
                    <p className='flex justify-center  text-[20px]'>Problems trying to resolve the conflict between </p>

                </div>
                <div className='flex justify-between mt-[100px] m-auto h-[500px] w-[1050px]  '>
                    <div className='  h-[500px] w-[510px]  '>
                        <Image src={"/assets/men.png"} alt='image' width={510}
                            height={500} />

                    </div>
                    <div className='  h-[500px] w-[240px] '>
                        <Image src={"/assets/women.png"} alt='image' width={240}
                            height={500} />

                    </div>
                    <div className='  h-[500px] w-[240px]  '>
                        <Image src={"/assets/kids.png"} alt='image' width={240}
                            height={500} />

                    </div>

                </div>

            </div>

            {/* Third page */}

            <div className='h-[1652px] pt-[100px]'>
                <div className=' text-black m-auto  '>
                    <h4 className='flex justify-center font-normal text-[20px]'>Featured Products</h4>
                    <h3 className='flex justify-center font-bold text-[24px]'>BESTSELLER PRODUCTS</h3>
                    <p className='flex justify-center font-light text-[14px]'>Problems trying to resolve the conflict between </p>
                </div>

                <div className='flex justify-between h-[615px] w-[1049px] m-auto mt-[100px]'>
                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic1.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic2.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic3.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic4.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                </div>



                <div className='flex justify-between h-[615px] w-[1049px] m-auto mt-[100px]'>
                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic5.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic6.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic7.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                    <div className='h-[427px] w-[239px]'>
                        <Image src={"/assets/pic8.png"} alt='image' width={239}
                            height={427} />
                        <div className=' space-y-3 pt-[30px] h-[188px] w-[239px]'>

                            <h5 className='flex justify-center font-bold text-[16px]'>Graphic Design</h5>
                            <p className=' flex justify-center font-normal text-[14px]'>English Department</p>
                            <h5 className=' flex justify-center space-x-3 font-bold text-[16px]'><div className='text-[#BDBDBD]'>$16.48</div><div className='text-[#23856D]'> $6.48</div></h5>
                            <Image className='m-auto' src={"/assets/icon.png"} alt='image' width={82.23}
                                height={16} />

                        </div>

                    </div>

                </div>

            </div>


            {/* fourth page */}

            <div className='flex justify-center space-x-20 h-[709px] bg-[#23856D]'>

                <div className=' mt-[150px] space-y-10 h-[509px] w-[432px] text-white'>
                    <h5 className=' text-[20px] font-thin'>SUMMER 2020</h5>
                    <h1 className=' text-[58px] font-bold'>Vita Classic Product</h1>
                    <h4 className=' text-[14px] font-light'>We know how large objects will act, We know how are objects will act, We know</h4>
                    <div className='flex justify-between h-[52px] w-[295px]'>
                    <h5 className=' text-[24px] font-bold'>$16.48</h5>
                    <button className=' h-[52px] w-[184px] bg-[#2DC071] font-medium text-[14px]'>
                        <h3>ADD TO CART</h3>
                    </button>
                    </div>
                </div>
                <Image className=' mt-[50px]'  src={"/assets/wman.png"} alt='image' width={510}
                                height={685} />

            </div>

            {/* fifth page */}



            <div className='flex justify-center space-x-20 h-[682px] '>
            <Image src={"/assets/mw.png"} alt='image' width={704}
                                height={682} />
                

            <div className=' mt-[180px] space-y-3 h-[509px] text-[#BDBDBD] w-[432px]'>
                    <h5 className=' text-[16px] font-semibold'>SUMMER 2020</h5>
                    <h1 className=' text-[50px] font-bold text-[#252B42]'>Part of the Neural 
                    Universe</h1>
                    <h4 className=' text-[20px] font-light text-[#BDBDBD]'>We know how large objects will act, We know how are objects will act, We know</h4>
                    <div className='flex justify-between h-[52px] w-[295px]'>                    
                    <button className=' h-[52px] w-[184px]  bg-[#2DC071] text-[#FFFFFF] font-medium text-[14px]'>
                        <h3>BUY NOW</h3>
                    </button>
                    <button className=' h-[52px] w-[184px] ml-[5px] border-2 border-green-400 text-[#2DC071] font-medium text-[14px]'>
                        <h3>READ MORE</h3>
                    </button>
                    </div>
                </div>

            </div>


            {/* sixth page */}

            <div className='h-[1044px]'>
                <div className=' pt-[100px] '>
                <h6 className='flex justify-center text-[#23A6F0] font-normal text-[14px]'>Practice Advice</h6>
                    <h2 className='flex justify-center font-bold text-[40px]'>Featured Posts</h2>
                    <p className='flex justify-center font-light text-[14px] text-center text-[#737373]'>Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics  </p>
                </div>

                <div className='flex justify-between w-[1080px] m-auto mt-[50px]'>
                    <Image src={"/assets/post1.png"} alt='image' width={348}
                     height={300} />
                    <Image src={"/assets/post2.png"} alt='image' width={348}
                            height={300} />
                    <Image src={"/assets/post3.png"} alt='image' width={348}
                            height={300} />        
                            

                </div>
                <div className='flex justify-between w-[1080px] m-auto '>
                    <div className=' h-[306px] w-[348px] p-[10px] space-y-[20px]'>
                        <ul className='flex justify-start text-[14px] font-normal space-x-[20px]'>
                            <li><Link className='hover:text-[#8EC2F2]' href='https://www.google.com/' target="_blank" >Google</Link></li>
                            <li><Link className=' hover:text-[#8EC2F2]' href='' target="_blank" >Trending</Link></li>
                            <li><Link className=' hover:text-[#8EC2F2]' href='' target="_blank" > New</Link></li>
                        </ul>
                        <h4 className='flex justify-start font-medium text-[20px]'>Loudest à la Madison #1 <br /> (L'integral)</h4>
                        <p className='text-[14px] font-normal text-[#737373]'>We focus on ergonomics and meeting <br />you where you work. It's only a <br /> keystroke away.</p>
                       
                        <ul className='flex justify-between w-[298px] text-[12px] text-[#737373]'>
                        <li className='flex justify-between space-x-[5px]'>
                        <Image  src={"/assets/tim.png"} alt='image' width={16}
                            height={16} /> <p>22 January 2025</p>
                        </li>
                        <li className='flex justify-between space-x-[5px]'>
                        <Image src={"/assets/com.png"} alt='image' width={16}
                            height={16} />  100 comments
                        </li>                   
                        </ul>
                        <p className='text-[14px] font-bold text-[#737373]'> Learn More</p>
                        
                        </div>
                        <div className=' h-[306px] w-[348px] p-[10px] space-y-[20px]'>
                        <ul className='flex justify-start text-[14px] font-normal space-x-[20px]'>
                            <li><Link className='hover:text-[#8EC2F2]' href='https://www.google.com/' target="_blank" >Google</Link></li>
                            <li><Link className=' hover:text-[#8EC2F2]' href='' target="_blank" >Trending</Link></li>
                            <li><Link className=' hover:text-[#8EC2F2]' href='' target="_blank" > New</Link></li>
                        </ul>
                        <h4 className='flex justify-start font-medium text-[20px]'>Loudest à la Madison #1 <br /> (L'integral)</h4>
                        <p className='text-[14px] font-normal text-[#737373]'>We focus on ergonomics and meeting <br />you where you work. It's only a <br /> keystroke away.</p>
                       
                        <ul className='flex justify-between w-[298px] text-[12px] text-[#737373]'>
                        <li className='flex justify-between space-x-[5px]'>
                        <Image  src={"/assets/tim.png"} alt='image' width={16}
                            height={16} /> <p>22 January 2025</p>
                        </li>
                        <li className='flex justify-between space-x-[5px]'>
                        <Image src={"/assets/com.png"} alt='image' width={16}
                            height={16} />  100 comments
                        </li>                   
                        </ul>
                        <p className='text-[14px] font-bold text-[#737373]'> Learn More</p>
                        
                        </div>
                        <div className=' h-[306px] w-[348px] p-[10px] space-y-[20px]'>
                        <ul className='flex justify-start text-[14px] font-normal space-x-[20px]'>
                            <li><Link className='hover:text-[#8EC2F2]' href='https://www.google.com/' target="_blank" >Google</Link></li>
                            <li><Link className=' hover:text-[#8EC2F2]' href='' target="_blank" >Trending</Link></li>
                            <li><Link className=' hover:text-[#8EC2F2]' href='' target="_blank" > New</Link></li>
                        </ul>
                        <h4 className='flex justify-start font-medium text-[20px]'>Loudest à la Madison #1 <br /> (L'integral)</h4>
                        <p className='text-[14px] font-normal text-[#737373]'>We focus on ergonomics and meeting <br />you where you work. It's only a <br /> keystroke away.</p>
                       
                        <ul className='flex justify-between w-[298px] text-[12px] text-[#737373]'>
                        <li className='flex justify-between space-x-[5px]'>
                        <Image  src={"/assets/tim.png"} alt='image' width={16}
                            height={16} /> <p>22 January 2025</p>
                        </li>
                        <li className='flex justify-between space-x-[5px]'>
                        <Image src={"/assets/com.png"} alt='image' width={16}
                            height={16} />  100 comments
                        </li>                   
                        </ul>
                        <p className='text-[14px] font-bold text-[#737373]'> Learn More</p>
                        
                        </div>        
                            

                </div>

            </div>


        </div>




    )
}

export default Shope
