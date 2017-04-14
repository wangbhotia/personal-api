var skillz = require('../skillz.js');

module.exports = {
	addHeaders: function(req, res, next){
		res.status(200).set({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			'X-XSS-Protection': 'SAMEORIGIN',
			'Content-Security-Policy': "default-src 'self' devmountain.github.io"
		});
		next();
	},

	generateId: function(req, res, next){
		// console.log(skillz.skills.length);
		req.body.newSkill.id = skillz.skills.length + 1;
		next();
	},

	verifyUser: function(req, res, next){
		if(req.params.username === 'Bond' && req.params.pin === '007'){
			next();
		} else {
			return res.status(200).send('Access Denied!!!')
		}
	}

}