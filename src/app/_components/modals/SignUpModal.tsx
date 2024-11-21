import React, { useState } from 'react';
import Modal from '.';
import API from '@/app/_apis';
import { useDispatch } from 'react-redux';
import { TYPE } from '../types';
import { toast } from 'react-toastify';

const SignUpModal = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    nickname: '',
    id: '',
    password1: '',
    password2: '',
  });
  const [errmsg, setErrmsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrmsg('');
    setInput({ ...input, [e.target.name]: e.target.value });

    if (e.target.name === 'password2') {
      if (input.password1 && e.target.value !== input.password1) {
        setErrmsg('비밀번호가 일치하지 않습니다.'); // 비밀번호 불일치 오류 메시지
      }
    }
  };

  const handleSubmit = async () => {
    if (input.password1 !== input.password2) {
      return setErrmsg('비밀번호가 일치하지 않습니다.'); // 비밀번호 불일치 오류 메시지
    }
    const params = {
      userId: input.id,
      name: input.name,
      password: input.password2,
      nickname: input.nickname,
    };
    await API.auth
      .postSignUp(params)
      .then((res) => {
        dispatch({
          type: TYPE.CLOSE_MODAL,
          payload: res,
        });
        dispatch({
          type: TYPE.LOGIN_SUCCESS,
          payload: res,
        });
        toast.success('회원가입이 완료되었습니다.');
      })
      .catch((err) => {
        setErrmsg(err.msg);
      });
  };

  return (
    <>
      <div className="input-wrap signup">
        <input
          value={input.name}
          className="login-input name"
          type="text"
          placeholder="이름 (Name, 특수문자 및 숫자 제외 가능)"
          name="name"
          onChange={handleInputChange}
        />
        <input
          value={input.nickname}
          className="login-input name"
          type="text"
          placeholder="별명 (Nickname, 공백시 이름과 동일)"
          name="nickname"
          onChange={handleInputChange}
        />
        <input
          value={input.id}
          className="login-input id"
          type="text"
          placeholder="아이디 (id)"
          name="id"
          onChange={handleInputChange}
        />
        <input
          value={input.password1}
          className="login-input password"
          type="password"
          placeholder="비밀번호 (password)"
          name="password1"
          onChange={handleInputChange}
        />
        <input
          value={input.password2}
          className="login-input password"
          type="password"
          placeholder="비밀번호 확인 (password check)"
          name="password2"
          onChange={handleInputChange}
        />
      </div>
      {errmsg !== '' && <h5 className="error login-msg">{errmsg}</h5>}
      <button className="login-button" onClick={handleSubmit}>
        등록하기
      </button>
    </>
  );
};

export default SignUpModal;
