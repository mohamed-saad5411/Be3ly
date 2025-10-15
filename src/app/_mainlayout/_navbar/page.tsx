'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import usaFlagLogo from '../../../../public/assets/img/Flag_of_the_United_States.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Electronics', href: '/Electronics', current: false },
  { name: 'Watches', href: '/Watches', current: false },
  { name: 'Furniture', href: '/Furniture', current: false },
  { name: 'Jobs', href: '/Jobs', current: false },
  { name: 'Clothes', href: '/Clothes', current: false },
  { name: 'All Categories', href: '/', current: false },
  { name: 'About Us', href: '/About', current: false },
  { name: 'Contact Us', href: '/Contact', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let passName = usePathname()
  return <>
    {/* lg screen nav */}
    <Disclosure as="nav" className="relative shadow-sm bg--800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className=" inset-y-0 w-[3rem] right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group bg--500 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute " />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block bg--700 size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex bg--400 md:w-[70%] items-center sm:items-stretch sm:justify-between">
            <div className='flex items-center bg--500 w-[60%] md:hidden'>
              <input type="text" placeholder="Search" className="input input-bordered border-[#b4babe]/50 in-focus-within:outline-0 focus:outline-0 in-focus-within:border-[#09537C] focus:border-[#09537C]  rounded-e-none w-full h-[34px] shadow-sm" />
              <div className='h-[34px] cursor-pointer w-[34px] border-[1px] border-[#b4babe]/50 rounded-e-md bg-[#1CA49926] border-s-0 shadow-sm p-2 flex items-center justify-center'>
                <i className="fa-solid fa-magnifying-glass fa-sm text-[#09537C]"></i>
              </div>
            </div>
            <div className="flex shrink-0 items-center bg--500 ">
              <h1 className='text-[#09537C] top-0 left-0 text-shadow-lg ms-7 md:ms-0'><Link href={'/'}>Be3ly</Link></h1>
            </div>
            <div className='md:flex bg--400 hidden'>
              <div className='-amber-200 flex items-center me-2 md:w-[475px] '>
                <input type="text" placeholder="Search" className="input input-bordered border-[#b4babe]/50 in-focus-within:outline-0 focus:outline-0 in-focus-within:border-[#09537C] focus:border-[#09537C]  rounded-e-none w-full h-[34px] shadow-sm" />
                <div className='h-[34px] cursor-pointer w-[34px] border-[1px] border-[#b4babe]/50 rounded-e-md bg-[#1CA49926] border-s-0 shadow-sm p-2 flex items-center justify-center'>
                  <i className="fa-solid fa-magnifying-glass fa-sm text-[#09537C]"></i>
                </div>
              </div>
              <div className='flex items-center me-2'>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="drop-down-footer shadow-sm">Egypt<i className="fa-solid fa-sm ms-2 fa-arrow-down"></i></div>
                  <ul tabIndex={0} className="dropdown-content bg-[#e4e4e4] menu  z-1 w-30 p-1 m-2 rounded-b-sm">
                    <li><Link href={''}>Egypt</Link></li>

                  </ul>
                </div>
              </div>
              <div className='flex items-center me-2 cursor-pointer'>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="-down-footer flex items-center -300">
                    <span>English</span>
                    <Image
                      src={usaFlagLogo}
                      // width={150} 
                      // height={150}
                      className='w-[2rem] ms-2'
                      alt="Picture of the author"
                    />
                  </div>
                  <ul tabIndex={0} className="dropdown-content bg-[#e4e4e4] menu  z-1 w-30 p-1 m-2 rounded-b-sm">
                    <li><Link href={''}>Arabic</Link></li>

                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div className="absolute bg--400 inset-y-0 right-0 w-[30%] flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml- md:flex hidden justify-evenly w-full bg--400">

              <div className='sm:flex sm:items-center bg--500 grid grid-cols-3 items-center'>
                <div className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <Link className='p-0 m-0' href={'/AddPost/Messages'}><i className="fa-regular text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-comment-dots"></i></Link>
                </div>
                <div className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <Link className='p-0 m-0' href={'/AddPost/FavAds'}><i className="fa-regular pt-1.5 text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-heart"></i></Link>
                </div>
                <div className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <Link href={'/Login'}><i className="fa-regular text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-user"></i></Link>
                </div>

              </div>
              <Link href={'/AddPost/PostAd/AdInfo'} className='btn main-btn'>
                <div className='flex items-center justify-center'>
                  <div className='w-[1rem] h-[1rem] me-3 flex items-center justify-center border-[1px]'>
                    <i className="fa-solid text-[10px] fa-plus"></i>
                  </div>
                  <p>Post an Ad</p>
                </div>
              </Link>

            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden shadow-md rounded-md text-center bg--900">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-[#09537C]' : 'text-black hover:text-[#09537C]',
                ' px-3 py-2 text-[16px] font-semibold block',
              )}
            >
              {item.name == 'All Categories' ? <>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="">All Categories <i className="fa-solid fa-sm ps-0.5 fa-arrow-down"></i></div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2">
                    {navigation.map((ele) => <li><Link href={ele.href}>{ele.name}</Link></li>)}

                  </ul>
                </div>
              </> : item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>

    <Disclosure as="nav" className="relative shadow-sm block md:hidden bg--800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className=" flex items-center bg--400 justify-between">

          <div className=' bg--400 hidde w-full p-2'>

            <Menu as="div" className=" ml- flex mt-2 justify-between w-full bg--400">
              <div className='sm:flex sm:items-center bg--500 grid grid-cols-5 items-center'>
                <Link href={'/AddPost/Messages'} className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-0.5 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <i className="fa-regular text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-comment-dots"></i>
                </Link>
                <Link href={'/AddPost/FavAds'} className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-0.5 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <i className="fa-regular text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-heart"></i>
                </Link>
                <Link href={'/Login'} className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-0.5 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <i className="fa-regular text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-user"></i>
                </Link>
                <Link href={'/'} className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-0.5 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <i className="fa-solid text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-globe"></i>
                </Link>
                <Link href={'/'} className='w-[2.3rem] col-span-1 nav-icon-container  h-[2.3rem] me-0.5 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                  <i className="fa-solid text-[#09537C] nav-icon font-extralight duration-400 transition-all fa-location-dot"></i>
                </Link>

              </div>
              <button className='btn-res'>
                <Link href={'/AddPost/PostAd/AdInfo'}>
                  <div className='flex items-center justify-center'>
                    <div className='w-[1rem] h-[1rem] me-1.5 flex items-center justify-center border-[1px]'>
                      <i className="fa-solid text-[10px] fa-plus"></i>
                    </div>
                    <p className=''>Post an Ad</p>
                  </div>
                </Link>
              </button>

            </Menu>
          </div>

        </div>
      </div>


    </Disclosure>

    <Disclosure as="nav" className="relative shadow-md bg--500 text-black">
      <div className="mx-auto -100 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative -200 flex items-center justify-between">

          <div className="flex justify-center flex-1 -300">
            <div className="hidden -400 sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      (passName == item.href) ? ' text-[#09537C]' : 'text-black hover:text-[#09537C]',
                      ' px-3 py-2 text-[16px] font-semibold',
                    )}
                  >
                    {item.name == 'All Categories' ? <>
                      <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="">All Categories <i className="fa-solid fa-sm ps-0.5 fa-arrow-down"></i></div>
                        <ul tabIndex={0} className="dropdown-content bg-[#e4e4e4] menu  z-1 w-30 p-1 m-2 rounded-b-sm">
                          {navigation.map((ele) => <li><Link href={ele.href}>{ele.name}</Link></li>)}

                        </ul>
                      </div>
                    </> : item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  </>

}



