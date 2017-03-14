import React from 'react';
import { shallow } from 'enzyme';
import Hours from '.';

const wrap = (props = {}) => shallow(<Hours {...props} />);

it('renders', () => {
  wrap();
});
