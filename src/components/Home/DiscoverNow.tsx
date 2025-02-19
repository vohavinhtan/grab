import Image from 'next/image'
import React from 'react'

export default function DiscoverNow() {
    return (
        <div className="w-[170px] flex items-end h-[270px] rounded-2xl bg-[url('/images/discover.png')] bg-cover">
            <div className='pb-2 px-2 bg-gradient-to-t to-#fff from-[#333] rounded-b-2xl'>
                <span className='text-white text-sm font-semibold'>Tặng 2 tháng đầu dùng thử</span>
                <div className='flex items-center'>
                    <Image
                        src={'/images/avatar.png'}
                        alt='avatar'
                        width={20}
                        height={20}
                        className='rounded-full'
                    />
                    <span className='text-xs text-white'>GrabUnlimited</span>
                </div>
            </div>
        </div>
    )
}
