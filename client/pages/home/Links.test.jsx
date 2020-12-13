import { shallow } from 'enzyme'
import Links from './Links'
import Link from '../../components/Link'

describe('Links', () => {

  let cmp

  beforeAll(() => {
    cmp = shallow(<Links />)
  })

  it('Renders', () => {
    expect(cmp).not.toBeUndefined()
  })
  
  it('Contains three links', () => {
    expect(cmp.find(Link)).toHaveLength(3)
  })
})
