var express = require('express'),
		bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var middleware = require('./controllers/middleware.js')
var mainCtrl = require('./controllers/mainCtrl.js')

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.name);
app.get('/location', mainCtrl.location);
app.get('/occupation', mainCtrl.occupation);
app.get('/occupation/:latest', mainCtrl.latest);
app.get('/hobbies', mainCtrl.hobbies);
app.get('/hobbies/:type', mainCtrl.type);
app.get('/restaurants', mainCtrl.restaurants);
app.get('/restaurants', mainCtrl.ratings);
app.get('/restaurants/:restaurantName', mainCtrl.restaurantName);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobbies);
app.post('/occupation', mainCtrl.addOccupation);
app.post('/restaurants', mainCtrl.addRestaurant);

app.get('/skills', mainCtrl.skillz);
app.post('/skills', middleware.generateId, mainCtrl.postSkillz);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.secrets)

var port = 3000;
app.listen(port, function(){
	console.log('Your api is running on port:', port);
});