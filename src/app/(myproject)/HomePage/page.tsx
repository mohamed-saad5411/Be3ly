import React from 'react'
import HomeSlider from '@/app/_components/HomeSlider/page'
import LatestProduct from '@/app/_components/LatestProduct/page'
import WhyChoose from '@/app/_components/WhyChoose/page'
import Header from '@/app/_components/Header/page'

export default function HomePage() {
    return <div className=''>
        <Header />
        <HomeSlider />
        <LatestProduct />
        <WhyChoose />
    </div>
}
