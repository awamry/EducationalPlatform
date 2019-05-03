const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../lib/index');

chai.use(chaiHttp);
var url = 'http://localhost:3000';
var requester = chai.request.agent(url);
describe('Server response', function () {
    it('should return 200', function (done) {
        requester
            .get('/')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done(); // <= Call done to signal callback end
            });
    });
});