/* global describe,test,expect */

import { mount } from '@vue/test-utils'
import Picker from '@/Picker'
import { cascadeOptions } from '../../Picker/data'

describe('Picker', () => {
  test('should render prop set options correctly', () => {
    const wrapper = mount(Picker, {
      propsData: {
        options: cascadeOptions
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
