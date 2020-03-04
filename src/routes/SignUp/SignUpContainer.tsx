import React, { useState } from 'react';
import SignUpPresenter from './SignUpPresenter';

interface Props {}

//타스는 받는쪽에서 데이터 프롭스를 미리 지정해줘야함
const SignUpContainer: React.FC<Props> = () => {
  const [formData, setformData] = useState({ name: '', age: 0, email: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`${formData.name}님 안녕하세요`);
  };
  return (
    <SignUpPresenter handleChange={handleChange} formData={formData} handleSubmit={handleSubmit} />
  );
};

export default SignUpContainer;
