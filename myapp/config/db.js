var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"192.168.10.10",
    port: 3306,
    user:"root",
    password:"Root@123",
    database:"xuyan",
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