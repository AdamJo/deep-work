import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ChartMenu } from 'components';

storiesOf('ChartMenu', module).add('default', () => (
  <ChartMenu chart={{viewType: 'day'}} chartView={() => console.log('done')}>default</ChartMenu>
));
