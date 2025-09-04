'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'

export default function MyAds() {
    return <>
        <section className='p-4'>
            <div className='shadow-md p-6 rounded-lg bg-white overflow-hidden'>
                <h4>MyAds</h4>
                <div className='w-[9.7rem] h-[12rem] my-6 rounded-md overflow-hidden bg-red-500'>
                    <Image
                        src={user}
                        // width={150} 
                        // height={150}
                        className='w-full h-full'
                        alt="Picture of the author"
                    />
                </div>



            </div>

        </section>
    </>
}
