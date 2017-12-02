var mysql=require('mysql');
var connection=mysql.createPool({
	host:ENV['MYSQL_DSN'] || '35.227.62.166' ,
	user:ENV['MYSQL_USER'] || 'root',
	password:ENV['MYSQL_PASSWORD'] || 'abcde12345',
	database:'lit_development'
	 
});
module.exports=connection;