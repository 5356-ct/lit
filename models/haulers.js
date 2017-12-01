var db = require('../dbconnection'); //reference of dbconnection.js

var Hauler={
	getAllHaulers:function(callback){
		return db.query("Select * from haulers",callback);
	},
	getHaulerById:function(id,callback){
		return db.query("select * from haulers where id=?",[id],callback);
	},
	getHaulerByPhoneNumber:function(phone_number,callback){
		var statement = "select * from haulers where phone_number=" + phone_number+"";
		console.log('phone_number', phone_number);
		console.log(statement);
		return db.query("select * from haulers where phone_number=?",[phone_number],callback);
	},
	addHauler:function(hauler,callback){
		var statement = ("Insert into haulers (full_name, phone_number) values(?,?);",[hauler.full_name,hauler.phone_number]);
		console.log(statement);
		return db.query("Insert into haulers (full_name, phone_number) values(?,?) ;",[hauler.full_name,hauler.phone_number], callback);
	},
	deleteHauler:function(id,callback){
		return db.query("delete from haulers where Id=?",[id],callback);
	},
	updateHauler:function(id,hauler,callback){
		return db.query("update haulers set full_name=?,phone_number=?,code=? where id=?",[hauler.full_name, hauler.phone_number, hauler.code, id], callback);
	}
};

module.exports=Hauler;
