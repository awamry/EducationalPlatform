const request = require('request');
const expect = require('chai').expect;
const app = require('../lib/index');


describe('Server response', function () {
    it('should return 200', function (done) {
        request.get('http://localhost:8080/', function (err, res, body) {
            if (err) throw err;
            expect(res.statusCode).to.equal(200);
            done();
        })
    })
})