describe('Smoke Test', () => {
  beforeAll(async () => {
    await page.goto('https://jcowdy.com')
  })

  it('should be titled "appropriately"', async () => {
    await expect(page.title()).resolves.toMatch('Jason Cowdy')
  })
})
