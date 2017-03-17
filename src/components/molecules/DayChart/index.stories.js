import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { DayChart } from 'components';

storiesOf('DayChart', module).add('default', () => (
  <DayChart
    closeWorkHover={() => console.log('close')}
    updateWorkDate={() => console.log('done')}
    openWorkHover={() => console.log('open')}
    hourRange={{ min: 1, max: 24 }}
    chart={chart}
  >
    default
  </DayChart>
));

const chart = {
  format: '12',
  viewType: 'day',
  date: 'Thu Mar 09 2017',
  workHover: false,
  hourRange: {
    min: 8,
    max: 18,
  },
  hours: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ],
};
