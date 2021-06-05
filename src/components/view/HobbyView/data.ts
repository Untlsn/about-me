import { CellProps } from '@atoms/Cell';

import * as Fa from 'react-icons/fa';

interface GridCellProps extends CellProps {
  $rows: number[]
  $columns: number[]
}

export const gridCellsProps: GridCellProps[] = [
  {
    $columns: [1, 2],
    $rows: [1, 3],
    color: '#32475B',
    bgColor: '#3FB27F',
    orientation: 'vertical',
    icons: [Fa.FaDesktop, Fa.FaKeyboard],
  },
  {
    $columns: [2, 4],
    $rows: [1, 2],
    color: '#DED9C9',
    bgColor: '#CA051D',
    orientation: 'horizontal',
    icons: [Fa.FaGuitar, Fa.FaMusic],
  },
  {
    $columns: [2, 4],
    $rows: [2, 3],
    color: '#13C4A2',
    bgColor: '#1D302C',
    orientation: 'horizontal',
    icons: [Fa.FaBrain, Fa.FaAtom],
  },
  {
    $columns: [1, 3],
    $rows: [3, 4],
    color: '#FF0000',
    bgColor: '#F7F7F7',
    orientation: 'horizontal',
    icons: [Fa.FaCircle],
  },
  {
    $columns: [1, 3],
    $rows: [4, 5],
    color: '#EDAF60',
    bgColor: '#4D1A00',
    orientation: 'horizontal',
    icons: [Fa.FaBookOpen, Fa.FaPenFancy],
  },
  {
    $columns: [3, 4],
    $rows: [3, 5],
    color: '#6C5155',
    bgColor: '#5EB642',
    orientation: 'vertical',
    icons: [Fa.FaDrumstickBite, Fa.FaSeedling],
  },
];