import React from 'react';

interface Props {
  onSubmit: any;
}

const Form: React.FC<Props> = ({ onSubmit, children }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default Form;
