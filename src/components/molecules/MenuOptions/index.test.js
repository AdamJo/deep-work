import React from 'react';
import { shallow } from 'enzyme';
import MenuOptions from '.';

const wrap = (props = {}) => shallow(<MenuOptions {...props} />);

it('renders', () => {
  wrap();
});
