const request = require('request')
const expect = require('chai').expect
// eslint-disable-next-line no-unused-vars
const app = require('../lib/index')
// eslint-disable-next-line no-undef
describe('Server response', function () {
  // eslint-disable-next-line no-undef
  it('should return 200', function (done) {
    request.get('http://localhost:3000/', function (err, res, body) {
      if (err) throw err
      expect(res.statusCode).to.equal(200)
      done()
    })
  })
})
