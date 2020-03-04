import React from 'react';

interface Props {
  disabled?: boolean;
  text: string;
}

const Button: React.FC<Props> = ({ disabled = false, text }) => {
  return (
    <button type="submit" disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
