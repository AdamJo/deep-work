import React from 'react';
import { shallow } from 'enzyme';
import HoverWork from '.';

const wrap = (props = {}) => shallow(<HoverWork {...props} />);

it('renders', () => {
  wrap();
});
