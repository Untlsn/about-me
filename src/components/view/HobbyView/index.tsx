import React from 'react';
import * as S from './style';
import { gridCellsProps } from '@view/HobbyView/data';

const HobbyView = () => {

  return (
    <S.Wrapper>
      <S.BigText>Zainteresowania</S.BigText>
      <S.CellWrapper>
        {gridCellsProps.map(
          (props) => <S.GridCell {...props} key={props.bgColor} />,
        )}
      </S.CellWrapper>
    </S.Wrapper>
  );
};

export default HobbyView;