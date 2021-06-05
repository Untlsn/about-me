import styled from 'styled-components';
import { WrapperProps } from '@atoms/Cell/types';

export const Wrapper = styled.div<WrapperProps>`
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  height: 100%;
  width: 100%;
  
  font-size: 48px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  flex-direction: ${({ orientation }) => orientation == 'vertical' && 'column' };
`;