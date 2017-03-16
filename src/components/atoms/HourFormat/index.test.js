import React from 'react';
import { shallow } from 'enzyme';
import HourFormat from '.';

const wrap = (props = {}) => shallow(<HourFormat {...props} />);

it('renders', () => {
  wrap();
});
