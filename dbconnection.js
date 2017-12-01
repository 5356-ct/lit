var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'lit_development'
	 
});
module.exports=connection;