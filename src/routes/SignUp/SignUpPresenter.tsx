import React from 'react';
import Form from 'src/components/Atomes/Form';
import Input from 'src/components/Atomes/Input';
import Button from 'src/components/Button';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    name: string;
    age: number;
    email: string;
    password: string;
  };

  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpPresenter: React.FC<Props> = ({ handleChange, formData, handleSubmit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} placeholder={'gazua'} value={formData.name} name={'name'} />
        <Input onChange={handleChange} value={formData.age} name={'age'} />
        <Input
          onChange={handleChange}
          type={'text'}
          placeholder={'gazua'}
          value={''}
          name={'name'}
        />
        <Input
          onChange={handleChange}
          type={'password'}
          placeholder={'password'}
          value={formData.password}
          name={'name'}
        />
        <Button text={'회원가입'} />
      </Form>
    </>
  );
};

export default SignUpPresenter;
