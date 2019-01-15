const path = require('path')
const Models =require(path.resolve('models','index.js'));
module.exports ={
  listTasks: async (req,res) => {
		let filters = [];
		const query_filter = (req.query.filter)?JSON.parse(req.query.filter):''
		if(query_filter.courier!==undefined){
			filters.push({
				courier:{$like: '%' +query_filter.courier + '%'}
			})
		}
		if(query_filter.status!==undefined){
			filters.push({
				status: { $like: '%' + query_filter.status + '%' }
			})
		}
		if(query_filter.driverName!==undefined){
			filters.push({
				driverName: {$like: '%' + query_filter.driverName + '%'}
			})
		}
		const tasksList = (filters.length<=0)?
			await Models.tasks.findAll({ raw: true }):
			await Models.tasks.findAll({ where:filters });
		if(tasksList){
			return res.status(200).send({
				data:tasksList,
				total:tasksList.length
			});
		}
		return res.status(500).send("Internal server error !");
	},
	getTask: async (req,res) => {
		const tasksList = await Models.tasks.find({ id:req.params.id});
		if(tasksList){
			return res.status(200).send({
				data:tasksList,
				total:100
			});
		}
		return res.status(500).send("Internal server error !");
	},
	updateTaskStatus:(req,res)=>{

		Models.tasks.update(
			{ status: req.body.status },
			{ where: { id: req.params.id } }
		)
			.then(result =>{
				return res.send({
					data:result
				});
			})
			.catch(err =>{
				return res.status(500).send(err);
			})
				
	}
}