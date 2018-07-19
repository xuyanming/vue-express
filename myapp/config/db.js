var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"",
    port: 3306,
    user:"",
    password:"",
    database:"",
    useConnectionPooling: true
});

function query(sql,data,callback){
    // connection.connect()
    // pool.getConnection(function(err,connection){
        connection.query(sql,data,function (err,rows) {
            callback(err,rows);
            // connection.release();
            // connection.end()  
        });
    // });
}

exports.query = query;