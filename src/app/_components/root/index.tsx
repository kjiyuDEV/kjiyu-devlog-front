'use client';
// front/src/app/_components/root/index.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import Mobile from './Mobile';
import Desktop from './Desktop';
import 'react-toastify/dist/ReactToastify.css';

interface RootProps {
    children: ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
    const [isClient, setIsClient] = useState('');

    useEffect(() => {
        setIsClient(isMobile ? 'mobile' : 'desktop');
    }, []);

    return (
        <div>
            {isClient === 'mobile' && <Mobile>{children}</Mobile>}
            {isClient === 'desktop' && <Desktop>{children}</Desktop>}
        </div>
    );
};

export default Root;
