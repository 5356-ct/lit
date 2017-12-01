var db = require('../dbconnection'); //reference of dbconnection.js

var Job={
	getAllJobs:function(callback){
		return db.query("Select * from jobs where active=true",callback);
	},
	getJobById:function(id,callback){
		return db.query("select * from jobs where Id=?",[id],callback);
	},
	addJob:function(job,callback){
		return db.query("Insert into jobs (mover_id,number_of_rooms,job_start_time,job_end_time,max_price,description,active,done) values(?,?,?,?,?,?,?,?)",
			[
				job.mover_id,
				job.number_of_rooms,
				job.job_start_time,
				job.job_end_time,
				job.max_price,
				job.description,
				job.active,
				job.done
			],
			callback);
	},
	disableJobsByMoverId:function(mover_id,callback) {
		return db.query("UPDATE jobs SET active=false WHERE mover_id=?",[mover_id], callback);
	},
	getJobByMoverId:function(mover_id,callback){
		return db.query("SELECT * FROM jobs WHERE active=true AND mover_id=?",[mover_id],callback);
	},
	deleteJob:function(id,callback){
		return db.query("delete from jobs where Id=?",[id],callback);
	},
	updateJob:function(id,job,callback){
		return db.query("update jobs set Title=?,Status=? where Id=?",[mover.full_name, mover.phone_number, mover.code], callback);
	}
};

module.exports=Job;
