'use client';
import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

interface FooterProps {
    children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
    const router = useRouter();
    return (
        <div className="footer-wrapper">
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} onClick={() => router.back()} />
            <>{children}</>
        </div>
    );
};

export default Footer;
