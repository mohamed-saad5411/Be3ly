'use client'

import Image from 'next/image'
import React from 'react'
import loginLogo from '../../../../public/assets/img/login logo.jpg'
import Link from 'next/link'



export default function Login() {



    return <>
        <section className='my-18 '>
            <div className="container ">
                <div className="grid lg:grid-cols-2 justify-center items-center ">

                    <div className="col-span-1 hidden md:block">
                        <div className='w-[90%] md:w-[80%] md:m-auto lg:m-0 lg:w-[580px] lg:rounded-tr-[7rem] rounded-br-lg rounded-tr-[4rem] bg-[#B4BABE80] h-[510px]'>
                            <div className=' w-[614px]'>
                                <Image
                                    src={loginLogo}
                                    // width={150} t 2047
                                    // height={150} l 80
                                    className='lg:rounded-tr-[7rem] rounded-tr-[4rem] lg:translate-y-13 translate- '
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1  md:mt-14 lg:mt-0 ">
                        <div className='container bg-white p-6 rounded-md shadow-md'>
                            <h2 className=''>Login</h2>
                            <div className=''>
                                <div className=' w-full my-4 flex items-center justify-between '>
                                    <button className='md:btn w-[48%] btn-res md:secondary-btn'>
                                        <div className='flex items-center justify-between'>
                                            <i className="fa-brands fa-google me-1"></i>
                                            <p>Login with Google</p>
                                        </div>
                                    </button>
                                    <button className='md:btn w-[48%] btn-res md:secondary-btn'>
                                        <div className='flex items-center justify-between'>
                                            <i className="fa-brands me-1 fa-square-facebook"></i>
                                            <p>Login with Facebook</p>
                                        </div>
                                    </button>
                                </div>
                                <div className=' w-full my-4 '>
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
                                    
                                </div>
                            </div>


                        </div>
                    </div>



                </div>
            </div>
        </section>

    </>


}


