import React from 'react';
import { shallow } from 'enzyme';
import Slider from '.';
import Range from 'rc-slider/lib/Range';

const wrap = (props = {}) => shallow(<Slider {...props} />);

it('renders', () => {
  wrap();
});
