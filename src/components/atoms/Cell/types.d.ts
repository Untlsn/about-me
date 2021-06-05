import { IconType } from 'react-icons';

export interface WrapperProps {
  color: string
  bgColor: string
  orientation: 'vertical'|'horizontal'
}

export interface CellProps extends WrapperProps {
  icons: IconType[]
}