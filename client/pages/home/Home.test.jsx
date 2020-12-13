import { shallow } from 'enzyme'
import Home from './Home'
import Title from './Title'
import Links from './Links'

describe('Links', () => {

  let cmp

  beforeAll(() => {
    cmp = shallow(<Home />)
  })

  it('Renders', () => {
    expect(cmp).not.toBeUndefined()
  })

  it('Contains the Title component', () => {
    expect(cmp.find(Title)).toHaveLength(1)
  })

  it('Contains the Links component', () => {
    expect(cmp.find(Links)).toHaveLength(1)
  })
})
