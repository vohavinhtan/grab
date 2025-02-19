import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DiscoverNow from './DiscoverNow';
export default function DiscoverNowList() {
    return (
        <div>
            <div className='flex items-center justify-between px-1 mb-3 '>
                <h2 className='text-sm font-semibold'>Khám phá ngay</h2>
            </div>
            <Swiper spaceBetween={10} slidesPerView={'auto'}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <SwiperSlide key={index} className='!w-[170px] !h-[270px]'>
                        <DiscoverNow />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
