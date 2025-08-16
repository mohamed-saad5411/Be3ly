'use client'

import Link from 'next/link'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { useRouter } from 'next/navigation';
// import { useAppContext } from '@/context'


export default function Register() {
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

    {/* ================ */}
    <section className='w-full h-[80vh] my-4 flex justify-center items-center'>
      <div className='w-11/12 rounded-lg bg-[#5a4e4e] text-white p-5 md:w-1/2'>
        <form>
          <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-5">
              <h2 className="text-3xl pb-5 text-center font-bold ">Register</h2>
              <div className="">

                <div className="mt-4 w-full">
                  <label htmlFor="userName" className="block text-sm/6 font-medium ">
                    Your Name
                  </label>
                  <div className="">
                    <input
                      id="userName"
                      name="userName"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <label htmlFor="userEmail" className="block text-sm/6 font-medium ">
                    Your Email
                  </label>
                  <div className="">
                    <input
                      id="userEmail"
                      name="userEmail"
                      type="email"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <label htmlFor="userPassword" className="block text-sm/6 font-medium ">
                    Your Password
                  </label>
                  <div className="">
                    <input
                      id="userPassword"
                      name="userPassword"
                      type="password"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <label htmlFor="userPhone" className="block text-sm/6 font-medium ">
                    Your Phone
                  </label>
                  <div className="">
                    <input
                      id="userPhone"
                      name="userPhone"
                      type="tel"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
              Register
            </button>
          </div>
          <p className='text-blue-700 text-end text-sm underline'><Link href={'/login'}>have account ? Go To Login</Link></p>
        </form>
      </div>
    </section>
    {/* ================ */}


  </>


}
