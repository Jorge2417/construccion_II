const Task = require('../model/tasks');
const logica = require('../logic/documentLogic');
const connectDocument = {};

connectDocument.list = async(req, data) =>{
    const tast = await Task.find();
    console.log(tast);
    data(tast); 
};

connectDocument.save = async (req) => {
    const data = req.body;
    const task = new Task(logica.save(data));
    await task.save();
    
};


module.exports = connectDocument;