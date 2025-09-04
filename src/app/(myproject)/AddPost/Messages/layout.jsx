import React from 'react'

import Link from 'next/link.js'
import MsgSideBar from "../../../_mainlayout/_msgSideBar/page";

export default function Layout({ children }) {
    return <>
        <div className="flex bg--500 md:p-4">
            <div className="md:grid md:grid-cols-3 bg-white md:shadow-md w-full bg--700">
                <div className='bg--400 col-span-1'>

                    < MsgSideBar />
                </div>
                <div className='bg--500 col-span-2'>

                    {children}
                </div>

            </div>

        </div>
    </>
}
