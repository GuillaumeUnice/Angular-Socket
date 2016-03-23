// mysocket global socket

var express = require('express');
var router = express.Router();

//var newUser = require('../our_modules/fillDb').getNewUser();
//var newQuestion = require('../our_modules/fillDb').getNewQuestion();
//var newResponse = require('../our_modules/fillDb').getNewResponse();

/**********************************************************************************
 * 					  Middleware ➜ to use for all requests
 **********************************************************************************/
router.use(function(req, res, next) {
    console.log('Middleware called.');
    // allows requests fromt angularJS frontend applications
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // go to the next route
});


/**********************************************************************************
 *                Route for Home API
 **********************************************************************************/

router.get('/', function(req, res) {
    res.json({ message: 'Hello from API documentation...' }); 
});

module.exports = router;