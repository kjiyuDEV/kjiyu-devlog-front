'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../type';
import LoginModal from './_components/modals/LoginModal';
import { TYPE } from './_components/types';
import SignUpModal from './_components/modals/SignUpModal';

export default function Home() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { modal, auth } = useSelector((state: RootState) => {
        return {
            modal: state.modals.modal,
            auth: state.auth,
        };
    });

    const handleLoginModal = () => {
        if (auth.isAuthenticated) {
            dispatch({
                type: TYPE.OPEN_CONFIRM_MODAL,
                data: {
                    type: 'logout',
                    content: '로그아웃 하시겠어요?',
                },
            });
        }
        if (!auth.isAuthenticated) {
            dispatch({
                type: TYPE.OPEN_MODAL,
                data: {
                    type: 'login',
                    title: 'Login',
                },
            });
        }
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

    return (
        <div className="main-wrapper">
            <div className="main-wrap">
                <h1>Kjiyu-dev-log</h1>
                <h3>frontend-developer</h3>
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
                        handleLoginModal();
                    }}
                >
                    {auth.isAuthenticated ? 'Logout' : 'Login'}
                </button>
                <div className="new-container">
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
                        className="just-view"
                        onClick={() => {
                            router.push('/list');
                        }}
                    >
                        {!auth.isAuthenticated ? 'Just View' : 'Go List'}
                    </p>
                </div>
            </div>
            {modal.data.type === 'login' && <LoginModal />}
            {modal.data.type === 'signUp' && <SignUpModal />}
        </div>
    );
}
