import React from 'react'
import { mount, shallow } from 'enzyme'
import PageTemplate from '.'

it('renders', () => {
  shallow(<PageTemplate>test</PageTemplate>)
})
