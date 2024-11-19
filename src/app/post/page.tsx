'use client'; // Client Component로 설정

import { useEffect, useState, Suspense, useMemo, useCallback } from 'react';
import { Comment, PostDetail, RootState } from '../../../type';
import API from '../_apis';
import { useSearchParams } from 'next/navigation';
import Footer from '../_components/footer/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isDesktop } from 'react-device-detect';

const PostPageContent = () => {
    const { auth } = useSelector((state: RootState) => ({
        auth: state.auth,
    }));
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<PostDetail | null>(null);
    const [cmtLists, setCmtLists] = useState<Comment[]>([]);
    const [cmtOpen, setCmtOpen] = useState(false);
    const [commentsFetched, setCommentsFetched] = useState(false);
    const likes = post ? post.likes.length : 0;
    const comments = post ? post.comments.length : 0;
    const myLike = useMemo(() => {
        if (!post) return 0;
        return post.likes.includes(auth.user.id) ? true : false;
    }, [post]);

    const searchParams = useSearchParams();
    const postId = searchParams.get('id');

    const handleLike = async (id: string) => {
        if (auth.isAuthenticated) {
            try {
                const response = await API.post.postLike(id, {
                    userId: auth.user.id,
                    token: auth.token,
                });
                setPost(response);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        } else {
            toast('로그인 후 이용해주세요.');
        }
    };

    // 모바일 fnc
    const handleCmtModal = () => {
        console.log('handlePostModal');
    };

    // 데스크탑 fnc
    const handleCmtOpen = () => {
        setCmtOpen(!cmtOpen);
        if (!cmtOpen) {
            handleCmtFetch();
        }
    };

    const handleCmtFetch = useCallback(async () => {
        if (commentsFetched) return;
        try {
            const response = post && (await API.post.getPostComments(post._id));
            setCommentsFetched(true);
            if (response) {
                setCmtLists(response); // 댓글 목록 업데이트
            }
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    }, [post, auth, commentsFetched]);

    useEffect(() => {
        const fetchPost = async () => {
            if (!postId) {
                console.error('Post ID is missing');
                setLoading(false);
                return;
            }
            try {
                const response = await API.post.getPostDetail(postId);
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
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
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
                {isDesktop && (
                    <div className="like-cmt-wrap">
                        <button
                            className={`likes ${myLike ? 'mylike' : ''}`}
                            onClick={() => handleLike(post._id)}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                            {likes}
                        </button>
                        <button
                            className={`cmt ${cmtOpen ? 'cmtOpen' : ''}`}
                            onClick={handleCmtOpen}
                        >
                            <FontAwesomeIcon icon={faComment} />
                            {comments}
                        </button>
                    </div>
                )}
                {cmtOpen && (
                    <div className="content cmt-wrap">
                        <div className="cmt-header">댓글</div>
                        {cmtLists.map((v) => {
                            return (
                                <div key={v._id} className="cmt-container">
                                    <p className="creator">{v.creatorName}</p>
                                    <p className="date">{v.date}</p>
                                    <p className="contents">{v.contents}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <Footer>
                <div className="right-wrap">
                    <p className="likes_cmt">
                        <div className="likes" onClick={() => handleLike(post._id)}>
                            <FontAwesomeIcon icon={faHeart} />
                            {likes}
                        </div>
                        <div className="cmt onClick={handleCmtModal}">
                            <FontAwesomeIcon icon={faComment} />
                            {comments}
                        </div>
                    </p>
                </div>
            </Footer>
        </>
    );
};

const PostPage = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <PostPageContent />
            </Suspense>
        </>
    );
};

export default PostPage;
