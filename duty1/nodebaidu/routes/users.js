var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 新闻后台 */
var connection =mysql.createPool({
	host:'localhost',
	port:3306,
	user: 'root',
	password : 'root',
	database : 'baidunews-php'
});
//新闻列表
router.get('/getnews', function(req, res, next) {
	connection.query('SELECT * FROM `news` ORDER BY `id` desc',function(err, rows,fields) {
		if (err) throw err;
		res.json(rows);

	});
});
//确认更新
router.post('/update', function(req, res,next) {
	var newid = req.body.id;
 	var newtype = req.body.newtype;
 	var newtitle = req.body.newtitle;
 	var newsrc = req.body.newsrc;
 	var newimg = req.body.newimg;
 	var newtime = req.body.newtime;
	
 	connection.query('UPDATE `news` SET `newtype`=?, `newtitle`=?, `newsrc`=?,`newimg`=?,`newtime`=? WHERE `id`=?'
 		,[newtype,newtitle,newsrc,newimg,newtime,newid],function(err,rows){
 			if (err) throw err;
			console.log(rows.changedRows);
		
 	});
 	res.end();
 });
//模态框取值
router.get('/curnews', function(req, res,next) {
	var newid = req.query.newid;
 	connection.query('SELECT * FROM `news` WHERE id=?',[newid],function(err,rows,fields){
 			if (err) throw err;
			res.json(rows);
		
 	});
 });
//插入新闻
router.post('/insert', function(req, res, next) {
	var newtype = req.body.newtype;
	var newtitle = req.body.newtitle;
	var newsrc = req.body.newsrc;
	var newimg = req.body.newimg;
	var newtime = req.body.newtime;
	
	connection.query('INSERT INTO `news` (`newtype`, `newtitle`, `newsrc`,`newimg`,`newtime`) VALUES (?, ?,?,?,?)',
		[newtype,newtitle,newsrc,newimg,newtime],function(err,result){
			if (err) throw err;
			console.log(result.insertId);

	});
	res.end();//相应结束掉，前面才能判断出success
});
//删除新闻
router.post('/delete', function(req, res, next) {
	var newid = req.body.newid;
	connection.query('delete from `news` where `id`=?',
		[newid],function(err,result){
			if (err) throw err;
			console.log(result.affectedRows);	

	});
	res.end();
});
module.exports = router;
