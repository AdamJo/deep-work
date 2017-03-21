import React from 'react';
import { shallow } from 'enzyme';
import WeekChart from '.';

const wrap = (props = {}) => shallow(<WeekChart {...props} />);

it('renders', () => {
  wrap();
});
