'use client'
import Image from 'next/image'
import React from 'react'
import mainLogo from '../../../../public/assets/img/head logo.png'
import resLogo from '../../../../public/assets/img/head res logo.png'

export default function Header() {
    return <>
        <header className='my-10 hidden md:block'>
            <div className="container">
                <div className="grid grid-cols-2 bg-white overflow-hidden items-center ">

                    <div className="col-span-1  w-[454px] lg:mt-0 ">
                        <div className='container'>
                            {/* <h2 className='text-3xl text-[#09537C]'>Be3ly</h2> */}
                            <h6 className='m-0 mt-2 mb-3 text-3xl'>Buy, Sell or Advertise anything <span>online</span></h6>
                            <p className='my-8 parag-18'>Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more.</p>
                            <div className=''>
                                <button className='btn main-btn me-2'>Buy Now</button>
                                <button className='btn secondary-btn'>Learn More</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-1 w-[768px] translate-x-[-5rem] text-start ">
                        <div className=' '>
                            <div className=''>
                                <Image
                                    src={mainLogo}
                                    // width={150} 
                                    // height={150}
                                    className=''
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        <header className='mt-6 md:hidden'>
            <div className="container">
                <div className="grid grid-cols-2 bg-gray-100 shadow-md p-3 rounded-md overflow-hidden items-center -green-200">

                    <div className="col-span-1-400  lg:mt-0 ">
                        <div className='container'>
                            <h2 className='h2-res text-[#09537C]'>Be3ly</h2>
                            <h3 className='h3-res mt-2 mb-3 '>Buy, Sell or Advertise anything <span>online</span></h3>
                            <div className=''>
                                <button className='btn-res w-[80%]'>Buy Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-1 text-start ">
                        <div className=' '>
                            <div className=''>
                                <Image
                                    src={resLogo}
                                    // width={150} 
                                    // height={150}
                                    className=''
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </header>
    </>
}
