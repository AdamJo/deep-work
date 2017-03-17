import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ToggleButton } from 'components';

const updateTimeFormat = format => {
  return console.log('Update Time Format', format);
};

storiesOf('ToggleButton', module).add('default', () => (
  <ToggleButton updateTimeFormat={updateTimeFormat}>default</ToggleButton>
));
