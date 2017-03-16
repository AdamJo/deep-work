import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from '.';

const wrap = (props = {}) => shallow(<ToggleButton {...props} />);

it('renders', () => {
  wrap();
});
