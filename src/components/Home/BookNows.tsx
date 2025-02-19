import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function BookNows() {
    return (
        <Swiper spaceBetween={10} slidesPerView={'auto'}>
            {Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index} className="!w-[450px] rounded-xl p-2 !h-[300px]">
                    <div className='w-full'>
                        <div className='flex items-center gap-2 pb-2'>
                            <span className='text-sm font-bold'>Book Now</span>
                            <button className='bg-green-100 rounded-full shadow-lg p-2'>
                                <ArrowRight size={12} color="#31aa39" />
                            </button>
                        </div>
                        <Image
                            src={'/images/booking.png'}
                            alt='image'
                            width={600}
                            height={100}
                        />
                        <span className='text-sm font-semibold truncate'>Bảo hiểm chuyến xe chỉ 2000đ/chuyến</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
