import CarIcon from '@/assets/icons/CarIcon';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-between bg-[#00b14f] px-4 py-8">
      <div>
        <p className="text-base font-bold">Chưa có tài khoản Grab?</p>
        <p className="text-xs flex items-center gap-3">
          Đăng ký để hưởng các tiện ích <FaArrowCircleRight />
        </p>
      </div>
      <div>
        <CarIcon />
      </div>
    </div>
  );
};

export default Header;
