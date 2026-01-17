'use client'
import appLogo from '../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg'
import userLogo from '../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'


export default function LatestProduct() {
    const data: { id: number }[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 9 }]
    // const [allCategories, setallCategories] = useState([])
    const [allCategories, setallCategories] = useState<any[]>([])
    const [isLoading, setisLoading] = useState(false)

    // async function getAllcategories() {
    //     setisLoading(true)
    //     let { data } = await axios.get(`https://website-production-279d.up.railway.app/api/v1/categories`)
    //     if (data.success == true) {
    //         setallCategories(data.data)
    //         setisLoading(false)
    //         console.log(data.data);

    //     }
    // }

    async function getAllcategories() {
        try {
            setisLoading(true)
            const { data } = await axios.get(
                'https://website-production-279d.up.railway.app/api/v1/categories'
            )

            if (data.success) {
                setallCategories(data.data)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setisLoading(false)
        }
    }


    useEffect(() => {
        // console.log(params);

        getAllcategories()

    }, [])

    return <>
        {/* local response */}
        <section className='my-8'>
            <h2 className='text-center mb-3 h-main-item'>Latest Product</h2>
            {isLoading ?<>
            <div className=' text-5xl my-30 text-center '><i className="fa-solid fa-spinner fa-spin"></i></div>
            </>
            :
                <div className="container bg--300 text-center">
                    <div className="grid lg:grid-cols-3 text-start xl:grid-cols-4 justify-center bg-green-">
                        {allCategories.map((category: any) =>

                            <div key={category.id} className="col-span-1 p-3 bg-amber- rounded-md ">
                                <div className='rounded-md overflow-hidden bg-white shadow-md'>
                                    <Link href={'/Details'}>
                                        <div className='relative overflow-hidden'>
                                            {/* <Image
                                            src={category?.image_url}
                                            width={150}
                                            height={150}
                                            className='rounded-t-md hover:scale-[1.1] transition-all duration-600'
                                            alt="Picture of the author"
                                        /> */}
                                            <div className="relative w-full h-[12rem] overflow-hidden">
                                                <Image
                                                    src={category?.image_url || appLogo}
                                                    alt="category"
                                                    fill
                                                    className="object-cover rounded-t-md hover:scale-[1.1] transition-all duration-600"
                                                />
                                            </div>

                                            {/* <div className='flex items-center bottom-2 left-3  absolute'>
                                            <div className='h-[2rem] me-1.5  w-[2rem]'>
                                                <Image
                                                    src={userLogo}
                                                    className='rounded-full w-full h-full '
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <p className='text-white'>ahmed zaki</p>
                                        </div> */}
                                            <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                                <div className='h-[3rem] flex items-center justify-center cursor-pointer  w-[3rem]'>
                                                    <i className="fa-regular fa-heart hover:text-[#09537C] text-gray-500 fa-xl"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-3 pt-3'>
                                            <div className='mb-2.5'>
                                                <p className='p-slider'>{(category.name.en || 'Vehicles').split(' ').splice(0, 2).join(' ')}</p>
                                                <p className='p-product-card'>{(category.description.en || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quisquam!').split(' ').splice(0, 2).join(' ')} ...</p>
                                                <h5 className='h-slider'>Price : <span>500</span>$</h5>
                                            </div>
                                            <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                                <p className='p-location-card'><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                                <p className='p-location-card'><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                    <button className='btn main-btn mt-6 '>View More</button>
                </div>
            }
        </section>

        {/* api response */}

        {/* <section className='my-8'>
            <h2 className='text-center mb-3 h-main-item'>Latest Product</h2>
            <div className="container bg--300 text-center">
                <div className="grid lg:grid-cols-3 text-start xl:grid-cols-4 justify-center bg-green-">
                    {allCategories.map((category: any) =>

                        <div key={category.id} className="col-span-1 p-3 bg-amber- rounded-md ">
                            <div className='rounded-md overflow-hidden bg-white shadow-md'>
                                <Link href={'/Details'}>
                                    <div className='relative overflow-hidden'>
                                      
                                        {category.image_url == null ? <Image
                                            src={appLogo}
                                            
                                            className='rounded-t-md hover:scale-[1.1] transition-all duration-600'
                                            alt="Picture of the author"
                                        /> :
                                            <img src={category.image_url} className='rounded-t-md hover:scale-[1.1] transition-all duration-600 w-full max-h-[12rem]' />

                                        }
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
                                                <i className="fa-regular fa-heart hover:text-[#09537C] text-gray-500 fa-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-3 pt-3'>
                                        <div className='mb-2.5'>
                                            <p className='p-slider'>{(category.name).split(' ').splice(0,2).join(' ')}</p>
                                            <p className='p-product-card'>{(category.description).split(' ').splice(0,5).join(' ')} ...</p>
                                            <h5 className='h-slider'>Price : <span>500</span>$</h5>
                                        </div>
                                        <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px] '>
                                            <p className='p-location-card'><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                            <p className='p-location-card'><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
                <button className='btn main-btn mt-6 '>View More</button>
            </div>
        </section> */}
    </>
}
