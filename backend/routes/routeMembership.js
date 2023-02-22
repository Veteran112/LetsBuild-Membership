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

router.post('/update', jsonParser, async (req, res) => {
	//Hash Password 
	const { userId, membershipName } = req.body;
		
	try {
		Membership.findOne({ name: membershipName }, async (err, doc) => {
			
			if (err) {} else {
				if (!doc) {} else {
					console.log('123123123123', doc);
					let setData = {};
					if (doc._id) {
						setData.membership = doc._id;
						setData.dop = moment().format('YYYY-MM-DD')
					}

					let updatedUser = await User.findByIdAndUpdate(userId, {
						$set: setData
					}, {
						new: true
					});

					console.log('123123123123', updatedUser);

					res.status(201).json(updatedUser)
				}
			}
		})
	} catch (error) {}


});



module.exports = router;
