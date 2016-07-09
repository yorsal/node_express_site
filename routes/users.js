var express = require('express');
var router = express.Router();

var co = require('co');

var db = require('../conf/sequelize.js');
var tb_adminUser = require('../models/adminUser.js')(db.sequelize, db.Sequelize);

//
router.get('/', function(req, res, next) {
	 
  res.render('./users/index', { title: 'sers' });

});


router.get('/setting/:xxx?', function(req, res, next) {
 

  res.render('./users/setting', { title: 'bbbb' });

});

co(function *(){

	
	

	
   
}).catch(function(err){
    console.log(err.stack);
});


module.exports = router;
