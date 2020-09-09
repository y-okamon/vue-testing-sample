import App from '@/App.vue'
import { mount } from '@vue/test-utils'

describe('Testing App component', () => {
  // 1つ目のテスト
  it('checks textcontent to Hello', () => {
    const wrapper = mount(App)
    // wrapper.element.textContent => 'Hello'
    expect(wrapper.element.textContent).toBe('Hello')
  })

  // ２つ目のテスト
  it('checks textcontent to Hello!', () => {
    // mount()の第二引数でdataを渡すことができる
    const wrapper = mount(App, {
      data: function() {
        return {
          msg: 'Hello!' // msgプロパティを'Hello!'に置き換える
        }
      }
    })
    expect(wrapper.element.textContent).toBe('Hello!')
  })
})
