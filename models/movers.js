var db = require('../dbconnection'); //reference of dbconnection.js

var Mover={
	getAllMovers:function(callback){
		return db.query("Select * from movers",callback);
	},
	getMoverById:function(id,callback){
		return db.query("select * from movers where Id=?",[id],callback);
	},
	addMover:function(mover,callback){
		return db.query("Insert into movers values(?,?,?)",[mover.id,mover.full_name,mover.phone_number],callback);
	},
	deleteMover:function(id,callback){
		return db.query("delete from movers where Id=?",[id],callback);
	},
	updateMover:function(id,Move,callback){
		return db.query("update movers set Title=?,Status=? where Id=?",[mover.full_name, mover.phone_number, mover.code], callback);
	}
};

module.exports=Mover;
