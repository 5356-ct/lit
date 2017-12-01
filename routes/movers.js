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

  Mover.getMoverByPhoneNumber(phone_number,function(err,rows){
    console.log('rows');
    console.log(rows);
    console.log(rows === null);
    if (rows.length === 0) {
      console.log('Phone number not found, inserting')
      mover = {full_name: null, phone_number: phone_number}
      Mover.addMover(mover,function(err,rows){
        if(err)
        {
          res.json(err);
        }
        else{
          res.json(rows);//or return count for 1 &amp;amp;amp; 0
        }
      });
    } else if (err)
      {
        res.json(err);
      }
    else{
      res.json(rows);
    }
  });
  // Mover.getAllMovers(function(err,rows){
 
  //   if(err){
  //     res.json(err);
  //   }
  //   else{
  //     res.json(rows);
  //   }
  // });
});

/* GET generate a code and send it to the user's phone given by the phone number. */
router.get('/phone_number/:phone_number/code', function(req, res, next) {
  var phone_number = req.params.phone_number;

  // Twilio Credentials
  // gen_twilio_code(phone_number);
  var code = Math.floor(1000 + Math.random() * 9000);

  // check if the phone number exists
  console.log('Generated code', code);
  var mover = {
    full_name: 'NULL',
    phone_number: phone_number,
    code: code
  }
  Mover.getMoverByPhoneNumber(phone_number, function(err, rows){
    if (rows.length === 0) {
      res.json({'error': 'phone number ' + phone_number + ' not found'});
    } else {
      var id = rows[0].id;
      console.log('Record ID is ' + id);
      Mover.updateMover(id, mover, function(err, rows){
        if(err) {
          res.json(err);
        }
        else {
          res.json({phone_number: phone_number, code: code});//or return count for 1 &amp;amp;amp; 0
        }
      })
    }
  });

  // // And insert something like this instead:
  // // console.log(req.params);
  // console.log(req.params.phone_number);
  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l"
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze"
  // }]);
});

function authenticate(phone_number, code) {
  Mover.getMoverByPhoneNumber(phone_number, function(err, rows){
    if(err) {
      return false;
    }
    else {
      var mover = rows[0];
      console.log('mover', mover);
      console.log('mover.code', mover.code);
      console.log('code', code);
      console.log(mover.code + "" === code + "");
      if (mover.code + "" === code + "") {
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
  Mover.getMoverByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {
      var mover = rows[0];
      // console.log('mover', mover);
      // console.log('mover.code', mover.code);
      // console.log('code', code);
      // console.log(mover.code + "" === code + "");
      if (mover.code + "" === code + "") {

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

  POST

  datetime has to be in the format: 2015-03-25 12:00:00

 */
router.post('/phone_number/:phone_number/code/:code/job', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  // if code and phone number matches
  // maintain session
  console.log(Mover);
  Mover.getMoverByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {

      // disable all previous jobs first;


      var mover = rows[0];
      if (mover.code + "" === code + "") {

        console.log(req.body);

        console.log(req);
        var mover_id = mover.id;

        Job.disableJobsByMoverId(mover_id, function(err, rows){

          if (err) {
            res.json(err);
          } else {

            var number_of_rooms = req.body.number_of_rooms;
            var job_start_time = req.body.job_start_time;
            var job_end_time = req.body.job_end_time;
            var max_price = req.body.max_price;
            var description = req.body.description;
            var active = true;
            var done = false;

            var job = {
              mover_id: mover.id,
              number_of_rooms: req.body.number_of_rooms,
              job_start_time: req.body.job_start_time,
              job_end_time: req.body.job_end_time,
              max_price: req.body.max_price,
              description: req.body.description,
              active: true,
              done: false
            }
            Job.addJob(job,function(err, rows) {
              if (err) {
                res.json(err);            
              } else {
                res.json([job]);
              }
            });
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
  GET you can check status with this 
  always get the last job
*/
router.get('/phone_number/:phone_number/code/:code/job', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  // if code and phone number matches
  // maintain session
  Mover.getMoverByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {
      var mover = rows[0];
      if (mover.code + "" === code + "") {


        var mover_id = mover.id;

        Job.getJobByMoverId(mover_id,function(err, rows) {
          if (err) {
            res.json(err);            
          } else {
            if (rows.length === 0) {
              res.json(rows);
            } else {

              var job = rows[0];

              console.log('hauler_id is true', job.hauler_id === null);

              if (job.hauler_id) {
                Hauler.getHaulerById(job.hauler_id, function(err, hauler_rows){
                  if (err) {
                    res.json(err);
                  } else {
                    res.json({
                      hauler: {
                        "full_name": hauler_rows[0].full_name,
                        "phone_number": hauler_rows[0].phone_number,
                        "truck_description":hauler_rows[0].truck_description,
                      },
                      job: rows[0]
                    })
                  }
                })
              } else {
                res.json(rows);
              }
            }            
          }
        })

      } else {
        res.json([{
          'error': 'authentication code does not match'
        }]);
      }
    }
  });

});

/* 
  GET you can check status with this 
  always get the last job
*/
router.get('/phone_number/:phone_number/code/:code/jobs', function(req, res, next) {
  var phone_number = req.params.phone_number;
  var code = req.params.code;
  // if code and phone number matches
  // maintain session
  Mover.getMoverByPhoneNumber(phone_number, function(err, rows){

    if(err) {
      res.json(err);
    }
    else {
      var mover = rows[0];
      if (mover.code + "" === code + "") {
        var mover_id = mover.id;

        Job.getJobsByMoverId(mover_id,function(err, rows) {
          if (err) {
            res.json(err);            
          } else {
            res.json(rows);           
          }
        })

      } else {
        res.json([{
          'error': 'authentication code does not match'
        }]);
      }
    }
  });

});

module.exports = router;
