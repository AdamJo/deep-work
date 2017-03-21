import React from 'react';
import { shallow } from 'enzyme';
import WeekDays from '.';

const wrap = (props = {}) => shallow(<WeekDays {...props} />);

it('renders', () => {
  wrap();
});
