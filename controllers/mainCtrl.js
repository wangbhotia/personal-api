var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
	name: function(req, res, next){
		res.status(200).send(user.name);
	},

	location: function(req, res, next){
		res.status(200).send(user.location);
	},

	occupation: function(req, res, next){
		var names = [];
		for(let i = 0; i < user.occupation.length; i++){
			names.push(user.occupation[i].name);
			console.log(names);
		}

		if(req.query.order){
			if(req.query.order === 'desc'){
				res.status(200).send(names.sort());
			} else if(req.query.order === 'asc'){
				res.status(200).send(names.sort().reverse());
			} 
		} else {
				res.status(200).send(user.occupation);
			}
	},

	latest: function(req, res, next){	
		res.status(200).send(user.occupation.slice(-1))
	},

	hobbies: function(req, res, next){
		res.status(200).send(user.hobbies);
	},

	type: function(req, res, next){
		var hobbieType = req.params.type;
		// console.log(hobbieType);
		for(var i = 0; i < user.hobbies.length; i++){
			if(user.hobbies[i].type === hobbieType){
				return res.status(200).send(user.hobbies[i]);
			}
		}
	},

	restaurants: function(req, res, next){
		res.status(200).send(user.restaurants);
	},

	ratings: function(req, res, next){
		var rating = req.query.rating;
		if(rating >= 4){
			var returnedRestaurants = user.restaurants.find(function(restaurant){
				return restaurants.rating === rating;
			});
		} else {
			res.status(200).send('Not Found:', rating);
		}
	},

	restaurantName: function(req, res, next){
		var restName = req.params.restaurantName;
		console.log(restName);
		for(var i = 0; i < user.restaurants.length; i++){
			if(user.restaurants[i].name === restName){
				return res.status(200).send(user.restaurants[i]);
				// res.status(200).json({restaurant: user.restaurants[i]});
			}
		}
	},

	changeName: function(req, res, next){
		user.name = req.body.newName;
		return res.status(200).send(user.name);
	},

	changeLocation: function(req, res, next){
		user.location = req.body.newLocation;
		return res.status(200).send(user.location);
	},

	addHobbies: function(req, res, next){
		user.hobbies.push(req.body.newHobbie);
		return res.status(200).send(user.hobbies);
	},

	addOccupation: function(req, res, next){
		user.occupation.push(req.body.newOccupation);
		return res.status(200).send(user.occupation);
	},

	addRestaurant: function(req, res, next){
		user.restaurants.push(req.body.newRestaurant);
		return res.status(200).send(user.restaurants);
	},

	skillz: function(req, res, next){
		var exp = req.query.experience;
		var filteredskillz = [];

		if(exp){
			if(exp === 'Beginner'){
				for(var i = 0; i < skillz.skills.length; i++){
					if(exp === skillz.skills[i].experience){
						filteredskillz.push(skillz.skills[i]);
					}
				}
				return res.status(200).send(filteredskillz);
			}
			
			if(exp === 'Intermediate'){
				for(var i = 0; i < skillz.skills.length; i++){
					if(exp === skillz.skills[i].experience){
						filteredskillz.push(skillz.skills[i]);
					}
				}
				return res.status(200).send(filteredskillz);
			}
		} else {
			return res.status(200).send(skillz.skills);
		}
	},

	postSkillz: function(req, res, next){
		skillz.skills.push(req.body.newSkill);
		// console.log(skillz.skills);
		return res.status(200).send(skillz.skills); 
	},

	secrets: function(req, res, next){
		// console.log('Access Granted');
		return res.status(200).send(secrets.topSecret);
	}

}

