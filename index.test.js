const isAlex = require('./index')

describe('isAlex', () => {
  it('should be alex', () => {
    expect(isAlex('Alex')).toBeTruthy()
  })

  it('should not be alex', () => {
    expect(isAlex('Aalex')).toBe(false)
  })
})
