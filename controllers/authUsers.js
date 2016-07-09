var express = require('express');
var router = express.Router();
var co = require('co');
var f = require('../conf/functions');

var db = require('../conf/sequelize.js');
var tb_member = require('../models/member.js')(db.sequelize, db.Sequelize);

var authKey = global.config.authKey,
    codeDefine = global.config.codeDefine,
    debug = global.config.debug;

router.get('/', function(req, res, next) {
    
  
    try {

      var cookie = req.cookies.member_cookie;
      
      var memberCookieInfo = JSON.parse(f.decryption(cookie, global.config.authKey));

      global.config.member_id = memberCookieInfo.member_id;
      global.config.member_mobile = memberCookieInfo.member_mobile;

      //验证是否登陆
      if ((!debug ? global.config.member_id == req.session.member_id : 1) && global.config.member_mobile)
      {
          next();
      }
      else
      {
          res.redirect('/login');
          //next();
      }

    }
    catch(err)
    {
        res.redirect('/login');
    }

    
});

module.exports = router;



