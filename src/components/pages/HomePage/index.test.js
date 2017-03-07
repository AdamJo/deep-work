import React from 'react'
import { mount, shallow } from 'enzyme'
import HomePage from '.'

it('renders', () => {
  shallow(<HomePage />)
})

it('mounts', () => {
  mount(<HomePage/>)
})
