import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
export default function DiscountList() {
    return (
        <div >
            <div className='flex items-center justify-between px-1 mb-3 '>
                <h2 className='text-sm font-semibold'>Những ưu đãi khác từ Grab</h2>
            </div>
            <div className="flex flex-wrap gap-3 w-full justify-start">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="w-[170px] flex flex-col">
                        <Image
                            src={'/images/discount.png'}
                            alt="discount"
                            width={170}
                            height={170}
                            className="rounded-lg"
                        />
                        <span className="line-clamp-2 text-xs mt-1">
                            Đặt Grab đến nhà xe, giảm đến 50K
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
