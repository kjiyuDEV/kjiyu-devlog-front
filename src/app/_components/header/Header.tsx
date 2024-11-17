import { faArrowLeft, faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(isMobile); // 클라이언트에서만 true로 설정
    }, []);
    return (
        <div className="header">
            <div className="left-wrap">
                <FontAwesomeIcon icon={faBars} size="2x" color="white" />
                <FontAwesomeIcon icon={faHouse} size="2x" color="white" onClick={() => router.push('/')} />
            </div>
            <div className="right-wrap">
                <input />
            </div>
        </div>
    );
};

export default Header;
