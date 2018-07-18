var express = require('express');
var router = express.Router();
var db = require("../config/db");
const jwt = require('jsonwebtoken')
const token = require("../config/token")
var data={data:'',meta:{code:'200',message:''}}
/* GET users listing. */
router.post('/add', function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    db.query("SELECT username FROM users where username=(?)",[username],function(err,rows){
        console.log(err,rows)
        if(rows.length>0){
            data={data:'',meta:{code:'500',message:'用户名存在'}}
            res.send(data)
        }else{
            db.query("INSERT INTO `users` (`username`,`password`) VALUES (?,?)",[username,password],function(err,rows){
                data={data:'',meta:{code:'200',message:'注册成功'}}
                res.send(data)
            });   
        }
    });
    
});
router.post('/login', function(req, res, next) {
    console.log(req.headers)
    let username = req.body.username;
    let password = req.body.password;
    db.query("SELECT * FROM users where username=(?)",[username],function(err,rows){
        if(rows.length>0 && rows[0].password == password){
            // 输出签发的 Token
            data={data:token.createToken(req.body),meta:{code:200,message:'登录成功'}}
            res.send(data)
        }else{
            data.meta={data:'',code:500,message:'用户名或密码错误'}
            res.send(data)
        }
    });
    
});
router.post('/city', function(req, res, next) {
    let accesstoken = req.headers['access_token'];
    let datatoken = token.decodeToken(accesstoken)
    db.query("UPDATE `users` SET city='"+req.body.city+"',rectangle='"+req.body.rectangle+"' where username='"+datatoken.decoded.name+"'",[],function(err,rows){
        console.log(rows)
        data={data:'',meta:{code:'200',message:''}}
        res.send(data)
    });
    
});
router.get('/usercity', function(req, res, next) {
    db.query("SELECT * FROM `users`",[],function(err,rows){
        let rowdata =[];
        rows.forEach(r=>{
            if(r.city){
                rowdata.push({'city':r.city,'rectangle':r.rectangle}) 
            }
            
        })
        data={data:rowdata,meta:{code:'200',message:''}}
        res.send(data)
    });
    
});
module.exports = router;
