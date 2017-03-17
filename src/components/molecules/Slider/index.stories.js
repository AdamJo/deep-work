import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Slider } from 'components';

const hourRange = {
  min: 1,
  max: 20,
};

const workHourRange = () => {
  console.log('here');
};

storiesOf('Slider', module).add('default', () => (
  <Slider
    hourRange={hourRange}
    workHourRange={workHourRange}
    timeFormat={'12'}
  />
));
