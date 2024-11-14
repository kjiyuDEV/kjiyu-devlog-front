'use client'; // Client Component로 설정

import { useEffect, useState } from 'react';
import API from '../../_apis'; // API 경로를 확인하세요
import { PostDetail } from '../../../../type'; // PostDetail 타입을 정의하세요

interface PostPageProps {
    params: {
        id: string;
    };
}

const PostPage = ({ params }: PostPageProps) => {
    const [post, setPost] = useState<PostDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await API.post.getPostDetail(params.id); // ID에 해당하는 포스트 데이터 가져오기
                setPost(response);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>; // 로딩 중 표시
    }

    if (!post) {
        return <div>Post not found</div>; // 포스트가 없을 경우 표시
    }

    return (
        <div className="detail-wrapper">
            <p className="category">{post.category.categoryName}</p>
            <h2 className="title">{post.title}</h2>
            <div className="info-wrap">
                <p className="date">{post.date}</p>
                <span className="separator">|</span> {/* 구분자 추가 */}
                <p className="views">조회수 {post.views}</p>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.contents }} />
            {/* <p>작성자: {post.creator.name}</p> */}
            {/* <p>조회수: {post.views}</p> */}
        </div>
    );
};

export default PostPage;
