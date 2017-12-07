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

describe('GET index', () => {
  it('fails, as expected', function(done) { // <= Pass in done callback
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
