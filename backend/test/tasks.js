const chai =  require('chai');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const common = require('./common');
chai.should();
describe("Tasks ", () => {
  describe("Get all tasks ", () => {
    // Test to Create new user
    it("should return All tasks", done => {
      api.get('/tasks/list')
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it('respond with 200 If task status updated', function (done) {
      const dataToUpdate = {
        "fromLocation": "25.204849,55.270783",
        "toLocation": "25.125386, 55.227821",
        "deliveryDate": "2019-05-10",
        "startedAt": "2019-05-10 01:36:08",
        "finishedAt": "2019-05-10 01:56:09",
        "driverName": "Marko Pandres",
        "courier": "FastWay",
        "description": "Deliver a credit card, user must sign",
        "status": "failed",
        "driverComment": "",
        "createdAt": new Date(),
        "updatedAt": new Date()
      };

      api.put('/tasks/list/'+2)
        .send(dataToUpdate)
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.be.a('object');
          done();
        });
    });
    afterEach(done => {
      common.tearDown(done)
    })
  });

});