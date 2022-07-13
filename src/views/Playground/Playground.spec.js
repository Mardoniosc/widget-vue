import { mount } from '@vue/test-utils'
import Playground from './index.vue'

describe('<Playground />', () => {
  it('Deve renderizar o componente corretamente', () => {
    const wrapper = mount(Playground)
    expect(wrapper).toMatchSnapshot()
  })
})
