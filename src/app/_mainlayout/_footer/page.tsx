'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import appLogo from '../../../../public/assets/img/app store.png'

export default function Footer() {



  return <>
    {/* bg-base-200  */}
    <footer className="footer grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 bg-white sm:footer-horizontal text-base-content p-10">
      <aside className='bg--300  sm:col-span-1 md:col-span-2'>
        <div className="flex shrink-0 items-center bg--500 ">
          <h1 className=' top-0 left-0 logo-24 ms-7 md:ms-0'><Link href={'/'}>Be3ly</Link></h1>
        </div>
        <p>
          Follow Us :
        </p>
        <div className='flex justify-between'>
          <div className='w-[2rem] me-2 cursor-pointer hover:text-[#1877F2] hover:bg-white transition-all duration-400 h-[2rem] bg-[#1877F2] text-white flex items-center justify-center rounded-full'>
            <i className="fa-brands fa-xl fa-facebook"></i>
          </div>
          <div className='w-[2rem] me-2 cursor-pointer hover:text-[#E1306C] hover:bg-white transition-all duration-400 h-[2rem] bg-[#E1306C] text-white flex items-center justify-center rounded-full'>
            <i className="fa-brands fa-xl fa-instagram"></i>
          </div>
        </div>
      </aside>
      <nav className='bg--400 sm:col-span-1 '>
        <h6 className=" parag-20">Categories</h6>
        <div className='flex flex-col mt-2'>
          <Link href={'/Vehicle'} className="my-1 hover:text-[#09537C] transition-all duration-400">Vehicles</Link>
          <Link href={'/Electronics'} className="my-1 hover:text-[#09537C] transition-all duration-400">Electronics</Link>
          <Link href={'/Watches'} className="my-1 hover:text-[#09537C] transition-all duration-400">Watches</Link>
          <Link href={'/Furniture'} className="my-1 hover:text-[#09537C] transition-all duration-400">Furniture</Link>
          <Link href={'/Jobs'} className="my-1 hover:text-[#09537C] transition-all duration-400">Jobs</Link>
          <Link href={'/Clothes'} className="my-1 hover:text-[#09537C] transition-all duration-400">Clothes</Link>
          <Link href={'/'} className="my-1 hover:text-[#09537C] transition-all duration-400">All Categories</Link>
        </div>

      </nav>
      <nav className='bg--600 sm:col-span-1 '>
        <h6 className="parag-20">Quick links</h6>
        <div className='flex flex-col mt-2'>
          <Link href={'/Contact'} className="my-1 hover:text-[#09537C] transition-all duration-400">Contact us</Link>
          <Link href={'/Login'} className="my-1 hover:text-[#09537C] transition-all duration-400">Login</Link>
          <Link href={'/Register'} className="my-1 hover:text-[#09537C] transition-all duration-400">Sign up</Link>
          <Link href={''} className="my-1 hover:text-[#09537C] transition-all duration-400">Website Terms And Conditions </Link>
          <Link href={''} className="my-1 hover:text-[#09537C] transition-all duration-400">Privacy Policy</Link>
        </div>
      </nav>
      <nav className='bg--700 sm:col-span-1 '>
        <h6 className="parag-20 m-0 p-0">Language</h6>
        <div className="dropdown dropdown-hover mb-3">
          <div tabIndex={0} role="button" className="drop-down-footer">English <i className="fa-solid fa-sm ms-5 fa-arrow-down"></i></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><Link href={''}>English</Link></li>
            <li><Link href={''}>Arabic</Link></li>
          </ul>
        </div>
        <h6 className="parag-20 m-0 p-0">Be3ly Apps :</h6>

        <Image
          src={appLogo}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </nav>
    </footer >
  </>
}
