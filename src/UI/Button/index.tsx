import React from 'react';
import * as UI from './styles';

interface IButtonProps {
  value: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ value, onClick, disabled }) => {
  return (
    <UI.Button onClick={onClick} disabled={disabled}>
      {value}
    </UI.Button>
  );
};

export default Button;
