import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { CellChart } from 'components';

storiesOf('CellChart', module).add('default', () => (
  <CellChart
    hourType={1}
    onMouseDown={() => console.log('onMouseDown')}
    onMouseEnter={() => console.log('onMouseEnter')}
  />
));
