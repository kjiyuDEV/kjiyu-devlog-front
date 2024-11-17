'use client'; // Client Component로 설정

import { useEffect, useState, Suspense } from 'react';
import { PostDetail } from '../../../type';
import API from '../_apis';
import { useSearchParams } from 'next/navigation';
import Footer from '../_components/footer/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

const PostPageContent = () => {
    const [post, setPost] = useState<PostDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const postId = searchParams.get('id'); // URL 쿼리 파라미터에서 ID 가져오기

    useEffect(() => {
        const fetchPost = async () => {
            if (!postId) {
                console.error('Post ID is missing');
                setLoading(false);
                return;
            }

            try {
                const response = await API.post.getPostDetail(postId); // ID에 해당하는 포스트 데이터 가져오기
                setPost(response);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) {
        return <div>Loading...</div>; // 로딩 중 표시
    }

    if (!post) {
        return <div>Post not found</div>; // 포스트가 없을 경우 표시
    }

    return (
        <>
            <div className="detail-wrapper">
                <p className="category">{post.category.categoryName}</p>
                <h2 className="title">{post.title}</h2>
                <div className="info-wrap">
                    <p className="date">{post.date}</p>
                    <span className="separator">|</span>
                    <p className="views">조회수 {post.views}</p>
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: post.contents }} />
            </div>
        </>
    );
};

const PostPage = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <PostPageContent />
                <Footer>
                    <div className="right-wrap">
                        <p className="likes_cmt">
                            <div className="likes">
                                <FontAwesomeIcon icon={faHeart} />
                                {1}
                            </div>
                            <div className="cmt">
                                <FontAwesomeIcon icon={faComment} />
                                {2}
                            </div>
                        </p>
                    </div>
                </Footer>
            </Suspense>
        </>
    );
};

export default PostPage;
