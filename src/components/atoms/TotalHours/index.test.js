import React from 'react';
import { shallow } from 'enzyme';
import TotalHours from '.';

const wrap = (props = {}) => shallow(<TotalHours {...props} />);

it('renders', () => {
  wrap();
});
