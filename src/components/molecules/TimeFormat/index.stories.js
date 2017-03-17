import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { TimeFormat } from 'components';

const updateTimeFormat = format => {
  return console.log('Update Time Format', format);
};

storiesOf('TimeFormat', module).add('default', () => (
  <TimeFormat updateTimeFormat={updateTimeFormat}>default</TimeFormat>
));
