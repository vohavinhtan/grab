"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}
const ButtonIcon = ({
    icon = "",
    title,
    onClick
}: {
    icon?: string,
    title?: string,
    onClick?: () => void
}) => {
    return (
        <button onClick={onClick} className='flex items-center gap-3 bg-white justify-start pl-[30px] rounded-full w-[350px] h-[50px]'>
            <div className='w-[25px] h-[25px]'>
                <Image src={icon} width={25} height={25} alt={icon} quality={100} />
            </div>
            <p className='text-black pl-[30px] font-bold text-lg text-start'>{title}</p>
        </button>
    )
}
const SignIn = (props: Props) => {
    const router = useRouter();
    return (
        <div className='bg-[#00b14f] w-full min-h-screen flex flex-col  items-center'>
            <div className='container mx-auto flex flex-col bg-[#00b14f] items-center'>
                <button onClick={() => router.back()} className='absolute left-[20px] pt-[50px] lg:pb-[50px]'>
                    <div className='w-[25px] h-[25px]'>
                        <Image src={"/image/navigation-arrow-chevron.svg"} alt='arowleft-icon.svg' width={25} height={25} />
                    </div>
                </button>
                <div className='flex flex-col  items-center pt-[120px] pb-[50px] gap-[150px] justify-center text-center'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <div className='w-[150px]  lg:pt-0'>
                            <Image src={"/image/grab.svg"} width={200} height={200} alt='grab' quality={100} />
                        </div>
                        <p className='text-lg mt-5 text-white'>Siêu ứng dụng đáp ứng mọi nhu cầu <br /> hằng ngày</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5  w-full'>
                        <ButtonIcon icon="/image/facebook.svg" title="Tiếp tục với Facebook" />
                        <ButtonIcon icon="/image/google.svg" title="Tiếp tục với Google" />
                        <ButtonIcon icon="/image/apple.svg" title="Tiếp tục với Apple" />
                        <div className='flex w-full items-center justify-center gap-5'>
                            <div className='w-full h-[1px] bg-white'></div>
                            <p className='text-white text-md'>hoặc</p>
                            <div className='w-full h-[1px] bg-white'></div>
                        </div>
                        <ButtonIcon onClick={() => router.push("/auth/sign-up")} icon="/image/icons8-phone-64.png" title="Tiếp tục với Số điện thoại" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn