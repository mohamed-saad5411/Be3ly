'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import loginLogo from '../../../../public/assets/img/login logo.jpg'
import Link from 'next/link'
import { useFormik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/navigation';



export default function Register() {
    const [isLoading, setisLoading] = useState(false)
    let router = useRouter()
    async function handleRegister(values) {
        setisLoading(true)
        let { data } = await axios.post('https://e-commerce-be-v2.vercel.app/api/v1/auth/signup', values)
        if (data?.Message == "user is registered successfully") {
            router.push('/Login')
            setisLoading(false)
            console.log(data);

        }
    }

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: handleRegister
    })

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
                            <h2 className=''>Sign up</h2>
                            <div className=''>
                                <div className=' w-full my-4 flex items-center justify-between '>
                                    <button className='md:btn btn-res w-[48%] md:secondary-btn'>
                                        <div className='flex items-center justify-between'>
                                            <i className="fa-brands fa-google me-1"></i>
                                            <p>Sign up with Google</p>
                                        </div>
                                    </button>
                                    <button className='md:btn btn-res w-[48%] md:secondary-btn'>
                                        <div className='flex items-center justify-between'>
                                            <i className="fa-brands me-1 fa-square-facebook"></i>
                                            <p>Sign up with Facebook</p>
                                        </div>
                                    </button>
                                </div>
                                <div className=' w-full my-4 '>
                                    <div className='flex items-center justify-between'>
                                        <form onSubmit={formik.handleSubmit} className='bg--300 w-full'>
                                            <div className='mb-4  w-full'>
                                                <label for="full_name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Full Name</h4></label>
                                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="full_name" name='name' value={formik.values.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name ..." required />
                                            </div>
                                            <div className='mb-4  w-full'>
                                                <label for="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Email</h4></label>
                                                <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                                            </div>
                                            <div className=' mb-4 w-full'>
                                                <label for="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Password</h4></label>
                                                <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" required />
                                            </div>
                                            {/* <div className=' w-full'>
                                                <label for="confirmPassword" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"><h4>Confirm Password</h4></label>
                                                <input  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" required />
                                            </div> */}
                                            <div className='mb-8 bg- flex items-center w-full'>
                                                <input type="checkbox" id="checkbox" />
                                                <label for="checkbox" className="block ms-1 text-sm font-medium text-gray-900 dark:text-white">Keep me login</label>
                                            </div>
                                            {/* <button type="submit" className="btn main-btn w-full">Sign up</button> */}
                                            {isLoading ? <button type='' className='btn main-btn w-full'><i className="fa-solid fa-lg fa-circle-notch fa-spin"></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn main-btn w-full'>Sign up</button>}
                                        </form>

                                    </div>
                                </div>
                                <div className=' w-full mt-8 '>
                                    <p>Aready have an account?</p>
                                    <Link href={'/Login'} className='btn mt-1 w-full secondary-btn'>
                                        Login
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


