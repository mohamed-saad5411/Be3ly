'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import usaFlagLogo from '../../../../public/assets/img/Flag_of_the_United_States.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { UserContext } from '@/app/Context/UserContext'
// import {  } from "../../(myproject)/AddPost/PostAd";
// import {  } from "../../(myproject)/Register";

const navigation = [
  { id: 1, name: 'Home', href: '/', current: true },
  { id: 2, name: 'Electronics', href: '/Electronics', current: false },
  { id: 3, name: 'Watches', href: '/Watches', current: false },
  { id: 4, name: 'Furniture', href: '/Furniture', current: false },
  { id: 5, name: 'Jobs', href: '/Jobs', current: false },
  { id: 6, name: 'Clothes', href: '/Clothes', current: false },
  { id: 7, name: 'All Categories', href: '/', current: false },
  { id: 8, name: 'About Us', href: '/About', current: false },
  { id: 9, name: 'Contact Us', href: '/Contact', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let passName = usePathname()

  let { userData } = useContext(UserContext)
  // console.log(userData ,'navbaar');


  return <>
    {/* lg screen up nav */}
    <Disclosure as="nav" className="relative shadow-sm bg--800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative bg--600 flex h-16 items-center justify-between">
          {/* Mobile menu button*/}
          <div className=" inset-y-0 w-[3rem] right-0 flex items-center sm:hidden">
            <DisclosureButton className="group bg--500 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute " />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block bg--700 size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          {/* logo search location country*/}
          <div className="flex b md:w-[70%] items-center sm:items-stretch sm:justify-between">
            <div className='flex items-center bg--500 w-[60%] md:hidden'>
              <input type="text" placeholder="Search" className="input input-bordered border-[#b4babe]/50 in-focus-within:outline-0 focus:outline-0 in-focus-within:border-[#09537C] focus:border-[#09537C]  rounded-e-none w-full h-[34px] shadow-sm" />
              <div className='h-[34px] cursor-pointer w-[34px] border-[1px] border-[#b4babe]/50 rounded-e-md bg-[#1CA49926] border-s-0 shadow-sm p-2 flex items-center justify-center'>
                <i className="fa-solid fa-magnifying-glass fa-sm text-[#09537C]"></i>
              </div>
            </div>
            <div className="flex  shrink-0 items-center bg--500 ">
              <Link href={'/'} className=' ms-7 w-full top-0 left-0 logo-24 md:ms-0'>Be3ly</Link>
            </div>
            <div className='md:flex  hidden'>
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
          {/* Profile */}
          <div className="absolute bg-y inset-y-0 right-0 w-[30%] flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml- md:flex hidden justify-evenly w-full bg--400">
              {userData ? 
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
              : <></>}
              <Link href={userData ? '/AddPost/PostAd/AdInfo' : '/Login' } className='btn main-btn'>
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

      <DisclosurePanel className="sm:hidden bg--300 shadow-md rounded-md text-center">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                (passName == item.href) ? ' text-[#09537C]' : 'text-black hover:text-[#09537C]',
                ' px-3 py-2 lg-link block',
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

    {/* Profile small */}
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

    {/* lg screen down nav */}
    <Disclosure as="nav" className="relative bg--300 shadow-md bg--500 text-black">
      <div className="mx-auto -100 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative -200 flex items-center justify-between">

          <div className="flex justify-center flex-1 -300">
            <div className="hidden -400 sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <div
                    key={item.name}

                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      (passName == item.href) ? ' text-[#09537C]' : 'text-black hover:text-[#09537C]',
                      ' cursor-pointer px-3 py-2 text-[16px] font-semibold',
                    )}
                  >
                    {item.name == 'All Categories' ? <>
                      <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="">All Categories <i className="fa-solid fa-sm ps-0.5 fa-arrow-down"></i></div>
                        <ul tabIndex={0} className="dropdown-content bg-[#e4e4e4] menu  z-1 w-30 p-1 m-2 rounded-b-sm">
                          {navigation.map((ele) => <li key={ele.id}><Link key={ele.id} href={ele.href}>{ele.name}</Link></li>)}

                        </ul>
                      </div>
                    </> : item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  </>

}



// 'use client'

// import { useContext } from 'react'
// import { UserContext } from '@/app/Context/UserContext'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export default function Navbar() {
//   const { userData, setUserData } = useContext(UserContext)
//   const router = useRouter()

//   const Logout = () => {
//     localStorage.removeItem('userToken')
//     setUserData(null)
//     router.push('/Login')
//   }


//   return (
//     <nav className="flex justify-between p-4 bg-gray-200">
//       <div>
//         {/* //   { id: 3, name: 'Watches', href: '/Watches', current: false },
// //   { id: 4, name: 'Furniture', href: '/Furniture', current: false },
// //   { id: 5, name: 'Jobs', href: '/Jobs', current: false },
// //   { id: 6, name: 'Clothes', href: '/Clothes', current: false }, */}
//         <Link href="/">Home</Link>
//         <Link href="/Watches" className="ms-4">Watches</Link>
//         <Link href="/Furniture" className="ms-4">Furniture</Link>
//         <Link href="/Jobs" className="ms-4">Jobs</Link>
//       </div>

//       <div className="flex items-center gap-4">
//         {userData ? (
//           <>
//             <button onClick={Logout} className="btn">
//               Logout
//             </button>
//             <Link href="/AddPost/PostAd">Post Ad</Link>
//           </>
//         ) : (
//           <>
//             <Link href="/Login" className="btn">Login</Link>
//             <Link href="/Register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }
