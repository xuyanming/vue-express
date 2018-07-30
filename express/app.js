var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
var logger = require('morgan');
const token = require("./config/token")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tableRouter = require('./routes/table');
const rouetpass =["/users/login","/users/add",'/'];
var data={data:'',meta:{code:'',message:''}}

var app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type, access_token, X-Requested-With")
    if(rouetpass.indexOf(req.originalUrl) > -1 || req.originalUrl.split('/').indexOf('static') > -1){
        next()
    }else{
        if (req.method != "OPTIONS"){
            var accesstoken = req.headers['access_token'];
            let datatoken = token.decodeToken(accesstoken)
            if(datatoken.flag){
                next()
            }else{
                data.meta.code=401;
                res.send(data) 
            }
        }else{
            next()
        }
    }
});
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
     res.sendFile(path.resolve(__dirname, 'public',"index.html"));
});


// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/table', tableRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
