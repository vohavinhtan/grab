'use client';
import React from 'react';
import ButtonHome from './ButtonHome';
import { useRouter } from 'next/navigation';
import { ProductType } from './ProductCard';
import ProductListSwiper from './ProductListSwiper';
import SearchInput from './SearchInput';
import ButtonCredit from './ButtonCredit';
import DiscoverNowList from './DiscoverNowList';
import BookNows from './BookNows';
import DiscountList from './DiscountList';

const buttonLinks = [
  {
    image: '/images/bike.png',
    label: 'Xe máy',
    link: '/transport',
  },
  {
    image: '/images/car.png',
    label: 'Ô tô',
		link: '/transport',
  },
  {
    image: '/images/box.png',
    label: 'Giao hàng',
  },
  {
    image: '/images/see-more.png',
    label: 'Tất cả',
  },
];

// const categories: CategoryType[] = [
//     {
//         icon: <Medal color="#40b056" />,
//         id: 1,
//         name: 'Bán chạy',
//     },
//     {
//         icon: <Medal color="#40b056" />,
//         id: 2,
//         name: 'Đặc sản ngon rẻ',
//     },
//     {
//         icon: <Medal color="#40b056" />,
//         id: 3,
//         name: 'Gần đây',
//     },
//     {
//         icon: <Medal color="#40b056" />,
//         id: 4,
//         name: 'Tất cả',
//     },
// ]

// const categories2: CategoryType[] = [
//     {
//         icon: <Medal color="#40b056" />,
//         id: 1,
//         name: 'Thực phẩm tươi',
//     },
//     {
//         icon: <Medal color="#40b056" />,
//         id: 2,
//         name: 'Thịt hải sản',
//     },
//     {
//         icon: <Medal color="#40b056" />,
//         id: 3,
//         name: 'Vào GrabMart',
//     },
//     {
//         icon: <Medal color="#40b056" />,
//         id: 4,
//         name: 'Tất cả',
//     },
// ]

// const mockDataCategories = [
//     {
//         title: 'Món ngon cho bạn',
//         categories: categories,
//         link: "#"
//     },
//     {
//         title: 'Đi chợ mua sắm',
//         categories: categories2,
//         link: "#"
//     }
// ]

const products: ProductType[] = [
  {
    id: 1,
    image: '/images/product.png',
    name: 'Trà Sữa Trân Châu Đen',
    evaluate: 4.5,
    km: 2.5,
    price: 50000, // 50,000 VND
    discount: 10, // Giảm 10%
    discountAmount: 50000 * (10 / 100), // 5,000 VND
    discountPrice: 50000 - (50000 * 10) / 100, // 45,000 VND
  },
  {
    id: 2,
    image: '/images/product.png',
    name: 'Trà Sữa Matcha',
    evaluate: 4.0,
    km: 3.0,
    price: 55000,
    discount: 15,
    discountAmount: 55000 * (15 / 100), // 8,250 VND
    discountPrice: 55000 - (55000 * 15) / 100, // 46,750 VND
  },
  {
    id: 3,
    image: '/images/product.png',
    name: 'Trà Sữa Socola',
    evaluate: 3.8,
    km: 1.2,
    price: 60000,
    discount: 20,
    discountAmount: 60000 * (20 / 100), // 12,000 VND
    discountPrice: 60000 - (60000 * 20) / 100, // 48,000 VND
  },
  {
    id: 4,
    image: '/images/product.png',
    name: 'Trà Sữa Khoai Môn',
    evaluate: 4.7,
    km: 5.0,
    price: 53000,
    discount: 5,
    discountAmount: 53000 * (5 / 100), // 2,650 VND
    discountPrice: 53000 - (53000 * 5) / 100, // 50,350 VND
  },
  {
    id: 5,
    image: '/images/product.png',
    name: 'Trà Sữa Oolong',
    evaluate: 4.2,
    km: 2.8,
    price: 57000,
    discount: 12,
    discountAmount: 57000 * (12 / 100), // 6,840 VND
    discountPrice: 57000 - (57000 * 12) / 100, // 50,160 VND
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="-mt-5">
      <div className="z-50 px-3">
        <SearchInput handleSearch={() => {}} />
      </div>
      <div className="h-full overflow-y-auto p-2">
        <div className="flex items-center justify-around">
          {buttonLinks.map((button, index) => {
            return (
              <ButtonHome
                image={button.image}
                label={button.label}
								link={button?.link}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex items-center gap-3 pt-4">
          <ButtonCredit />
          <ButtonCredit type="reward" />
        </div>
        {/* {
                    mockDataCategories.map((categoryData, index) => (
                        <div key={index} className='pt-8'>
                            <CategoryListSwiper
                                title={categoryData.title}
                                categories={categoryData.categories}
                                handleSeeMore={() => router.push(categoryData.link)}
                            />
                        </div>
                    ))
                } */}
        <div className="pt-8">
          <ProductListSwiper
            title={'Có thể bạn thích'}
            products={products}
            handleSeeMore={() => router.push('#')}
          />
        </div>
        <div className="pt-8">
          <ProductListSwiper
            title={'Đặt bữa trưa từ'}
            products={products}
            handleSeeMore={() => router.push('#')}
          />
        </div>
        <div>
          <DiscoverNowList />
        </div>
        <div className="pt-8">
          <ProductListSwiper
            title={'Món ngon cho bạn'}
            products={products}
            handleSeeMore={() => router.push('#')}
          />
        </div>
        <div>
          <BookNows />
        </div>
        <div>
          <DiscountList />
        </div>
      </div>
    </div>
  );
}
