import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Button } from 'components';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Secondary palette', () => (
    <Button palette="secondary">Secondary</Button>
  ))
  .add('Tertiary palette', () => (
    <Button palette="tertiary">Tertiary</Button>
  ))
  .add('Danger palette', () => (
    <Button palette="danger">Danger</Button>
  )).add('Success palette', () => (
    <Button palette="success">Success</Button>
  )).add('Greyscale palette', () => (
    <Button palette="greyscale">Greyscale</Button>
  )).add('Danger palette', () => (
    <Button palette="danger">Danger</Button>
  ));



