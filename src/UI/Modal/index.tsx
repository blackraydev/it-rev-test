import React from 'react';
import { GlobalValues } from '../../constants/globalValues';
import Button from '../Button';
import * as UI from './styles';

interface IModalProps {
  children: React.ReactNode;
  onSubmit: () => void;
  onCancel: () => void;
  submitDisabled: boolean;
}

const Modal: React.FC<IModalProps> = ({ children, onSubmit, onCancel, submitDisabled }) => {
  return (
    <UI.ModalWrapper>
      <UI.Modal>
        {children}
        <UI.ButtonsWrapper>
          <Button value={GlobalValues.LOGIN} onClick={onSubmit} disabled={submitDisabled} />
          <Button value={GlobalValues.CANCEL} onClick={onCancel} />
        </UI.ButtonsWrapper>
      </UI.Modal>
    </UI.ModalWrapper>
  );
};

export default Modal;
