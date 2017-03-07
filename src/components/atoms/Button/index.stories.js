import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Button } from 'components'

storiesOf('Button', module)
  .add('Default', () => (
    <Button>Default</Button>
  ))

  .add('Secondary palette', () => (
    <Button palette="secondary">Secondary</Button>
  ))