'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import user from '../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const navigation = [
  { name: 'Edit Profile', href: '/AddPost/EditProfile', current: false, icon: <i className="me-1.5  font-extralight fa-regular fa-pen-to-square"></i> },
  { name: 'Post An Ad', href: '/AddPost/PostAd/AdInfo', current: true, icon: <i className="me-1.5  font-extralight fa-solid fa-plus"></i> },
  { name: 'My Ads', href: '/AddPost/MyAds', current: false, icon: <i className="me-1.5  font-extralight fa-solid fa-volume-high"></i> },
  { name: 'Favorite Ads', href: '/AddPost/FavAds', current: false, icon: <i className="me-1.5  font-extralight fa-regular fa-heart"></i> },
  { name: 'Messages', href: '/AddPost/Messages', current: false, icon: <i className="me-1.5 fa-regular  font-extralight fa-comment-dots"></i> },

]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}



export default function Sidebar() {
  let passName = usePathname()
  return <>
    {/* lg screen nav */}
    <aside className='md:p-4 mt-4 md:mt-0'>
      <div className='shadow-md p-1 rounded-lg bg-white overflow-hidden'>

        <div className='text-center mt-8 mb-12 bg--500'>
          <div className='w-[4rem] h-[4rem] m-auto rounded-full overflow-hidden bg-red-500'>
            <Image
              src={user}
              // width={150} 
              // height={150}
              className='w-full h-full'
              alt="Picture of the author"
            />
          </div>
          <h3>ahmed mostafa</h3>
          <p>aajsiy@gmail.com</p>
        </div>

        <Disclosure as="nav" className="mb-4 bg--500 text-black">
          <div className="flex bg-purple- me-auto flex-col space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  (passName == item.href) ? ' text-[#09537C]' : 'text-black hover:text-[#09537C]',
                  ' px-3 py-2 text-[14px] font-semibold',
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

        </Disclosure>
        <div className='bg-red text-center my-4'>
          <button className='btn '>Logout</button>
        </div>
      </div>

    </aside>

    {/* <aside className='p-4'>
      <div className='shadow-md rounded-lg p-4 bg-white overflow-hidden'>
        <h3 className='my-4'>Your safety matters to us!</h3>
        <ul className=' '>
          <li className='list-disc ms-7 mb-3'>Only meet in public / crowded places for example metro stations and malls.</li>
          <li className='list-disc ms-7 mb-3'>Never go alone to meet a buyer / seller, always take someone with you.</li>
          <li className='list-disc ms-7 mb-3'>Check and inspect the product properly before purchasing it.</li>
          <li className='list-disc ms-7 mb-3'>Never pay anything in advance or transfer money before inspecting the product.</li>
        </ul>




      </div>

    </aside> */}


  </>

}



