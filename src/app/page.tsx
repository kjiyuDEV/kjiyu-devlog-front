'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div className="main-wrapper">
            <div className="main-wrap">
                <h1>Kjiyu-dev-log</h1>
                <h3>frontend-developer</h3>
                <Image src="https://cdn1.iconfinder.com/data/icons/3d-isometric-color/512/computer-iso-color.png" alt="main-illust" width="300" height="300" />
                <p>일상 및 개발일지를 기록 합니다.</p>
                <p>React/Typescript/NextJs, Node</p>
            </div>

            <div className="sign-wrap">
                <button>Login</button>
                <div className="new-container">
                    <p>New here?</p>
                    <button
                        onClick={() => {
                            router.push('/list');
                        }}
                    >
                        Register
                    </button>
                    <p
                        className="just-view"
                        onClick={() => {
                            router.push('/list');
                        }}
                    >
                        Just View
                    </p>
                </div>
            </div>
        </div>
    );
}
