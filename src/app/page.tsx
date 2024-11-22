'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../type';
import LoginModal from './_components/modals/LoginModal';
import { TYPE } from './_components/types';
import SignUpModal from './_components/modals/SignUpModal';
import API from './_apis';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const visits = JSON.parse(localStorage.getItem('visitInit') || '{}');
  const [views, setViews] = useState(0);
  const { modal, auth } = useSelector((state: RootState) => {
    return {
      modal: state.modals.modal,
      auth: state.auth,
    };
  });

  const handleLoginModal = () => {
    dispatch({
      type: TYPE.OPEN_MODAL,
      data: {
        type: 'login',
        title: 'Login',
      },
    });
  };

  const handleSignUpModal = () => {
    if (!auth.isAuthenticated) {
      dispatch({
        type: TYPE.OPEN_MODAL,
        data: {
          type: 'signUp',
          title: '회원가입',
        },
      });
    }
  };

  useEffect(() => {
    // todo 숫자 올라갈때 애니메이션 추가해야함
    const viewUpdate = async (type: string) => {
      const params = {
        type: type,
      };
      await API.visit.fetchVisits(params).then((res) => {
        console.log(res.views);
        setViews(res.views);
      });
    };

    if (!visits?.exTime) {
      const currentDate = new Date();
      const expirationDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1,
        0,
        0,
        0
      ); // 하루 후 만료
      const item = {
        exTime: expirationDate,
      };
      localStorage.setItem('visitInit', JSON.stringify(item));
      viewUpdate('up');
    } else {
      viewUpdate('');
    }
  }, []);

  return (
    <div className="main-wrapper">
      <div className="main-wrap">
        <h1>Kjiyu-dev-log</h1>
        <h3>frontend-developer</h3>
        {views && (
          <h5>
            <p className="main-views">
              <span> {views} visitors</span>
            </p>
          </h5>
        )}
        <Image
          src="https://cdn1.iconfinder.com/data/icons/3d-isometric-color/512/computer-iso-color.png"
          alt="main-illust"
          width="300"
          height="300"
          unoptimized={true}
        />
        <p>일상 및 개발일지를 기록 합니다.</p>
        <p>React/Typescript/NextJs, Node</p>
      </div>

      <div className="sign-wrap">
        <button
          onClick={() => {
            auth.isAuthenticated ? router.push('/list') : handleLoginModal();
          }}
        >
          {auth.isAuthenticated ? 'Go List' : 'Login'}
        </button>
        <div
          className={`new-container ${auth.isAuthenticated ? 'logout-p' : ''}`}
        >
          {!auth.isAuthenticated && (
            <>
              <p>New here?</p>
              <button
                onClick={() => {
                  handleSignUpModal();
                }}
              >
                Register
              </button>
            </>
          )}

          <p
            className={`just-view`}
            onClick={() => {
              !auth.isAuthenticated
                ? router.push('/list')
                : dispatch({
                    type: TYPE.OPEN_CONFIRM_MODAL,
                    data: {
                      type: 'logout',
                      content: '로그아웃 하시겠어요?',
                    },
                  });
            }}
          >
            {!auth.isAuthenticated ? 'Just View' : 'Logout'}
          </p>
        </div>
      </div>
    </div>
  );
}
