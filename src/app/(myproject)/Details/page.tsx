'use client'

import Image from 'next/image'
import React from 'react'
import loginLogo from '../../../../public/assets/img/login logo.jpg'
import Link from 'next/link'



export default function Details() {



    return <>
        <section className='bg--600 '>
            <div className=" bg--400 container p-8">
                <div className="grid lg:grid-cols-2 bg-white rounded-md shadow-md p-3 justify-center items- ">
                    <div className="col-span-1 hidden p-3 md:block bg--700">
                        <div className='w-full rounded-md overflow-hidden md:m-auto '>
                            <Image
                                src={loginLogo}
                                // width={150} t 2047
                                // height={150} l 80
                                className=''
                                alt="Picture of the author"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 bg- p-3 md:mt-14 lg:mt-0 ">
                        <div className=' bg-'>
                            <div className='border-b-1 mb-5 border-gray-300/50 pb-5'>
                                <div className=' w-full flex items-center justify-between '>
                                    <h3 className=''>iPhone 11 Pro Max</h3>
                                    <div className='bg-red-'>
                                        <i className="fa-md text-[#666666] me-4 fa-solid fa-share-nodes"></i>
                                        <i className="fa-md text-[#666666]  fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <p className='p-sm text-gray-400'>Alex , Egypt</p>
                                <h5 className='font- mt-3'><span>7000 </span>EGP</h5>
                            </div>

                            <div className=' pb-5'>
                                <div className=' w-full'>
                                    <h3 className='mb-2'>Information</h3>
                                    <ul className='list-disc px-6'>
                                        <li className='font-bold text-[14px] my-1'>Condition : <span className='font-light'>Used</span></li>
                                        <li className='font-bold text-[14px] my-1'>Brand : <span className='font-light'>Apple</span></li>
                                        <li className='font-bold text-[14px] my-1'>Model : <span className='font-light'>Mackbook Pro</span></li>

                                    </ul>
                                </div>
                            </div>

                            <div className=' bg--500 flex justify-between items-center'>
                                <Link href={'/Contact'} className='btn main-btn w-[85%]'>
                                    <i className="fa-solid fa-sm fa-phone"></i>Call Now
                                </Link>
                                <button className='btn secondary-btn w-[1px]'>
                                    <i className="fa-regular text-[#09537C]  nav-icon font-extralight fa-comment-dots"></i>

                                </button>
                            </div>


                            {/* <div className=' w-full my-4 '>
                                <div className='flex items-center justify-between'>
                                    <form className='bg--300 w-full'>
                                        <div className='mb-4  w-full'>
                                            <label for="first_name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Email</h4></label>
                                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email ..." required />
                                        </div>
                                        <div className='  w-full'>
                                            <label for="password" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Password</h4></label>
                                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password ..." required />
                                        </div>
                                        <div className='mb-8 bg- flex items-center w-full'>
                                            <input type="checkbox" id="checkbox" />
                                            <label for="checkbox" class="block ms-1 text-sm font-medium text-gray-900 dark:text-white">Keep me login</label>
                                        </div>
                                        <button type="submit" class="btn main-btn w-full">Login</button>
                                        <div className='w-full text-end'>
                                            <Link href={'/'} className='text-sm text-center font-medium'>Did you forget your password?</Link>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className=' w-full mt-8 '>
                                <p>Not Registered Yet?</p>
                                <Link href={'/Register'} className='btn mt-1 w-full secondary-btn'>
                                    Create an account
                                </Link>

                            </div> */}


                        </div>
                    </div>



                </div>
            </div>
        </section>

    </>


}


