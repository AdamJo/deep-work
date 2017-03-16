import React from 'react';
import { shallow } from 'enzyme';
import TimeFormat from '.';

const wrap = (props = {}) => shallow(<TimeFormat {...props} />);

it('renders', () => {
  wrap();
});
