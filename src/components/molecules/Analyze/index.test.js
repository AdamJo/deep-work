import React from 'react';
import { shallow } from 'enzyme';
import Analyze from '.';

const wrap = (props = {}) => shallow(<Analyze {...props} />);

it('renders', () => {
  wrap();
});
