import React from 'react'

import Link from 'next/link.js'
import StepsNavBar from '@/app/_mainlayout/_navsteps/page';

export default function Layout({ children }) {
    return <>
        <div className="">
            < StepsNavBar />
            {children}

        </div>
    </>
}
