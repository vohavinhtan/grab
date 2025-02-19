import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard, { ProductType } from './ProductCard';
import { ArrowRight } from 'lucide-react';

type ProductListSwiperProps = {
  products: ProductType[];
  handleSeeMore?: () => void;
  title: string;
};
export default function ProductListSwiper({
  products,
  title,
  handleSeeMore
}: ProductListSwiperProps) {
  return (
    <div>
      <div className='flex items-center justify-between px-1 mb-3 '>
        <h2 className='text-sm font-semibold'>{title}</h2>
        <button onClick={handleSeeMore && handleSeeMore} className='bg-green-100 rounded-full shadow-lg p-2'>
          <ArrowRight size={16} color="#31aa39" />
        </button>
      </div>
      <Swiper spaceBetween={10} slidesPerView={'auto'}>
        {products.map((item) => (
          <SwiperSlide key={item.id} className="!w-[150px] rounded-xl p-2 !h-[240px]">
            <ProductCard
              product={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
