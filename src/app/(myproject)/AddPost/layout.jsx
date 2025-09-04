import React from 'react'

import Link from 'next/link.js'
import Sidebar from "../../_mainlayout/_usersidebar/page";

export default function Layout({ children }) {
    return <>
        <div className="container">
            <div className='md:grid md:grid-cols-3 '>
                <div className="col-span-1 bg--500">
                    < Sidebar />
                </div>
                <div className="bg-white my-4 rounded-md shadow-sm p-5 col-span-2 bg--700">
                    {children}
                </div>
            </div>
        </div>
    </>
}
