import React from 'react';
import { InputTypes } from '../../constants/inputTypes';
import { IInputRules } from '../../models/IInputRules';
import { InputType } from '../../types/inputType';
import * as UI from './styles';

interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  rules?: IInputRules;
  type?: InputType;
  maxLength?: number;
}

const Input: React.FC<IInputProps> = ({ value, onChange, placeholder, label, rules, type, maxLength }) => {
  const digitsOnlyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!rules || !rules.digitsOnly) return true;

    if ((Number(e.key) >= 0 || Number(e.key) <= 9) && e.key !== ' ') {
      return true;
    }

    return e.preventDefault();
  };

  return (
    <UI.InputWrapper>
      {label && <UI.Label>{label}</UI.Label>}
      <UI.Input
        value={value}
        onChange={onChange}
        onKeyPress={digitsOnlyHandler}
        placeholder={placeholder}
        type={type ? InputTypes.TEXT : type}
        maxLength={maxLength}
      />
    </UI.InputWrapper>
  );
};

export default Input;
