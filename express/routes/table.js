var express = require('express');
var router = express.Router();
var db = require("../config/db");
const jwt = require('jsonwebtoken')
const token = require("../config/token")
var data={data:'',meta:{code:'200',message:''}}
/* GET users listing. */
// var meta={'code':'','message':'','date':''}
router.post('/addinfo', function(req, res, next) {
    let table = req.body;
    db.query("INSERT INTO `table` (`date`,`name`,`province`,`city`,`address`,`zip`) VALUES (?,?,?,?,?,?)",[table.date,table.name,table.province,table.city,table.address,table.zip],function(err,rows){
        data={data:'',meta:{code:'200',message:''}}
        res.send(data)
    });
    
});
router.get('/tablelist', function(req, res, next) {
    let query = req.query;
    let sql="SELECT * FROM `table`"
    if(query.user){
        sql+= "where name="+query.user
    }
    if(query.region){
        sql+= "where zip="+query.region
    }
    db.query(sql,[],function(err,rows){
        data={data:rows,meta:{code:'200',message:''}}
        res.send(data)
    })
    
});
router.post('/delinfo', function(req, res, next) {
    let row = req.body.rows;

    let sql="delete from  `table` where  id ="+row
    db.query(sql,[],function(err,rows){
        data={data:'',meta:{code:'200',message:''}}
        res.send(data)
    })
    
});
router.post('/upinfo', function(req, res, next) {
    let row = req.body;
    db.query("UPDATE `table` SET name='"+row.name+"',date='"+row.date+"',province='"+row.province+"',city='"+row.city+"',address='"+row.address+"',zip='"+row.zip+"' where `id`='"+row.id+"'",[],function(err,rows){
        data={data:'',meta:{code:'200',message:''}}
        res.send(data)
    });
    
});

module.exports = router;
