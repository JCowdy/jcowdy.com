import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {

  let cmp

  beforeAll(() => {
    cmp = shallow(<App />)
  })

  it('Renders / Smoke test', () => {
    expect(cmp).not.toThrow()
    expect(cmp).not.toBeUndefined()
  })
})
