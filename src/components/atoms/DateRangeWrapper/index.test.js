import React from 'react';
import { shallow } from 'enzyme';
import DateRangeWrapper from '.';

const wrap = (props = {}) => shallow(<DateRangeWrapper {...props} />);

it('renders', () => {
  wrap();
});
