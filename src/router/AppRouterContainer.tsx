import React from 'react';
import AppRouterPresenter from './AppRouterPresenter';

interface Props {}

//타스는 받는쪽에서 데이터 프롭스를 미리 지정해줘야함
const AppRouterContainer: React.FC<Props> = () => {
  return <AppRouterPresenter />;
};

export default AppRouterContainer;
