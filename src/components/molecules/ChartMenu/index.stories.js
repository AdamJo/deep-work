import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ChartMenu } from 'components';

const updateTimeFormat = format => {
  return console.log('Update Time Format', format);
};

storiesOf('ChartMenu', module).add('default', () => (
  <ChartMenu
    chart={{ viewType: 'day' }}
    chartView={() => console.log('done')}
    updateTimeFormat={updateTimeFormat}
  >
    default
  </ChartMenu>
));
