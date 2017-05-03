import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { HomePage } from 'components';

storiesOf('HomePage', module).add('default', () => (
  <HomePage
    updateWorkDate={() => console.log('updateWorkDate')}
    openWorkHover={() => console.log('openWorkHover')}
    closeWorkHover={() => console.log('closeWorkHover')}
    chartView={() => console.log('chartView')}
    updateTimeFormat={() => console.log('updateTimeFormat')}
    chart={chart}
  />
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
