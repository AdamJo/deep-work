import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Charts } from 'components';

const updateTimeFormat = format => {
  return console.log('Update Time Format', format);
};

storiesOf('Charts', module).add('default', () => (
  <Charts
    updateWorkDate={() => console.log('updateWorkDate')}
    openWorkHover={() => console.log('openWorkHover')}
    closeWorkHover={() => console.log('closeWorkHover')}
    chartView={() => console.log('chartView')}
    updateTimeFormat={updateTimeFormat}
    chart={chart}
  >
    default
  </Charts>
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
