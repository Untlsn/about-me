import React from 'react';
import { Meta, Story } from '@storybook/react';
import Cell, { CellProps }  from './index';
import { FaDesktop, FaKeyboard } from 'react-icons/fa';

export default {
  title: 'Atoms/Cell',
} as Meta;


const Default: Story<CellProps> = (props) => {
  const style = props.orientation == 'vertical'
    ? { width: 100, height: 210 }
    : { width: 210, height: 100 };

  props.icons = [FaDesktop, FaKeyboard];

  return (
    <div style={style}>
      <Cell {...props} />
    </div>
  );
};

export const Vertical = Default.bind({});
Vertical.args = {
  orientation: 'vertical',
  color: '#32475B',
  bgColor: '#3FB27F',
};

export const Horizontal = Default.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  color: '#32475B',
  bgColor: '#3FB27F',
};