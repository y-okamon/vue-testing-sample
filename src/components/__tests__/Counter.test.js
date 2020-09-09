import Counter from '@/components/Counter'
import { mount } from '@vue/test-utils'

describe('Testing App component', () => {
  // コンポーネントがマウントされてラッパが作成される
  const wrapper = mount(Counter)

  // コンポーネントの描画されたHTMLの出力をテスト
  it('renders the correct markup', () => {
    // wrapper.html() // "<div id=\"counter\"><span class=\"count\">0</span><button>カウントアップ</button></div>"
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 要素の存在確認
  it('has a button', () => {
    // 非推奨
    // expect(wrapper.contains('button')).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  // ボタンクリックをシミュレート
  it('button click should increment the count', () => {
    // data() { count: 0 } のテスト
    expect(wrapper.vm.count).toBe(0)
    // button要素を探す
    const button = wrapper.find('button')
    // buttonクリック
    button.trigger('click')
    // clickイベントが発火したため data() { count: 1 } になっている事を確認
    expect(wrapper.vm.count).toBe(1)
  })
})
