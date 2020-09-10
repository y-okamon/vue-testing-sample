import AsyncSample from '@/components/AsyncSample'
import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'

describe('Testing AsyncSample component', () => {
  it('async test using $nextTick', done => {
    const wrapper = mount(AsyncSample)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.value).toBe('value')
      done()
    })
  })

  it ('async test using await', async () => {
    const wrapper = mount(AsyncSample)
    wrapper.find('button').trigger('click')
    await flushPromises()
    expect(wrapper.vm.value).toBe('value')
  })
})
