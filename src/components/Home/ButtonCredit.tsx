import { CreditCard, Crown } from 'lucide-react'
import React from 'react'

export default function ButtonCredit({
    type = 'credit'
}: { type?: 'credit' | 'reward' }) {
    return (
        <div className='border w-[200px] bg-white px-3 py-2 rounded-xl flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
                <span className='text-xs'>{type === 'credit' ? "Thanh toán" : "GrabRewards"}</span>
                <span className='text-sm font-bold'>{type === 'credit' ? "Thêm thẻ" : "0"}</span>
            </div>
            <div>
                {
                    type === 'credit' ? <CreditCard color='green' size={20} /> : <Crown color='gold' size={20} />
                }
            </div>
        </div>
    )
}
