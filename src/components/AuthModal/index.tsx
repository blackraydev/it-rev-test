import React, { useCallback, useMemo, useState } from 'react';
import { GlobalValues } from '../../constants/globalValues';
import { InputTypes } from '../../constants/inputTypes';
import { IUser } from '../../models/IUser';
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';
import * as UI from './styles';

const AuthModal: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const submitDisabled = useMemo(() => !login || !password, [login, password]);

  const sumbitAuthHandler = useCallback(() => {
    const user: IUser = { login, password };
    console.log(JSON.stringify(user));
  }, [login, password]);

  const closeModalHandler = useCallback(() => {
    setLogin('');
    setPassword('');
    setModalOpened(false);
  }, []);

  const openModalHandler = useCallback(() => setModalOpened(true), []);

  return (
    <UI.BlockWrapper>
      {modalOpened ? (
        <Modal onSubmit={sumbitAuthHandler} onCancel={closeModalHandler} submitDisabled={submitDisabled}>
          <Input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder={GlobalValues.LOGIN}
            label={GlobalValues.LOGIN}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={GlobalValues.PASSWORD}
            label={GlobalValues.PASSWORD}
            type={InputTypes.PASSWORD}
            maxLength={4}
            rules={{ digitsOnly: true }}
          />
        </Modal>
      ) : (
        <UI.OpenFormText onClick={openModalHandler}>Open Authorization Form</UI.OpenFormText>
      )}
    </UI.BlockWrapper>
  );
};

export default AuthModal;
