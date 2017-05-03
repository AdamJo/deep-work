import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { DayChart } from 'components';

//todo testing
let date = new Date();
date = date.toString().split(' ').slice(1, 4).join(' ');

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
  viewType: 'Day',
  workDates: {},
  workHover: false,
  hourRange: {
    min: 8,
    max: 18,
  },
};
