'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import API from '../_apis';
import { Post, Category, RootState } from '../../../type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

const Page: React.FC = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [ctgr, setCtgr] = useState<Category[]>([]);
  const [crntCtgr, setCrntCtgr] = useState('all');
  const [loading, setLoading] = useState(true);

  const { modal, auth } = useSelector((state: RootState) => ({
    modal: state.modals.modal,
    auth: state.auth,
  }));
  console.log(auth);

  const handleCrntCtgr = async (id: string) => {
    setCrntCtgr(id);
    setLoading(true);

    try {
      const res = await API.post.getPosts(id);
      setPosts(res.postsList);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const res = await API.post.getPosts('all');
      setPosts(res.postsList);
      setCtgr([
        { categoryName: '전체', _id: 'all' },
        ...res.categoryFindResult,
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="ctgr-wrap">
        {ctgr.map((v) => (
          <p
            key={v._id}
            className={`pointer ${crntCtgr === v._id ? 'active' : ''}`}
            onClick={() => handleCrntCtgr(v._id)}
          >
            {v.categoryName}
          </p>
        ))}
      </div>
      <div className="list-wrap">
        {posts.map((v) => (
          <div key={v._id} className="list-container">
            <h4 className="title">{v.title}</h4>
            <div className="info">
              <p className="category">
                {ctgr.find((ctgrV) => ctgrV._id === v.category)?.categoryName}
              </p>
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
            <button
              className="read"
              onClick={() => router.push(`/post/?id=${v._id}`)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
