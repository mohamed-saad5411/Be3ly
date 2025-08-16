'use client'
import Image from 'next/image'
import React from 'react'
import clickLogo from '../../../../public/assets/img/click logo.png'
import securityLogo from '../../../../public/assets/img/security logo.png'
import priceLogo from '../../../../public/assets/img/price logo.png'
import whyLogo from '../../../../public/assets/img/f548660ec27ca1cecf4fb8ff726d51c31faefdbb.jpg'

export default function WhyChoose() {
    return <>
        <section className='my-18'>
            <div className="container ">
                <div className="grid lg:grid-cols-2 justify-center items-center bg-green-">

                    <div className="col-span-1 ">
                        <div className='w-[90%] md:w-[80%] md:m-auto lg:m-0 lg:w-[75%] lg:rounded-tr-[7rem] rounded-tr-[4rem] bg-[#B4BABE80] h-[100%]'>
                            <div className=''>
                                <Image
                                    src={whyLogo}
                                    // width={150} t 2047
                                    // height={150} l 80
                                    className='lg:rounded-tr-[7rem] rounded-tr-[4rem] lg:translate-10 translate-7 '
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 mt-14 lg:mt-0 bg--200 ">
                        <div className='container'>
                            <h2 className='mb-4'>Why Choose  <span>Be3ly</span></h2>
                            <div className='sm:flex sm:items-center grid grid-cols-4 items-center'>
                                <div className='w-[3rem] col-span-1  h-[3rem] me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                                    <Image
                                        src={securityLogo}
                                        // width={150}
                                        // height={150}
                                        className='w-1/2 h-1/2'
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className='col-span-3'>
                                    <h4>Security</h4>
                                    <p>We provide a security system to protect your data.</p>
                                </div>
                            </div>
                            <div className='sm:flex sm:items-center grid grid-cols-4 my-2 items-center'>
                                <div className='w-[3rem] col-span-1 h-[3rem] me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                                    <Image
                                        src={priceLogo}
                                        // width={150}
                                        // height={150}
                                        className='w-1/2 h-1/2'
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className='col-span-3'>
                                    <h4>Price</h4>
                                    <p>Buy and sell anything at your preferred price.</p>
                                </div>
                            </div>
                            <div className='sm:flex sm:items-center grid grid-cols-4 items-center'>
                                <div className='w-[3rem] col-span-1 h-[3rem] me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                                    <Image
                                        src={clickLogo}
                                        // width={150}
                                        // height={150}
                                        className='w-1/2 h-1/2'
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className='col-span-3'>
                                    <h4>Easy way</h4>
                                    <p>We make it simple and easy to meet all of your needs.</p>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </section>
    </>
}
