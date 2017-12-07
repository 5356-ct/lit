// //During the test the env variable is set to test
// // process.env.NODE_ENV = 'test';

// // let mongoose = require("mongoose");
// let Book = require('../routes/index');

// //Require the dev-dependencies
var chai = require('chai')
  , chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('GET Index Sanity Check', () => {
  it('Should return success', function(done) { // <= Pass in done callback
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });
});

describe('Hauler Endpoints', () => {
  //   /* 
  //
  //    GET
  //
  //    For a hauler, given a phone number check if that number is in the database.
  //    If the number is not in the database, insert it
  //
  //   */
  //   /api/v1/haulers/phone_number/:phone_number
  it('Hauler - phone number should succeed on saving', function(done) { 
    chai.request(server)
    .get('/api/v1/haulers/phone_number/1234567890')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });

  // /* GET 
  //    generate a code and send it to the user's phone given by the phone number. */
  // /api/v1/haulers/phone_number/:phone_number/code
  it('Hauler - generate a code given a phone number', function(done) { // <= Pass in done callback
    chai.request(server)
    .get('/api/v1/haulers/phone_number/1234567890/code')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });

  // /* 
  // GET 
  //    check if the phone number matches if so, return true
  //  */
  // /api/v1/haulers/phone_number/:phone_number/code/:code
  it('Hauler - authorize a users access given a phone number and a code', function(done) { // <= Pass in done callback
    chai.request(server)
    .get('/api/v1/haulers/phone_number/1234567890/code/0000')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });

  //   GET
  //   A list of available jobs that the hauler can look at 
  // /api/v1/haulers/phone_number/:phone_number/code/:code/jobs
  it('Hauler - gives a list of jobs', function(done) { // <= Pass in done callback
    chai.request(server)
    .get('/api/v1/haulers/phone_number/1234567890/code/0000/jobs')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });

  // /* GET
  //   The current job the hauler is on
  //  */
  // /api/v1/haulers/phone_number/:phone_number/code/:code/job
  it('Hauler - the hauler should see the current job he or she is on', function(done) { // <= Pass in done callback
    chai.request(server)
    .get('/api/v1/haulers/phone_number/1234567890/code/0000/job')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });

  // /* 
  //   GET
  //   Accept the job given a job id
  //  */
  // /api/v1/haulers/phone_number/:phone_number/code/:code/job/:job_id/accept
  it('Hauler - the hauler should accept the job given a job id', function(done) { // <= Pass in done callback
    chai.request(server)
    .get('/api/v1/haulers/phone_number/1234567890/code/0000/job/1/accept')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });

  // /* 
  //   GET
  //   Finish the job given a job id
  //  */
  // /api/v1/haulers/phone_number/:phone_number/code/:code/job/:job_id/finish
  it('Hauler - the hauler should finish the job given a job id', function(done) { // <= Pass in done callback
    chai.request(server)
    .get('/api/v1/haulers/phone_number/1234567890/code/0000/job/1/finish')
    .end(function(err, res) {
      res.should.have.status(200);
      console.log(res.body);
      // expect(res).to.have.status(123);
      done();                               // <= Call done to signal callback end
    });
  });

});

// //Our parent block
// describe('Books', () => {
//     beforeEach((done) => { //Before each test we empty the database
//         // Book.remove({}, (err) => { 
//         //    done();         
//         // });     
//     });
// /*
//   * Test the /GET route
//   */
//   describe('/GET book', () => {
//       it('it should GET all the books', (done) => {
//         chai.request(server)
//             .get('/')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//               // done();
//             });
//       });
//   });

// });






// chai.request(server)
//   .get('/')
//   .end(function (err, res) {
//       console.log('print anything', res);
//       console.log(res);
//      expect(err).to.be.null;
//      expect(res).to.have.status(200);
//   });
