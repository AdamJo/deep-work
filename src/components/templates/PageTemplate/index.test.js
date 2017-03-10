import React from 'react';
import { mount, shallow } from 'enzyme';
import PageTemplate from '.';

it('renders', (props = {}) => {
  shallow(
    <PageTemplate header="header" footer="footer" {...props}>
      test
    </PageTemplate>,
  );
});
