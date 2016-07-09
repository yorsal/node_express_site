var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//定义全局变量
global.config = require('./conf/config');

//导入公共控制器
var authUsers = require('./controllers/authUsers');

//导入模块
var routes = require('./routes/index');
var homes = require('./routes/homes');
var users = require('./routes/users');

var app = express();

// view engine setup
if (global.config.debug) app.set('views', path.join(__dirname, 'views'));
else app.set('views', path.join(__dirname, 'views_dist'));

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(session({
  secret: 'keyboard cat',
  cookie: { path: '/', httpOnly: true, secure: false, maxAge: 30000 }
}))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//业务中间件
app.use('/', routes);

app.use('/login', routes);
app.use('/logout', routes);
app.use(['/users', '/homes'], authUsers);
app.use('/users', users);
app.use('/homes', homes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
