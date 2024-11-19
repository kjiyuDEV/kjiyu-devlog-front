import React, { useState } from 'react';
import Modal from '.';

const SignUpModal = () => {
  const [input, setInput] = useState({
    name: '',
    nickname: '',
    id: '',
    password1: '',
    password2: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Modal>
      <div className="input-wrap signup">
        <input
          value={input.name}
          className="login-input name"
          type="text"
          placeholder="이름 (Name, 특수문자 및 숫자 제외 가능)"
          onChange={handleInputChange}
        />
        <input
          value={input.nickname}
          className="login-input name"
          type="text"
          placeholder="별명 (Nickname, 공백시 이름과 동일)"
          onChange={handleInputChange}
        />
        <input
          value={input.id}
          className="login-input id"
          type="text"
          placeholder="아이디 (id)"
          onChange={handleInputChange}
        />
        <input
          value={input.password1}
          className="login-input password"
          type="password"
          placeholder="비밀번호 (password)"
          onChange={handleInputChange}
        />
        <input
          value={input.password2}
          className="login-input password"
          type="password"
          placeholder="비밀번호 확인 (password check)"
          onChange={handleInputChange}
        />
      </div>
      <button className="login-button">등록하기</button>
    </Modal>
  );
};

export default SignUpModal;
