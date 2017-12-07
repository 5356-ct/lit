var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.json([{
		id: 1,
		username: "indexchanged2"
	}, {
		id: 2,
		username: "D0loresH4ze"
	}]);
});

module.exports = router;
