'use client';
import React from 'react';
import Modal from './index';

const LoginModal = () => {
  return (
    <Modal>
      <div className="input-wrap">
        <input className="login-input id" type="text" placeholder="ID" />
        <input
          className="login-input password"
          type="password"
          placeholder="Password"
        />
      </div>
      {/* <h5 className="error login-msg">에러메세지 노출 영역입니다</h5> */}
      <button className="login-button">Login</button>
    </Modal>
  );
};

export default LoginModal;
