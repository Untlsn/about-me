import styled from 'styled-components';
import Cell from '@atoms/Cell';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #121212;
`;

export const BigText = styled.div`
  font-size: 36px;
  color: white;
`;

export const CellWrapper = styled.div`
  width: 320px;
  height: 430px;
  display: grid;
  gap: 10px;
  
  grid-template-rows: repeat(1fr, 3);
  grid-template-columns: repeat(1fr, 3);
`;

export const GridCell = styled(Cell)<{ $rows: number[], $columns: number[] }>`
  grid-row: ${({ $rows }) => `${$rows[0]} / ${$rows[1]}`};
  grid-column: ${({ $columns }) => `${$columns[0]} / ${$columns[1]}`};
`;
