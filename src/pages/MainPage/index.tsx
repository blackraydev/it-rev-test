import React from 'react';
import AuthBlock from '../../components/AuthBlock';
import * as UI from './styles';

const MainPage: React.FC = () => {
  return (
    <UI.PageWrapper>
      <AuthBlock />
    </UI.PageWrapper>
  );
};

export default MainPage;
