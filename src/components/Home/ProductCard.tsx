import classNames from 'classnames';
import { Star, TicketPercent } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export type ProductType = {
  id: number;
  image: string;
  name: string;
  evaluate: number;
  km: number;
  price: number;
  discountAmount: number;
  discount: number;
  discountPrice: number;
}

type ProductCardProps = {
  className?: string;
  product: ProductType;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={'#'}
      className={
        classNames(
          'w-full h-full flex flex-col gap-2', className
        )
      }
    >
      <Image
        src={product.image || '/images/product.png'}
        alt='product'
        width={150}
        height={150}
        className='rounded-xl'
      />
      <span className='text-sm font-semibold truncate'>{product.name}</span>
      <div className='flex items-center gap-3'>
        <span className='text-xs'>{product.km}km</span>
        <div className='flex items-center'>
          <Star fill="gold" stroke="none" size={16} />
          <span className='text-xs'>{product.evaluate}</span>
        </div>
      </div>
      <div className='inline-flex items-center border px-2 py-[2px] rounded gap-1 w-fit '>
        <TicketPercent size={16} color='green' />
        <span className='text-xs'>Giảm {product.discountAmount.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
      </div>
    </Link>
  )
}
