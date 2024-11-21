'use client';
import React, { useState } from 'react';
import Modal from './index';
import API from '@/app/_apis';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { TYPE } from '../types';
import { RootState } from '../../../../type';

const LoginModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { modal, confirmModal, auth } = useSelector((state: RootState) => {
    return {
      modal: state.modals.modal,
      auth: state.auth,
      confirmModal: state.modals.confirmModal,
    };
  });
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [errmsg, setErrmsg] = useState('');

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setErrmsg('');
  };

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
    setErrmsg('');
  };

  const handleLogin = () => {
    API.auth
      .postLogin({ userId: id, password: pwd })
      .then(async (res) => {
        setErrmsg('');
        dispatch({
          type: TYPE.CLOSE_MODAL,
        });
        dispatch({
          type: TYPE.LOGIN_SUCCESS,
          payload: res,
        });
        toast(`${res.user.name}님, 안녕하세요!`);
      })
      .catch((err) => {
        if (err.code === '01') setPwd('');
        setErrmsg(err.msg);
      });
  };

  const handleSignupModal = () => {
    dispatch({
      type: TYPE.OPEN_MODAL,
      data: {
        type: 'signUp',
        title: '회원가입',
      },
    });
  };

  return (
    <>
      <div className="input-wrap">
        <input
          value={id}
          className="login-input id"
          type="text"
          placeholder="ID"
          onChange={handleIdChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleLogin();
          }}
        />
        <input
          value={pwd}
          className="login-input password"
          type="password"
          placeholder="Password"
          onChange={handlePwdChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleLogin();
          }}
        />
      </div>
      {errmsg !== '' && <h5 className="error login-msg">{errmsg}</h5>}
      <div className="login-signup-wrap">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="signup-container">
          <h6>아직 회원이 아니신가요?</h6>
          <button className="signup-button" onClick={handleSignupModal}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
