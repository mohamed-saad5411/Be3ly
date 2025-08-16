'use client'
import Image from 'next/image'
import React from 'react'
import appLogo from '../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg'
import userLogo from '../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'

export default function LatestProduct() {
    return <>
        <section className='my-8'>
            <h1 className='text-center my-3 mb-8'>LatestProduct</h1>
            <div className="container ">
                <div className="grid grid-cols-4 bg-green-">
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-3 bg-amber- rounded-md ">
                        <div className='rounded-md bg-white shadow-md overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    src={appLogo}
                                    // width={150}
                                    // height={150}
                                    className='rounded-t-md'
                                    alt="Picture of the author"
                                />
                                <div className='flex items-center bottom-2 left-3  absolute'>
                                    <div className='h-[2rem] me-1.5  w-[2rem]'>
                                        <Image
                                            src={userLogo}
                                            
                                            className='rounded-full w-full h-full '
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className='text-white'>ahmed zaki</p>
                                </div>
                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                        <i className="fa-regular fa-heart text-gray-500 fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 pt-3'>
                                <div className='mb-2.5'>
                                    <p>Vehicles</p>
                                    <h4>BMW 5series GT car</h4>
                                    <h2>Price : <span>500</span>$</h2>
                                </div>
                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                    <p className=''><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
