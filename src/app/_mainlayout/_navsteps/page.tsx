'use client'

import { Disclosure } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
// import user from '../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
// import Image from 'next/image'
import { usePathname } from 'next/navigation'


const navigation = [
  {
    id: 1, name: <div className=' flex flex-col md:flex-row items-center justify-center'>
      <div className=' w-[2.5rem] h-[2.5rem] border-1 border-[#ffffff] text-3xl font-[500] bg-white text-black rounded-full flex items-center justify-center'>1</div>
      <div className='md:ms-3 md:mt-0 mt-2 md:text-start text-center'>
        <p className='hidden md:block'>Step</p>
        <p>Ad Information</p>
      </div>
    </div>, href: '/AddPost/PostAd/AdInfo', current: true
  },
  {
    id: 2, name: <div className=' flex flex-col md:flex-row items-center justify-center'>
      <div className=' w-[2.5rem] text-3xl font-[500] h-[2.5rem] border-1 border-[#ffffff] bg-white text-black rounded-full flex items-center justify-center'>2</div>
      <div className='md:ms-3 md:mt-0 mt-2 md:text-start text-center '>
        <p className='hidden md:block'>Step</p>
        <p>Ad Details</p>
      </div>
    </div>, href: '/AddPost/PostAd/AdDetails', current: false
  },
  {
    id: 3, name: <div className=' flex flex-col md:flex-row items-center justify-center'>
      <div className=' w-[2.5rem] text-3xl font-[500] h-[2.5rem] border-1 border-[#ffffff] bg-white text-black rounded-full flex items-center justify-center'>3</div>
      <div className='md:ms-3 md:mt-0 mt-2 md:text-start text-center '>
        <p className='hidden md:block'>Step</p>
        <p>User Information</p>
      </div>
    </div>, href: '/AddPost/PostAd/UserInfo', current: false
  },

]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}



export default function StepsNavBar() {
    let passName = usePathname()
  return <>
  
    {/* lg screen nav */}
    <nav className='bg--300'>
      <h4 className='mb-3'>Post An Ad</h4>
      <div className=' bg-white overflow-hidden'>

        <Disclosure as="nav" className="mb- bg--500 text-black">
          <div className="flex bg-purpl-400  justify-between ">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  (passName == item.href) ? ' text-white bg-[#09537C] rounded-t-md border-b-[0px] border-[#09537C]' : ' hover:text-[#09537C]',
                  '  px-4 py-2 rounded-t-md md:w-full w-1/3 text-black text-[14px] border-b-[2px] border-[#B4BABE] font-semibold',
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

        </Disclosure>

      </div>

    </nav>



  </>

}



