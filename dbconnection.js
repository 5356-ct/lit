var mysql=require('mysql');

var connection=mysql.createPool({
	host:'localhost',//process.env.MYSQL_DSN || '35.227.62.166' ,
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '',//process.env.MYSQL_PASSWORD || 'abcde12345',
	database:  'lit_development',
	// socketPath: '/cloudsql/advstsys-lit:us-east1:advstsys-lit'
});
module.exports=connection;