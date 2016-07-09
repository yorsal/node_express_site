var express = require('express');
var router = express.Router();

var co = require('co');

var db = require('../conf/sequelize.js');
var tb_member = require('../models/member.js')(db.sequelize, db.Sequelize);

//
router.get('/', function(req, res, next) {
  
  res.render('./homes/index', { title: 'Users' });

});


co(function *(){

	
	

	
   
}).catch(function(err){
    console.log(err.stack);
});


module.exports = router;
