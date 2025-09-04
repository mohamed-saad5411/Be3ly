'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import user from '../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import Image from 'next/image'


const navigation = [
  { name: 'Edit Profile', href: '/AddPost/EditProfile', current: false, icon: <i className="me-1.5  font-extralight fa-regular fa-pen-to-square"></i> },
  { name: 'Post An Ad', href: '/AddPost', current: true, icon: <i className="me-1.5  font-extralight fa-solid fa-plus"></i> },
  { name: 'My Ads', href: '/AddPost/MyAds', current: false, icon: <i className="me-1.5  font-extralight fa-solid fa-volume-high"></i> },
  { name: 'Favorite Ads', href: '/AddPost/FavAds', current: false, icon: <i className="me-1.5  font-extralight fa-regular fa-heart"></i> },
  { name: 'Messages', href: '/AddPost/Messages', current: false, icon: <i className="me-1.5 fa-regular  font-extralight fa-comment-dots"></i> },

]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}



export default function MsgSideBar() {
  return <>
    {/* lg screen nav */}
    <aside className='shadow- p-'>
      <div className=' overflow-hidden'>
        <div className='p-5'>
          <h4>Messages </h4>
          <div className='-amber-200 mt-4 flex items-center '>
            <input type="text" placeholder="Search" className="input input-bordered border-[#b4babe]/50 in-focus-within:outline-0 focus:outline-0 in-focus-within:border-[#09537C] focus:border-[#09537C]  rounded-e-none w-full h-[34px] shadow-sm" />
            <div className='h-[34px] cursor-pointer w-[34px] border-[1px] border-[#b4babe]/50 rounded-e-md bg-[#1CA49926] border-s-0 shadow-sm p-2 flex items-center justify-center'>
              <i className="fa-solid fa-magnifying-glass fa-sm text-[#09537C]"></i>
            </div>
          </div>
        </div>


        <Disclosure as="nav" className="my-4   bg--500 text-black">
          <div className="flex me-auto flex-col space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='w-full'
              // aria-current={item.current ? 'page' : undefined}
              // className={classNames(
              //   item.current ? ' text-[#09537C]' : 'text-black hover:text-[#09537C]',
              //   ' px-3 py-0.5 text-[14px] font-semibold',
              // )}
              >
                <div className='bg-[#dde8e7]/44 p-3 px-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-[2.5rem] h-[2.5rem] me-3 rounded-full overflow-hidden bg-red-500'>
                      <Image
                        src={user}
                        // width={150} 
                        // height={150}
                        className='w-full h-full'
                        alt="Picture of the author"
                      />
                    </div>
                    <div>
                      <p>ahmed</p>
                      <p className='text-gray-400'>message</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-gray-400'>Now</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </Disclosure>

      </div>

    </aside>



  </>

}



