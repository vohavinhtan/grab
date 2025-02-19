'use client';
import BottomBar from '@/components/layout/BottomBar';
import Header from '@/components/layout/Header';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);

  useEffect(() => {
    if (
      pathname === '/auth/sign-up' ||
      pathname === '/auth/sign-in' ||
      pathname === '/transport'
    ) {
      setShowHeaderAndFooter(false);
    } else {
      setShowHeaderAndFooter(true);
    }
  }, [pathname]);

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <BottomBar />}
    </>
  );
};

export default Layout;
