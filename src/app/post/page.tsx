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
  const postId = searchParams.get('id');

  const handleLike = async (id: string) => {
    try {
      const response = await API.post.postLike(id);
      setPost(response);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
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
                // onClick={() => handleLike(post._id)}
              />
              {post.likes.length}
            </div>
            <div className="cmt">
              <FontAwesomeIcon icon={faComment} onClick={handleCmtModal} />
              {post.comments.length}
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
