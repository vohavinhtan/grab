'use client'
import CountrySelector from '@/components/auth/country-select'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const SignUp = (props: Props) => {
    const router = useRouter();
    const [value, setValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (/^[0-9]*$/.test(inputValue)) {
            setValue(inputValue);
        }
    };

    return (
        <div className='h-screen container flex flex-col items-center mx-auto'>
            <button onClick={() => router.back()} className='flex items-center justify-start absolute left-[20px]  gap-5 pt-10'>
                <div className='w-[25px] h-[25px]'>
                    <Image src={"/image/icons8-left-arrow-50.png"} alt='left' width={25} height={25} />
                </div> <p className='font-bold text-lg'>
                    Bắt đầu
                </p>
            </button>
            <div className='flex flex-col items-start w-full justify-center mt-[120px]'>
                <p className='pl-4'>Số Di Động</p>
                <div className='grid grid-cols-[1fr_2fr] lg:grid-cols-[1fr_7fr] w-full mt-1'>
                    <div className='flex flex-col w-full'>
                        <CountrySelector />
                    </div>
                    <input
                        type="number"
                        value={value}
                        onChange={handleInputChange}
                        className="w-[250px] lg:w-full border-b border-black focus:outline-none bg-transparent text-xl caret-green-500"
                    />
                </div>
            </div>
            <div className='flex z-[1]  justify-center items-center fixed bottom-10'>
                <button disabled={value && value !== '' ? false : true} className={`${value ? "bg-[#00b14f] cursor-poniter" : "bg-[#d9d9d9]"}  text-xl text-white fold-bold rounded-[100px] h-[50px] w-[350px]`}>
                    Tiếp tục
                </button>
            </div>
        </div>
    )
}

export default SignUp