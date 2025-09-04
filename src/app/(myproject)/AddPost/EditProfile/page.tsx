'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import Link from 'next/link'

export default function EditProfile() {
    return <>
        <section className='md:p-4'>
            <div className='md:shadow-md md:p-6 rounded-lg bg-white overflow-hidden'>
                <h4>Profile</h4>
                <div className='w-[9.7rem] h-[12rem] my-6 rounded-md overflow-hidden bg-red-500'>
                    <Image
                        src={user}
                        // width={150} 
                        // height={150}
                        className='w-full h-full'
                        alt="Picture of the author"
                    />
                </div>
                {/*  */}
                <div className=' w-full '>
                    <div className='flex items-center justify-between'>
                        <form className='bg--300 w-full'>
                            <div className='mb-4  w-full'>
                                <label htmlFor="full_name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Full Name*</h4></label>
                                <input type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name ..." required />
                            </div>
                            <div className='mb-4  w-full'>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Email*</h4></label>
                                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                            </div>
                            <div className=' mb-4 w-full'>
                                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Password*</h4></label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" required />
                            </div>
                            <div className='mb-4  w-full'>
                                <label htmlFor="aboutUser" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>About You</h4></label>
                                <textarea rows={4}  id="aboutUser" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required ></textarea>
                            </div>
                            
                            <button type="submit" className="mt-4 btn main-btn ">Update Profile</button>

                        </form>

                    </div>
                </div>
                
                {/*  */}


            </div>

        </section>

    </>
}
