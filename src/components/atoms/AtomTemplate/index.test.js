import React from 'react';
import { shallow } from 'enzyme';
import AtomTemplate from '.';

const wrap = (props = {}) => shallow(<AtomTemplate {...props} />);

it('renders', () => {
  wrap();
});
