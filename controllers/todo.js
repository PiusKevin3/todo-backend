const Todo		= require('../models').Todo;

const createTodo = async function(req, res){

	const TodoInfo = req.body;

  try {
            if (!TodoInfo)            
             return res.send({message: 'Please fill todo  form data'});
                       
                  Todo.create({
                    task_name:TodoInfo.task_name,            
                    due_date:TodoInfo.due_date ,
                    complete_status: TodoInfo.complete_status,                   
                    })
                      .then((Todo)=>{
                           res.status(200).send({Todo,msg:" Todo Successfully Created!"});
    
                        }).catch(err=> res.send({message: err.message}))       
                
                      
             
          
          
        } catch (error) {
         // console.log(error)
            res.send({message: error.message})
        }
       

}
module.exports.createTodo = createTodo


const getTodo = async function(req, res){
 

    try {
        await  Todo.findOne({where: {id: req.params.id }})
         .then(resData=>{
            return res.status(200).send({resData,msg:"Todo search Successfully!"});

         })
         .catch(err=>{
            return res.send({message: err.message});
         })
        
    } catch (error) {
        res.send({message: error.message})
        
    }


}
module.exports.getTodo = getTodo


const getTodoList = async function(req, res){
 

    try {
        await  Todo.findAll({})
         .then(resData=>{
            return res.status(200).send({resData,msg:"Todo search listed Successfully!"});

         })
         .catch(err=>{
            return res.send({message: err.message});
         })
        
    } catch (error) {
        res.send({message: error.message})
        
    }


}
module.exports.getTodoList = getTodoList



const updateTodo = async function(req, res){
    const TodoInfo = req.body;
    const TodoId = req.params.id;
   

    try {
      if (!TodoInfo) return res.send({message: 'Please fill todo form data'});
         
         await Todo.update(
                            {
								task_name:TodoInfo.task_name,            
								due_date:TodoInfo.due_date ,
								complete_status: TodoInfo.complete_status,       
                            },
                            { where: { id: TodoId } 
                        })
                        .then(()=>{
                          res.status(200).send({msg:"Todo Updated Successfully!"});
   
                       }).catch(err=> res.send({message: err.message}))       
               

        
    } catch (error) {
        res.send({message: error.message})
        
    }
  
  
  }
  module.exports.updateTodo = updateTodo
  
  
const deleteOneTodoRow = async function(req, res){

	const detailsId = req.params.id;

	try {

		await Todo.destroy({ where: { id: detailsId } })
			.then(deletedRecord => {
				if (deletedRecord === 1) {
					res.status(200).json({ message: 'Deleted successfully' });
				}
				else {
					res.status(404).json({ message: 'record not found' });
				}
			})
			.catch(function (error) {
				res.status(500).json(error);
			});


	} catch (error) {
		res.send({ message: error.message });

	}


};

module.exports.deleteOneTodoRow = deleteOneTodoRow