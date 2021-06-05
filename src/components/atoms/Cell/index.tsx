import React from 'react';
import * as S from './style';
import { CellProps } from './types';

const Cell = ({ icons, ...forWrapper }: CellProps) => {
  return (
    <S.Wrapper {...forWrapper}>
      {icons.map(
        (Icon, key) => <Icon key={key} />,
      )}
    </S.Wrapper>
  );
};

export default Cell;
export { CellProps } from './types.d';