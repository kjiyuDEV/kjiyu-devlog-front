// front/src/app/_components/root/Mobile.tsx
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import Header from '../header/Header';

interface MobileProps {
    children: ReactNode;
}

const Mobile: React.FC<MobileProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <>
            {pathname !== '/' && <Header />}
            {children}
        </>
    );
};

export default Mobile;
