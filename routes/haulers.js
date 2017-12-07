var express = require('express');
var router = express.Router();
var Mover = require('../models/movers');
var Job = require('../models/jobs');
var Hauler = require('../models/haulers');

/* Helpers */
function gen_twilio_code(code, phone_number) {
  var accountSid = process.env.ACCOUNTSID;
  var authToken = process.env.AUTHTOKEN;
  console.log('accountSid: ' + accountSid);
  console.log('authToken: ' + authToken);

  // require the Twilio module and create a REST client
  const client = require('twilio')(accountSid, authToken);
  if (phone_number.length === 9) {
    phone_number = "1" + phone_number;
    client.messages
      .create({
        to: phone_number,
        from: '+14247048254',
        body: "" + code
      })
      .then(function (message) {
        // console.log(message);
        console.log(message.sid);
        return code;
      });
  } else {
    console.log('really bad');
  }
}

/* 

  GET

  For a hauler, given a phone number check if that number is in the database.
  If the number is not in the database, insert it

*/
router.get('/phone_number/:phone_number', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');
  var phone_number = req.params.phone_number;

  Hauler.getHaulerByPhoneNumber(phone_number,function(err,rows){
    if (rows.length === 0) {
      console.log('Phone number not found, inserting')
      if (phone_number.length !== 10) {
        res.json({'error':'Invalid phone number. Phone number is not 10 digits!'});
      } else {
        hauler = {full_name: null, phone_number: phone_number}
        Hauler.addHauler(hauler,function(err,rows){
          if(err)
          {
            res.json(err);
          }
          else{
            res.json({success:'true',type:'hauler'});
          }
        });
      }
    } else if (err)
      {
        res.json(err);
      }
    else{
      res.json({success:'true',type:'hauler'});
    }
  });
});

/* GET generate a code and send it to the user's phone given by the phone number. */
router.get('/phone_number/:phone_number/code', function(req, res, next) {
  var phone_number = req.params.phone_number;

  // Twilio Credentials
  // gen_twilio_code(phone_number);
  var code = Math.floor(1000 + Math.random() * 9000);

  // check if the phone number exists
  console.log('Generated code', code);
  var hauler = {
    full_name: 'NULL',
    phone_number: phone_number,
    code: code
  }
  Hauler.getHaulerByPhoneNumber(phone_number, function(err, rows){
    if (rows.length === 0) {
      res.json({'error': 'phone number ' + phone_number + ' not found'});
    } else {
      var id = rows[0].id;
      console.log('Record ID is ' + id);
      Hauler.updateHauler(id, hauler, function(err, rows){
        if(err) {
          res.json(err);
        }
        else {
          res.json({phone_number: phone_number, code: code, type:'hauler'});//or return count for 1 &amp;amp;amp; 0
        }
      })
    }
  });
});

function authenticate(phone_number, code) {
  Hauler.getHaulerByPhoneNumber(phone_number, function(err, rows){
    if(err) {
      return false;
    }
    else {
      var hauler = rows[0];
      console.log('hauler', hauler);
      console.log('hauler.code', hauler.code);
      console.log('code', code);
      console.log(hauler.code + "" === code + "");
      if (hauler.code + "" === code + "") {
        return true;
      } 
    }
  });
  return false;
}

/* GET 
check if the phone number matches
if so, return true
 */
router.get('/phone_number/:phone_number/code/:code', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  // if code and phone number matches
  // maintain session
 Hauler.getHaulerByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {
      var hauler = rows[0];
      // if (hauler.code + "" === code + "") {
      if (true) {

        res.json([{
          'success': 'authentication code matches'
        }]);


      } else {
        res.json([{
          'error': 'authentication code does not match'
        }]);
      }
    }
  });
});

/* 

  GET

  A list of available jobs that the hauler can look at

 */
router.get('/phone_number/:phone_number/code/:code/jobs', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  // if code and phone number matches
  // maintain session
  console.log(Hauler);
  Hauler.getHaulerByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {

      var hauler = rows[0];
      // if (hauler.code + "" === code + "") {
      if (true) {

        Job.getAvailableJobs(function(err, rows){
          if (err) {
            res.json(err);
          } else {
            rows.push({type:'hauler'});
            res.json(rows);
          }
        });

      } else {
        res.json([{
          'error': 'authentication code does not match'
        }]);
      }
    }
  });
});

/* 

  GET

  The current job the hauler is on

 */
router.get('/phone_number/:phone_number/code/:code/job', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  // if code and phone number matches
  // maintain session
  console.log(Hauler);
  Hauler.getHaulerByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {

      var hauler = rows[0];
      // if (hauler.code + "" === code + "") {
      if (true) {  

        Job.getCurrentJob(hauler.id, function(err, rows){
          if (err) {
            res.json(err);
          } else {
            rows.push({type:'hauler'});
            res.json(rows);
          }
        });

      } else {
        res.json([{
          'error': 'authentication code does not match'
        }]);
      }
    }
  });
});

/* 

  GET

  Accept the job given a job id

 */
router.get('/phone_number/:phone_number/code/:code/job/:job_id/accept', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  var job_id = req.params.job_id;
  // if code and phone number matches
  // maintain session
  console.log(Hauler);
  Hauler.getHaulerByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {

      var hauler = rows[0];
      // if (hauler.code + "" === code + "") {
      if (true) {  

        Job.acceptJob(hauler.id, job_id, function(err, rows){
          if (err) {
            res.json(err);
          } else {
            rows.push({type:'hauler'});
            res.json(rows);
          }
        });

      } else {
        res.json([{
          'error': 'authentication code does not match'
        }]);
      }
    }
  });
});

/* 

  GET

  Finish the job given a job id

 */
router.get('/phone_number/:phone_number/code/:code/job/:job_id/finish', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  var job_id = req.params.job_id;
  // if code and phone number matches
  // maintain session
  console.log(Hauler);
  Hauler.getHaulerByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {

      var hauler = rows[0];
      // if (hauler.code + "" === code + "") {
      if (true) {

        Job.finishJob(hauler.id, job_id, function(err, rows){
          if (err) {
            res.json(err);
          } else {
            rows.push({type:'hauler'});
            res.json(rows);
          }
        });

      } else {
        res.json([{
          'error': 'authentication code does not match'
        }]);
      }
    }
  });
});

module.exports = router;
