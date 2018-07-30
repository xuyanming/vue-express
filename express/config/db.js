var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"59.110.164.162",
    port: 3306,
    user:"root",
    password:"449a18c7ab3950ae",
    database:"test",
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