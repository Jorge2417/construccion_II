const Task = require('../model/tasks');
const Nota = require('../model/mynota');
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

connectDocument.newNota = async (req) => {
    const data = req.body;
    const nota = new Nota(logica.calculate(data));
    await nota.save();
}

connectDocument.listado = async (req, data) =>{
    const nota = await Nota.find();
    data(nota);
}

module.exports = connectDocument;