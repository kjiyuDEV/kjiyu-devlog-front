'use client'; // Client Component로 설정

import { useEffect, useState, Suspense, useMemo } from 'react';
import { PostDetail, RootState } from '../../../type';
import API from '../_apis';
import { useSearchParams } from 'next/navigation';
import Footer from '../_components/footer/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const PostPageContent = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<PostDetail | null>(null);
  const likes = useMemo(() => {
    return post ? post.likes.length : 0;
  }, [post]);
  const comments = useMemo(() => {
    return post ? post.comments.length : 0;
  }, [post]);

  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  const { auth } = useSelector((state: RootState) => ({
    auth: state.auth,
  }));

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

  const handleCmtModal = () => {
    console.log('handlePostModal');
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
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.contents }}
        />
      </div>
      <Footer>
        <div className="right-wrap">
          <p className="likes_cmt">
            <div className="likes">
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleLike(post._id)}
              />
              {likes}
            </div>
            <div className="cmt">
              <FontAwesomeIcon icon={faComment} onClick={handleCmtModal} />
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
