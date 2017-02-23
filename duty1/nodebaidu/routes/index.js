var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
	var newtype = req.query.newtype;
	var connection = mysql.createConnection({
		host     : 'localhost',
		port	 : 3306,//端口号不加引号
		user     : 'root',
		password : 'root',
		database : 'baidunews-php'
	});

	connection.connect();

	connection.query('SELECT * FROM `news` WHERE `newtype`= ?',[newtype],function(err, rows,fields) {
		if (err) throw err;
		console.log(newtype);
		console.log(rows);
		res.json(rows);

	});

	// connection.end();
});

module.exports = router;
