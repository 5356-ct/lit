var mysql=require('mysql');
var connection=mysql.createPool({
	host:'35.227.62.166',
	user:'root',
	password:'abcde12345',
	database:'lit_development'
	 
});
module.exports=connection;