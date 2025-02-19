import classNames from 'classnames';
import Link from 'next/link';
import React from 'react'

export type CategoryType = {
    id: number;
    icon: React.ReactNode;
    name: string;
}

type CategoryCardProps = {
    category: CategoryType;
    className?: string;
}

export default function CategoryCard({
    category, className
}: CategoryCardProps) {
    return (
        <Link href={'#'} className={
            classNames(
                'w-full h-full flex flex-col justify-between', className
            )
        }>
            <span className='text-xs font-semibold '>{category.name}</span>
            <div className='flex items-center justify-end'>
                {category.icon}
            </div>
        </Link >
    )
}
