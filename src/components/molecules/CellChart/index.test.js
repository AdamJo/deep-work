import React from 'react';
import { shallow } from 'enzyme';
import CellChart from '.';

const wrap = (props = {}) => shallow(<CellChart {...props} />);

it('renders', () => {
  wrap();
});
