import React from 'react';
import * as S from './style';
import { AiOutlineArrowDown } from 'react-icons/ai';

const MainView = () => {
  return (
    <S.Wrapper>
      <S.AboutMe>About Me</S.AboutMe>
      <S.Arrow><AiOutlineArrowDown /></S.Arrow>
    </S.Wrapper>
  );
};

export default MainView;