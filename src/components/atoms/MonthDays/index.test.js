import React from 'react';
import { shallow } from 'enzyme';
import MonthDays from '.';

const wrap = (props = {}) => shallow(<MonthDays {...props} />);

it('renders', () => {
  wrap();
});
