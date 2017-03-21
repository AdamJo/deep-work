import React from 'react';
import { shallow } from 'enzyme';
import MonthChart from '.';

const wrap = (props = {}) => shallow(<MonthChart {...props} />);

it('renders', () => {
  wrap();
});
