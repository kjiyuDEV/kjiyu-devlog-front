import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
    const router = useRouter();
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
