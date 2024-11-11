'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment, faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Category, Post } from '../../../type';
import API from '../_apis';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
    const router = useRouter();
    const [posts, setPosts] = useState<Post[]>([]);
    const [ctgr, setCtgr] = useState<Category[]>([]);
    const [crntCtgr, setCrntCtgr] = useState('all');

    const handleCrntCtgr = async (id: string) => {
        setCrntCtgr(id); // 현재 카테고리 설정

        try {
            const res = await API.post.getPosts(id);
            setPosts(res.postsList);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData = async () => {
        try {
            const res = await API.post.getPosts('all'); // API를 통해 포스트 목록 가져오기
            setPosts(res.postsList); // 포스트 목록 설정
            setCtgr([{ categoryName: '전체', _id: 'all' }, ...res.categoryFindResult]); // 카테고리 설정
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="wrapper">
            <div className="ctgr-wrap">
                {ctgr.map((v) => {
                    return (
                        <p className={`pointer ${crntCtgr === v._id ? 'active' : ''}`} onClick={() => handleCrntCtgr(v._id)}>
                            {v.categoryName}
                        </p>
                    );
                })}
            </div>
            <div className="list-wrap">
                {posts.map((v) => {
                    return (
                        <div className="list-container">
                            <h4 className="title">{v.title}</h4>
                            <div className="info">
                                <p className="category">{ctgr.find((ctgrV) => ctgrV._id === v.category)?.categoryName}</p>
                                <p className="date">{v.date}</p>
                                <p className="likes_cmt">
                                    <div className="likes">
                                        <FontAwesomeIcon icon={faHeart} />
                                        {v.likes.length}
                                    </div>
                                    <div className="cmt">
                                        <FontAwesomeIcon icon={faComment} />
                                        {v.comments.length}
                                    </div>
                                </p>
                            </div>
                            <div className="content">{v.previewContents}</div>
                            <button className="read" onClick={() => router.push(`/post/${v._id}`)}>
                                Read more
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
