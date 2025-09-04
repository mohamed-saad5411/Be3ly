'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import logo from '../../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg'
import Link from 'next/link'


export default function Messages() {
    const data: { id: number }[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 9 }]

    return <>
        <section className='p-'>
            <div className='shadow-md p-6 rounded-e-lg bg-white overflow-hidden'>
                <div className='flex items-center border-b-1 border-gray-300 pb-2'>
                    <div className='w-[2.5rem] h-[2.5rem] me-3 rounded-full overflow-hidden bg-red-500'>
                        <Image
                            src={user}
                            // width={150} 
                            // height={150}
                            className='w-full h-full'
                            alt="Picture of the author"
                        />
                    </div>
                    <h6>ahmed</h6>
                </div>

                <div className='grid grid-cols-10 items-baseline-last bg--400  p-2 my-4'>
                    <div className='w-[2rem] translate-y-3 col-span-1 h-[2rem] rounded-full overflow-hidden bg-amber-500'>
                        <Image
                            src={user}
                            // width={150} 
                            // height={150}
                            className='w-full  h-full'
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='bg-[#f8f8f8] p-2 col-span-9 rounded-md rounded-bl-none'>
                        <p>Lorem ipsum dolor elit. Quis, laboriosam! Aliquid sequi tenetur ab quos nulla doloremque voluptatem fugiat rem.</p>
                        <p className='text-[#09537C] pt-3'>9:45 PM</p>
                    </div>
                </div>
                <div className='grid grid-cols-10 items-baseline-last bg--400  p-2 my-4'>
                    <div className='bg-[#f8f8f8] p-2 col-span-9 rounded-md rounded-br-none'>
                        <p>Lorem ipsum dolor elit. Quis, laboriosam! Aliquid sequi tenetur ab quos nulla doloremque voluptatem fugiat rem.</p>
                        <p className='text-[#09537C] pt-3'>9:45 PM</p>
                    </div>
                    <div className='w-[2rem] translate-y-3 col-span-1 ms-3 h-[2rem] rounded-full overflow-hidden bg--500'>
                        <Image
                            src={user}
                            // width={150} 
                            // height={150}
                            className='w-full h-full'
                            alt="Picture of the author"
                        />
                    </div>

                </div>

                <div className='grid grid-cols-10 items-baseline-last bg--400  p-2 my-4'>
                    <div className='w-[2rem] translate-y-3 col-span-1 h-[2rem] rounded-full overflow-hidden bg-amber-500'>
                        <Image
                            src={user}
                            // width={150} 
                            // height={150}
                            className='w-full  h-full'
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='bg-[#f8f8f8] p-2 col-span-9 rounded-md rounded-bl-none'>
                        <p>Lorem ipsum dolor elit. Quis, laboriosam! Aliquid sequi tenetur ab quos nulla doloremque voluptatem fugiat rem.</p>
                        <p className='text-[#09537C] pt-3'>9:45 PM</p>
                    </div>
                </div>
                <div className='grid grid-cols-10 items-baseline-last bg--400  p-2 my-4'>
                    <div className='bg-[#f8f8f8] p-2 col-span-9 rounded-md rounded-br-none'>
                        <p>Lorem ipsum dolor elit. Quis, laboriosam! Aliquid sequi tenetur ab quos nulla doloremque voluptatem fugiat rem.</p>
                        <p className='text-[#09537C] pt-3'>9:45 PM</p>
                    </div>
                    <div className='w-[2rem] translate-y-3 col-span-1 ms-3 h-[2rem] rounded-full overflow-hidden bg--500'>
                        <Image
                            src={user}
                            // width={150} 
                            // height={150}
                            className='w-full h-full'
                            alt="Picture of the author"
                        />
                    </div>

                </div>


                <div className='bg--200 flex justify-between border-2 rounded-md border-gray-100 items-center mt-3 p-4'>
                    <div className=' cursor-pointer h-[2rem] w-[2rem] rounded-full bg-[#1ca499]/15 flex items-center justify-center'>
                        <i className="fa-solid fa-image text-[#09537C] "></i>
                    </div>
                    <input type="text" placeholder="Type your message here" className="input border-0 w-ful shadow-s" />
                    <div className=' cursor-pointer h-[2.5rem] w-[2.5rem] rounded-full bg-[#09537C] flex items-center justify-center'>
                        <i className="fa-solid fa-paper-plane text-white "></i>
                    </div>
                </div>
            </div>


        </section>

    </>
}
