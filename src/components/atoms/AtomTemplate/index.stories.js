import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AtomTemplate } from 'components'

storiesOf('AtomTemplate', module)
  .add('default', () => (
    <AtomTemplate>default</AtomTemplate>
  ))
