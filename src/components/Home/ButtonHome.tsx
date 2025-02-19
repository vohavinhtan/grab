'use client'
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

type ButtonProps = {
    image: string;
    widthImage?: number;
    heightImage?: number;
    label?: string;
    className?: string;
    link?: string;
}

export default function ButtonHome({
    image,
    widthImage = 50,
    heightImage = 50,
    label,
    link = '#',
    className
}: ButtonProps) {
    const router = useRouter()
    return (
        <div>
            <button
                onClick={() => router.push(link)}
                className={classNames(
                    'bg-white shadow-lg rounded-full ',
                    className
                )}
            >
                <Image
                    alt='button-image'
                    src={image}
                    width={widthImage}
                    height={heightImage}
                />
            </button>
            {label && (
                <span className='text-xs flex items-center justify-center mt-1'>
                    {label}
                </span>
            )}
        </div>
    )
}
