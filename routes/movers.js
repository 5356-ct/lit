var express = require('express');
var router = express.Router();
var Mover = require('../models/movers');

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
        body: "" + code,
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

/* Submit a phone number. */
router.get('/phone_number/:phone_number', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');
  var phone_number = req.params.phone_number;

  Mover.getAllMovers(function(err,rows){
 
    if(err){
      res.json(err);
    }
    else{
      res.json(rows);
    }
  });
});

/* GET users listing. */
router.get('/phone_number/:phone_number/code', function(req, res, next) {
  var phone_number = req.params.phone_number;
  // Twilio Credentials
  // gen_twilio_code(phone_number);
  var code = Math.floor(1000 + Math.random() * 9000);

  console.log(code);
  // And insert something like this instead:
  // console.log(req.params);
  console.log(req.params.phone_number);
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

function authenticate(phone_number, code) {

}

/* GET login */
router.get('/phone_number/:phone_number/code/:code', function(req, res, next) {
  // if code and phone number matches
  // maintain session
  // 
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  if (phone_number === cur_phone_number && code === cur_code) {

  }
  // // Twilio Credentials
  // // gen_twilio_code(phone_number);
  // var code = Math.floor(1000 + Math.random() * 9000);

  // console.log(code);
  // // And insert something like this instead:
  // // console.log(req.params);
  // console.log(req.params.phone_number);
  // res.json([{
  //   id: 1,
  //   username: "samsepi0l"
  // }, {
  //   id: 2,
  //   username: "D0loresH4ze"
  // }]);
});

/* GET */
router.get('/phone_number/:phone_number/code/:code/job', function(req, res, next) {
  // if code and phone number matches
  // maintain session
  // 
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  if (phone_number === cur_phone_number && code === cur_code) {
    
  }
});

/* GET */
router.post('/phone_number/:phone_number/code/:code/job', function(req, res, next) {
  // if code and phone number matches
  // maintain session
  // 
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  if (phone_number === cur_phone_number && code === cur_code) {
    
  }
});

/* GET */
router.post('/phone_number/:phone_number/code/:code/job/:job_id', function(req, res, next) {
  // if code and phone number matches
  // maintain session
  // 
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  if (phone_number === cur_phone_number && code === cur_code) {
    
  }
});

/* GET */
router.post('/phone_number/:phone_number/code/:code/job/:job_id/status', function(req, res, next) {
  // if code and phone number matches
  // maintain session
  // 
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  if (phone_number === cur_phone_number && code === cur_code) {
    
  }

});

module.exports = router;
