// 'use client'

// import React from 'react'

// import Link from 'next/link.js'
// import StepsNavBar from '@/app/_mainlayout/_navsteps/page'

// export default function Layout({ children }) {
//     return <>
//         <StepsNavBar />
//         {children}
//     </>
// }

import React from 'react'

import Link from 'next/link.js'
import Sidebar from "../../_mainlayout/_usersidebar/page";

export default function Layout({ children }) {
    return <>
        <div className="container">
            <div className='grid grid-cols-3 '>
                <div className="col-span-1 bg-amber-500">
                    < Sidebar />
                </div>
                <div className="col-span-2 bg-amber-700">
                    {children}
                </div>
            </div>
        </div>
    </>
}
