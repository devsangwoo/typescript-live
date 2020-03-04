import React from 'react';

interface Props {
  type?: string;
  placeholder?: string; //반드시 받지않아도되는값은 기본값을 프롭스에서 섫정
  value: any; //반드시 받아야하는깞
  name: string;
  onChange: any; //함수는 애니로줌
}

const Input: React.FC<Props> = ({ type = 'text', value, placeholder = 'name', name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      style={{ width: '100%', display: 'block', marginBottom: '10px' }}
      onChange={onChange}
    ></input>
  );
};

export default Input;
