// front/src/app/_components/root/Mobile.tsx
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import Header from '../header/Header';
import { ToastContainer } from 'react-toastify';

interface MobileProps {
    children: ReactNode;
}

const Mobile: React.FC<MobileProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <>
            <ToastContainer theme="dark" position="bottom-center" hideProgressBar={true} autoClose={3000} />
            {pathname !== '/' && <Header />}
            {children}
        </>
    );
};

export default Mobile;
