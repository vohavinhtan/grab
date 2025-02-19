'use client';

import React from 'react';
import CategoryCard, { CategoryType } from './CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArrowRight } from 'lucide-react';

type ProductListScrollProps = {
    categories: CategoryType[];
    handleSeeMore?: () => void;
    title: string;
};

export default function CategoryListSwiper({
    categories,
    title,
    handleSeeMore
}: ProductListScrollProps) {

    return (
        <div>
            <div className='flex items-center justify-between px-1 mb-3 '>
                <h2 className='text-sm font-semibold'>{title}</h2>
                <button onClick={handleSeeMore && handleSeeMore} className='bg-green-100 rounded-full shadow-lg p-2'>
                    <ArrowRight size={16} color="#31aa39" />
                </button>
            </div>
            <Swiper spaceBetween={10} slidesPerView={'auto'}>
                {categories.map((item) => (
                    <SwiperSlide key={item.id} className="!w-[100px] bg-white rounded-xl p-2 !h-[100px]">
                        <CategoryCard
                            category={item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
