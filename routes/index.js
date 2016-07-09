var express = require('express');
var router = express.Router();
var co = require('co');
var f = require('../conf/functions');

var db = require('../conf/sequelize.js');
var tb_member = require('../models/member.js')(db.sequelize, db.Sequelize);

var authKey = global.config.authKey,
	codeDefine = global.config.codeDefine;
//----index
router.get('/', function(req, res, next) {
 
 
  res.render('index');

});


//----login
router.route('/login')
.get(function(req, res) {
    res.render('index');
})
.post(function(req, res) {
	var data = req.body;

	var condition = {
		'mobile': data.username, //登陆账号，此处是手机号码
		'status': 1 //用户正常状态
	}

	tb_member.findOne({ 'where': condition}).then(function(memberData){	
		if (memberData) //找到该用户
		{
			if (f.encryption(data.password + memberData.time, authKey) == memberData.upassword)
			{
			
				tb_member.update({
					latest_login_time: new Date().getTime()/1000
				}, 
				{ 
					where: { id: memberData.id }

				}).then(function(){ //验证通过

					req.session.member_id = memberData.id;

					var member_cookie = {
						member_id: memberData.id,
						member_mobile: memberData.mobile
					}
					
					res.cookie('member_cookie', f.encryption(JSON.stringify(member_cookie), authKey), {});
					res.send({
						info: codeDefine.success,
						data: member_cookie
					});
					
				});
			}
			else
			{
				res.send({
					info: codeDefine.error_login
				});
			}
		}
		else
		{
			res.send({
				info: codeDefine.error_login
			});
		}
	});



    
});


//----logout
router.get('/logout', function(req, res) {
    res.redirect('/');
});

module.exports = router;



