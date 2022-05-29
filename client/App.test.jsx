import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {

  let cmp

  beforeAll(() => {
    cmp = shallow(<App />)
  })

  it('Renders / Smoke test', () => {
    expect(cmp.find('[data-test-id="error-boundary"]')).toHaveLength(0)
    expect(cmp).not.toBeUndefined()
  })
})
