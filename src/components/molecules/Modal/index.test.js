import React from 'react';
import { shallow } from 'enzyme';
import Modal from '.';

const wrap = (props = {}) => shallow(<Modal {...props} />);

it('renders', () => {
  wrap();
});
