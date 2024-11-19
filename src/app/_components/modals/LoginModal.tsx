'use client';
import React, { useState } from 'react';
import Modal from './index';
import API from '@/app/_apis';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginModal = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [errmsg, setErrmsg] = useState('');

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(e.target.value);
    };

    const handleLogin = async () => {
        await API.auth
            .postLogin({ userId: id, password: pwd })
            .then((res) => {
                setErrmsg('');
                dispatch({
                    type: 'CLOSE_MODAL',
                });
                router.push('/list');
                toast(`${res.user.name}님, 안녕하세요!`);
                return res;
            })
            .catch((err) => {
                if (err.code === '01') setPwd('');
                setErrmsg(err.msg);
            });
    };

    return (
        <Modal>
            <div className="input-wrap">
                <input value={id} className="login-input id" type="text" placeholder="ID" onChange={handleIdChange} />
                <input value={pwd} className="login-input password" type="password" placeholder="Password" onChange={handlePwdChange} />
            </div>
            {errmsg !== '' && <h5 className="error login-msg">{errmsg}</h5>}
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
        </Modal>
    );
};

export default LoginModal;
