/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('request')
const expect = require('chai').expect
const app = require('../lib/index')
const db = require('../lib/database')

before(async () => {
  await db.authenticate()
})

describe('Server response', function () {
  it('should return 200', function (done) {
    request.get('http://localhost:3000', function (err, res, body) {
      if (err) throw err
      expect(res.statusCode).to.equal(200)
      done()
    })
  })
})
