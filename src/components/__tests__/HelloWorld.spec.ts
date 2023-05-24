import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FooterPage from '../FooterPage.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(FooterPage)
    const actualYear = new Date().getFullYear()
    expect(wrapper.text()).toContain(`${actualYear} — George Pereira`)
  })
})
