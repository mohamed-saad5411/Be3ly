'use client'
import Image from 'next/image'
import React from 'react'
import mainLogo from '../../../../public/assets/img/head logo.png'
import resLogo from '../../../../public/assets/img/head res logo.png'
import Link from 'next/link'

export default function UserInfo() {
    return <>
        <div className=' w-full my-5 '>
            <div className='flex items-center justify-between'>
                <form className='bg--300 w-full'>
                    <div className='mb-4  w-full'>
                        <label htmlFor="userMobileNumber" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Mobile Number*</h4></label>
                        <input type="number" id="userMobileNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Mobile Number" required />
                    </div>
                    <div className='mb-4  w-full'>
                        <label htmlFor="userAddress" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Address*</h4></label>
                        <input type="text" id="userAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Address" required />
                    </div>
                    <div className='mb-4  w-full'>
                        <label htmlFor="Country" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Country*</h4></label>
                        <input type="text" id="Country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select a Country" required />
                    </div>
                    


                    <Link href={'/AddPost/PostAd/AdDetails'}><button type="submit" className="btn mt-3 secondary-btn me-2">Previous Step</button>
                    </Link>
                    <button type="submit" className="btn mt-3 main-btn ">Publish</button>
                    
                </form>

            </div>
        </div>

    </>
}
