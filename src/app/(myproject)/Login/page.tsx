'use client'

import Image from 'next/image'
import React, { useContext, useState } from 'react'
import loginLogo from '../../../../public/assets/img/login logo.jpg'
import Link from 'next/link'
import { useFormik, FormikHelpers } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/Context/UserContext'

// 👇 Type for form values
interface LoginFormValues {
    email: string;
    password: string;
}

interface LoginResponse {
    success: boolean;
    data: {
        token: string;
        [key: string]: any;
    };
    [key: string]: any;
}

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const { setUserData } = useContext(UserContext)
    const router = useRouter()

    // 👇 handle login
    async function handleLogin(values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>) {
        setIsLoading(true)
        try {
            const { data } = await axios.post < LoginResponse > (
                'https://website-production-279d.up.railway.app/api/v1/auth/login',
                values
            )

            if (data?.success) {
                localStorage.setItem("userToken", data.data.token)
                setUserData(data?.data)
                // console.log(UserContext);
                
                router.push('/')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const formik = useFormik < LoginFormValues > ({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: handleLogin
    })

    return (
        <section className='my-18'>
            <div className="container">
                <div className="grid lg:grid-cols-2 justify-center items-center">

                    {/* Left side image */}
                    <div className="col-span-1 hidden md:block">
                        <div className='w-[90%] md:w-[80%] md:m-auto lg:m-0 lg:w-[580px] lg:rounded-tr-[7rem] rounded-br-lg rounded-tr-[4rem] bg-[#B4BABE80] h-[510px] relative'>
                            <Image
                                src={loginLogo}
                                alt="Login Logo"
                                className='lg:rounded-tr-[7rem] rounded-tr-[4rem] lg:translate-y-13 translate- '
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="col-span-1 md:mt-14 lg:mt-0">
                        <div className='container bg-white p-6 rounded-md shadow-md'>
                            <h6 className='head-24'>Login</h6>

                            {/* Social buttons */}
                            <div className='w-full my-4 flex items-center justify-between'>
                                <button type="button" className='md:btn w-[48%] btn-res md:secondary-btn'>
                                    <div className='flex items-center justify-between'>
                                        <i className="fa-brands fa-google me-1"></i>
                                        <p>Login with Google</p>
                                    </div>
                                </button>
                                <button type="button" className='md:btn w-[48%] btn-res md:secondary-btn'>
                                    <div className='flex items-center justify-between'>
                                        <i className="fa-brands me-1 fa-square-facebook"></i>
                                        <p>Login with Facebook</p>
                                    </div>
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={formik.handleSubmit} className='bg--300 w-full my-4'>
                                <div className='mb-4 w-full'>
                                    <label htmlFor="email" className="block mb-1 head-16 text-gray-900 dark:text-white">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email ..."
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                <div className='mb-4 w-full'>
                                    <label htmlFor="password" className="block mb-1 head-16 text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password ..."
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                <div className='mb-8 flex items-center w-full'>
                                    <input type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox" className="block ms-1 text-sm font-medium text-gray-900 dark:text-white">Keep me login</label>
                                </div>

                                {isLoading
                                    ? <button type="button" className='btn main-btn w-full'>
                                        <i className="fa-solid fa-lg fa-circle-notch fa-spin"></i>
                                    </button>
                                    : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className='btn main-btn w-full'>Login</button>
                                }

                                <div className='w-full text-end mt-2'>
                                    <Link href='/' className='text-sm text-center font-medium'>Did you forget your password?</Link>
                                </div>
                            </form>

                            {/* Register */}
                            <div className='w-full mt-8'>
                                <p>Not Registered Yet?</p>
                                <Link href='/Register' className='btn mt-1 w-full secondary-btn'>
                                    Create an account
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}



















// {'use client'

// import Image from 'next/image'
// import React, { useContext, useState } from 'react'
// import loginLogo from '../../../../public/assets/img/login logo.jpg'
// import Link from 'next/link'
// import { useFormik } from 'formik'
// import axios from 'axios'
// import { useRouter } from 'next/navigation';
// import { UserContext } from '@/app/Context/UserContext'


// export default function Login() {
//     const [isLoading, setisLoading] = useState(false)
//     const { setuserData } = useContext(UserContext)

//     let router = useRouter()
//     async function handleLogin(values) {
//         setisLoading(true)
//         let { data } = await axios.post('https://website-production-279d.up.railway.app/api/v1/auth/login', values)
//         if (data?.success) {
//             console.log(data);
//             localStorage.setItem("userToken", data?.data.token)
//             setuserData(data.data)
//             router.push('/')
//             setisLoading(false)

//         }
//     }

//     let formik = useFormik({
//         initialValues: {
//             email: "",
//             password: ""
//         },
//         onSubmit: handleLogin
//     })

//     return <>
//         <section className='my-18 '>
//             <div className="container ">
//                 <div className="grid lg:grid-cols-2 justify-center items-center ">

//                     <div className="col-span-1 hidden md:block">
//                         <div className='w-[90%] md:w-[80%] md:m-auto lg:m-0 lg:w-[580px] lg:rounded-tr-[7rem] rounded-br-lg rounded-tr-[4rem] bg-[#B4BABE80] h-[510px]'>
//                             <div className=' w-[614px]'>
//                                 <Image
//                                     src={loginLogo}
//                                     // width={150} t 2047
//                                     // height={150} l 80
//                                     className='lg:rounded-tr-[7rem] rounded-tr-[4rem] lg:translate-y-13 translate- '
//                                     alt="Picture of the author"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-span-1  md:mt-14 lg:mt-0 ">
//                         <div className='container bg-white p-6 rounded-md shadow-md'>
//                             <h6 className='head-24'>Login</h6>
//                             <div className=''>
//                                 <div className=' w-full my-4 flex items-center justify-between '>
//                                     <button className='md:btn w-[48%] btn-res md:secondary-btn'>
//                                         <div className='flex items-center justify-between'>
//                                             <i className="fa-brands fa-google me-1"></i>
//                                             <p>Login with Google</p>
//                                         </div>
//                                     </button>
//                                     <button className='md:btn w-[48%] btn-res md:secondary-btn'>
//                                         <div className='flex items-center justify-between'>
//                                             <i className="fa-brands me-1 fa-square-facebook"></i>
//                                             <p>Login with Facebook</p>
//                                         </div>
//                                     </button>
//                                 </div>
//                                 <div className=' w-full my-4 '>
//                                     <div className='flex items-center justify-between'>
//                                         <form onSubmit={formik.handleSubmit} className='bg--300 w-full'>
//                                             <div className='mb-4  w-full'>
//                                                 <label for="email" class="block mb-1 head-16 text-gray-900 dark:text-white">Email</label>
//                                                 <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email ..." required />
//                                             </div>
//                                             <div className='  w-full'>
//                                                 <label for="password" class="block mb-1 head-16 text-gray-900 dark:text-white">Password</label>
//                                                 <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password ..." required />
//                                             </div>
//                                             <div className='mb-8 bg- flex items-center w-full'>
//                                                 <input type="checkbox" id="checkbox" />
//                                                 <label for="checkbox" class="block ms-1 text-sm font-medium text-gray-900 dark:text-white">Keep me login</label>
//                                             </div>
//                                             {/* <button type="submit" class="btn main-btn w-full">Login</button> */}
//                                             {isLoading ? <button type='' className='btn main-btn w-full'><i className="fa-solid fa-lg fa-circle-notch fa-spin"></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn main-btn w-full'>Login</button>}

//                                             <div className='w-full text-end'>
//                                                 <Link href={'/'} className='text-sm text-center font-medium'>Did you forget your password?</Link>
//                                             </div>
//                                         </form>

//                                     </div>
//                                 </div>
//                                 <div className=' w-full mt-8 '>
//                                     <p>Not Registered Yet?</p>
//                                     <Link href={'/Register'} className='btn mt-1 w-full secondary-btn'>
//                                         Create an account
//                                     </Link>

//                                 </div>
//                             </div>


//                         </div>
//                     </div>



//                 </div>
//             </div>
//         </section>

//     </>


// }


// }