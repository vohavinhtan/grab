'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {}

const BottomBar = (props: Props) => {
  const router = useRouter();
  const handleNavigateAuth = (type: 'signUp' | 'signIn') => {
    const path = type === 'signUp' ? '/auth/sign-up' : '/auth/sign-in';
    router.push(path);
  };
  return (
    <div className="fixed bottom-0 z-50 flex w-full gap-5 rounded-t-3xl bg-white px-4 pb-8 pt-3 font-bold text-black">
      <button
        onClick={() => handleNavigateAuth('signUp')}
        className="grow rounded-full bg-blue-100 py-4 text-gray-700"
      >
        Đăng ký
      </button>
      <button
        onClick={() => handleNavigateAuth('signIn')}
        className="grow rounded-full bg-[#00b14f] py-4 text-white"
      >
        Đăng nhập
      </button>
    </div>
  );
};

export default BottomBar;
