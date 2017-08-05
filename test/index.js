const assert = require('assert')
const Connection = require('../dist/aquameta-connection.js')

describe('connection', () => {
  it('can be called', () => {
    assert((new Connection()) instanceof Connection)
  })
})
