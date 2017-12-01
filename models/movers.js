var db = require('../dbconnection'); //reference of dbconnection.js

var Mover={
	getAllMovers:function(callback){
		return db.query("Select * from movers",callback);
	},
	getMoverById:function(id,callback){
		return db.query("select * from movers where id=?",[id],callback);
	},
	getMoverByPhoneNumber:function(phone_number,callback){
		var statement = "select * from movers where phone_number=" + phone_number+"";
		console.log('phone_number', phone_number);
		console.log(statement);
		return db.query("select * from movers where phone_number=?",[phone_number],callback);
	},
	addMover:function(mover,callback){
		var statement = ("Insert into movers (full_name, phone_number) values(?,?);",[mover.full_name,mover.phone_number]);
		console.log(statement);
		return db.query("Insert into movers (full_name, phone_number) values(?,?) ;",[mover.full_name,mover.phone_number], callback);
	},
	// addMover:function(mover,callback){
	// 	return db.query("Insert into movers values(?,?); SELECT LAST_INSERT_ID() ;",[mover.full_name,mover.phone_number], callback);
	// },
	deleteMover:function(id,callback){
		return db.query("delete from movers where Id=?",[id],callback);
	},
	updateMover:function(id,mover,callback){
		return db.query("update movers set full_name=?,phone_number=?,code=? where id=?",[mover.full_name, mover.phone_number, mover.code, id], callback);
	}
};

module.exports=Mover;
