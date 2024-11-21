'use client'; // Client Component로 설정

import { useEffect, useState, Suspense, useMemo, useCallback } from 'react';
import { Comment, PostDetail, RootState } from '../../../type';
import API from '../_apis';
import { useSearchParams } from 'next/navigation';
import Footer from '../_components/footer/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isDesktop } from 'react-device-detect';
import { TYPE } from '../_components/types';

const PostPageContent = () => {
    const dispatch = useDispatch();
    const { auth, modal } = useSelector((state: RootState) => ({
        auth: state.auth,
        modal: state.modals.modal,
    }));
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<PostDetail | null>(null);
    const [cmtLists, setCmtLists] = useState<Comment[]>([]);
    const [cmtOpen, setCmtOpen] = useState(false);
    const [commentsFetched, setCommentsFetched] = useState(false);
    const [cmtContents, setCmtContents] = useState('');
    const likes = post ? post.likes.length : 0;
    const comments = post ? post.comments.length : 0;
    const myLike = useMemo(() => {
        if (!post) return 0;
        return post.likes.includes(auth?.user?.id) ? true : false;
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
            handleAttemptLogin();
        }
    };

    // 모바일 fnc
    const handleFooterCmt = () => {
        setCmtOpen(true);
        handleCmtFetch().then(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        });
    };

    // 데스크탑 fnc
    const handleCmtOpen = () => {
        setCmtOpen(!cmtOpen);
        if (!cmtOpen) {
            handleCmtFetch();
        }
    };

    const handleCmtFetch = useCallback(async () => {
        try {
            const response = post && (await API.post.getPostComments(post._id));
            setCommentsFetched(!commentsFetched);
            if (response) {
                setCmtLists(response);
            }
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    }, [post, auth, commentsFetched]);

    const handleAttemptLogin = () => {
        toast('로그인 후 이용 가능해요');
        setTimeout(() => {
            if (!auth.isAuthenticated) {
                dispatch({
                    type: TYPE.OPEN_MODAL,
                    data: {
                        type: 'login',
                        title: 'Login',
                    },
                });
            }
        }, 500);
    };

    const handleCmtPost = async (id: string) => {
        const params = {
            contents: cmtContents,
            userId: auth.user.id,
            userName: auth.user.name,
            id: post?._id,
        };
        await API.post.postComments(id, params).then((res) => {
            setPost(res); // const comments 길이
            handleCmtFetch(); // cmtList 길이
            toast('댓글을 작성했어요');
        });
    };

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
                <div className="like-cmt-wrap">
                    <button
                        className={`likes ${myLike ? 'mylike' : ''}`}
                        onClick={() => handleLike(post._id)}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        {likes}
                    </button>
                    <button className={`cmt ${cmtOpen ? 'cmtOpen' : ''}`} onClick={handleCmtOpen}>
                        <FontAwesomeIcon icon={faComment} />
                        {comments}
                    </button>
                </div>
                {cmtOpen && (
                    <div className="content cmt-wrap">
                        <div className="cmt-header">댓글</div>
                        {cmtLists.length === 0 && <div className="no-cmt">댓글이 없습니다.</div>}
                        {cmtLists.length > 0 &&
                            cmtLists.map((v) => {
                                return (
                                    <div key={v._id} className="cmt-container">
                                        <p className="creator">{v.creatorName}</p>
                                        <p className="date">{v.date}</p>
                                        <p className="contents">{v.contents}</p>
                                    </div>
                                );
                            })}

                        <div className="input-wrap">
                            <input
                                value={cmtContents}
                                onChange={(e) => setCmtContents(e.target.value)}
                                onClick={!auth.isAuthenticated ? handleAttemptLogin : () => {}}
                                placeholder={`${
                                    auth.isAuthenticated
                                        ? '내용을 입력해주세요'
                                        : '댓글 작성은 로그인 후 가능합니다'
                                }`}
                            />
                            {auth.isAuthenticated && (
                                <button onClick={() => handleCmtPost(post._id)}>댓글 작성</button>
                            )}
                        </div>
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
                        <div className="cmt" onClick={handleFooterCmt}>
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
