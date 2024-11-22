import {
  faArrowLeft,
  faBars,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../type';
import { TYPE } from '../types';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { postList } = useSelector((state: RootState) => ({
    postList: state.post,
  }));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase().trim();

    const filterPosts = postList.originPostList.filter((post) =>
      post.title.toLowerCase().trim().includes(inputValue)
    );
    dispatch({
      type: TYPE.SET_POSTS,
      postList: filterPosts,
    });
  };

  return (
    <div className="header">
      <div className="left-wrap">
        {/* <FontAwesomeIcon icon={faBars} size="2x" color="white" /> */}
        <FontAwesomeIcon
          icon={faHouse}
          size="2x"
          color="white"
          onClick={() => router.push('/')}
        />
      </div>
      {pathname === '/list' && (
        <div className="right-wrap">
          <input onChange={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Header;
