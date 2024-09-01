import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  addProp?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, addProp = "" }) => {
  return (
    <button onClick={onClick} className={`px-1 py-0 pb-1 border border-yellow-500 rounded font-medium ${addProp}`}>
      {children}
    </button>
  );
}

export default Button;