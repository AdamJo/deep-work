import React from 'react';
import { shallow } from 'enzyme';
import DateWrapper from '.';

const wrap = (props = {}) => shallow(<DateWrapper {...props} />);

it('renders', () => {
  wrap();
});
