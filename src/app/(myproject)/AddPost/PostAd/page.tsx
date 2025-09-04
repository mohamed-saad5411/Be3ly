
'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import logo from '../../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg'
import Link from 'next/link'
import AdInfo from './AdInfo/page'
import StepsNavBar from '@/app/_mainlayout/_navsteps/page'


export default function PostAd() {
    const data: { id: number }[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 9 }]

    return <>
    
        <AdInfo />

    </>
}
