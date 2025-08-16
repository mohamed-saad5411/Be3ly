'use client'

import Link from 'next/link'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { useRouter } from 'next/navigation';
// import { useAppContext } from '@/context'


export default function Login() {
    //   const { setuserLogin } = useAppContext()

    //   const [isLoading, setisLoading] = useState(false)
    let router = useRouter()

    async function handleLogin(values) {
        // setisLoading(true)
        // let { data } = await axios.post('https://e-commerce-be-v2.vercel.app/api/v1/auth/signin', values)
        // if (data?.Message == "Logged successfully") {
        //   localStorage.setItem('userToken',data?.token)
        //   setuserLogin(data?.token)
        //   router.push('/')
        //   setisLoading(false)
        // }
        console.log('hi');

    }

    let formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: handleLogin
    })

    return <>

        {/* ================ */}
        <section className='w-full h-[80vh] flex justify-center items-center'>
            <div className='w-11/12 rounded-lg bg-[#5a4e4e] text-white p-5 md:w-1/2'>
                <form>
                    <div className="space-y-12">

                        <div className="border-b border-gray-900/10 pb-5 mb-1">
                            <h2 className="text-3xl pb-5 text-center font-bold">Login</h2>
                            <div className="mt-">

                                <div className="w-full mt-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium ">
                                        Email address
                                    </label>
                                    <div className="">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <label htmlFor="password" className="block text-sm/6 font-medium">
                                        Password
                                    </label>
                                    <div className="">
                                        <input
                                            id="password"
                                            name="password"
                                            type="text"
                                            autoComplete="password"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="btn w-full"
                        >
                            Login
                        </button>
                    </div>
                    <p className='text-blue-700 text-end text-sm underline'><Link href={'/register'}>Don't have account ? Register Now</Link></p>
                </form>
            </div>
        </section>
        {/* ================ */}


    </>


}

{/* <section className=''>
      <form onSubmit={formik.handleSubmit} className=''>
        <div className=''>
          <label htmlFor="email" className=''>User E-mail ...</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" id='email' name='email' value={formik.values.email} className='' />
        </div>
        <div className=''>
          <label htmlFor="password" className=''>User Password ...</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id='password' name='password' value={formik.values.password} className='' />
        </div>
        <button disabled={!(formik.isValid && formik.dirty)} type='submit' className=''>Login</button>
        {isLoading ? <button type='' className=''><i class="fa-solid fa-lg fa-circle-notch fa-spin"></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className=''>Login</button>}


      </form>
      <div className=''><Link href={'/register'}>Cant't have account? Sign Up Free</Link></div>
    </section> */}

