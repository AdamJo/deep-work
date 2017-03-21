import React from 'react';
import { shallow } from 'enzyme';
import YearChart from '.';

const wrap = (props = {}) => shallow(<YearChart {...props} />);

it('renders', () => {
  wrap();
});
