import { shallow } from 'enzyme'
import Title from './Title'

describe('Title', () => {

  let cmp

  beforeAll(() => {
    cmp = shallow(<Title />)
  })

  it('Renders', () => {
    expect(cmp).not.toBeUndefined()
  })

  it('Displays the title text', () => {
    expect(cmp.text()).toMatch(/Hello World/)
  })
})
