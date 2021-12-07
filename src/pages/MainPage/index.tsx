import React from 'react';
import AuthModal from '../../components/AuthModal';
import * as UI from './styles';

const MainPage: React.FC = () => {
  return (
    <UI.PageWrapper>
      <AuthModal />
    </UI.PageWrapper>
  );
};

export default MainPage;
