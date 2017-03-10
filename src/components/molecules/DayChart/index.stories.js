import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { DayChart } from 'components';

storiesOf('DayChart', module).add('default', () => (
  <DayChart updateWorkDate={() => console.log('done')}>default</DayChart>
));
