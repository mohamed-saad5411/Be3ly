'use client'
import React, { useEffect, useState } from "react";
import Electronics from '../../../../public/assets/img/laptop.png'
import sofa from '../../../../public/assets/img/sofa.png'
import clothes from '../../../../public/assets/img/clothes.png'
import watch from '../../../../public/assets/img/watch.png'
import automotive from '../../../../public/assets/img/automotive.png'
import job from '../../../../public/assets/img/job.jpg'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


export default function HomeSlider() {
    const [display, setDisplay] = useState(true);
    let data: any = [{
        name: 'Electronics',
        logo: Electronics
    },
    {
        name: 'Vehicle',
        logo: automotive
    },
    {
        name: 'Watches',
        logo: watch
    },
    {
        name: 'Jobs',
        logo: job
    },
    {
        name: 'Watches',
        logo: watch
    },
    {
        name: 'Clothes',
        logo: clothes
    },
    {
        name: 'Furniture',
        logo: sofa
    },
    {
        name: 'Clothes',
        logo: clothes
    },
    {
        name: 'Watches',
        logo: watch
    }]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: noOfSlides(),
        slidesToScroll: 1
    };

function noOfSlides() {
    if (window.innerWidth>600 && window.innerWidth<900) {
        return 2
    }else if (window.innerWidth>900 && window.innerWidth<1200) {
        return 4
    }else if (window.innerWidth>1200) {
        return 7
    }
    return 1
}


    return <>
        <section className="bg-red- px-2  py-8">
            <div className="text-center my-4">
            </div>
            {/* == START SLIDER == */}
            <div className="slider-container  bg-gray-100 text-center">
                <div className="bg- w-[85%] m-auto p-3 "
                    style={{
                        // width: width + "px",
                        display: display ? "block" : "none"
                    }}
                >
                    <Slider {...settings} className="text-start">
                        {data.map((item:any) =>
                            < div className="p-1">
                                <div className="bg-white m-auto transition-all duration-400 slide-item hover:bg-[#1CA49926] shadow-md h-[11.3rem] w-[9rem] flex items-center justify-center p-3 text-center rounded-md">
                                    <div className="flex items-center justify-center flex-col">
                                        <div className="h-[5rem] w-[5rem] transition-all slide-icon duration-400 hover:bg-white mb-3 bg-[#1CA49926] rounded-full flex items-center justify-center">
                                            <Image
                                                src={item.logo}
                                                // width={150}
                                                // height={150}
                                                className='w-[70%]'
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h4 className="">{item.name}</h4>
                                        <p>200 Ads</p>
                                    </div>
                                </div>
                            </div>

                        )}



                    </Slider>
                </div>
            </div >
            {/* == END SLIDER == */}
        </section >
    </>
}

