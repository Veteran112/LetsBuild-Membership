var express = require('express');
var router = express.Router();
var User = require('../models/User')
var bcrypt = require('bcrypt');
var moment = require('moment');
var bodyParser = require('body-parser')

var Membership = require('../models/Membership')



router.get('/', (req, res) => {
    res.send("Register Here")
});

//Body-Parser
var jsonParser = bodyParser.json()

router.post('/', jsonParser, async (req, res) => {
	//Hash Password 
	console.log()
		
	try {

	} catch (error) {}


});



module.exports = router;
