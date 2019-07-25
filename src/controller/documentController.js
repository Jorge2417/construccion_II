const listado = require('../dataAccessObject/documentoDAO');

const Nota = require('../model/mynota');


const redirectDocumente = {};

function Decidir(uni){
    this.uni = uni;
}
function myDecidir(type) {    
    if(type == 'UNAS'){
        return new Decidir(type);
    } 
    if(type == 'UNI'){
        return new Decidir(type);
    }
}


redirectDocumente.decide = async (req, res) => {
    //console.log(tast);
    const tast = await Nota.findOne({_id: req.params.id});
    
    const num = myDecidir(tast.universidad);
    console.log("my nota  "+num.uni);
    if(num.uni == 'UNAS'){
        listado.list(tast, (data)=> {
            res.render('notasPorcentaje', {tasks: data} );
        });    
    }
    if(num.uni == 'UNI'){
        listado.list(tast, (data)=> {
            res.render('notasPromedio', {tasks: data} );
        });
    }        
}

redirectDocumente.list = (req, res) => {
    listado.list(req, (data)=> {
        res.render('form', {tasks: data} );
    });
};

redirectDocumente.registrar = (req, res)=> {
    res.render('registroD');
};

redirectDocumente.ver = (req, res) =>{
    res.render('newNota');
}
redirectDocumente.save = (req, res) =>{
    listado.save(req);
    res.redirect('/');
};

redirectDocumente.newNota =(req, res) =>{
    listado.newNota(req);
    res.redirect('/');
};
redirectDocumente.listPor = (req, res) =>{
    console.log(req.body);
    listado.listado(req, (data)=>{
        res.render('notasPorcentaje', {tasks: data});
    });
}
redirectDocumente.listPro = (req, res)=>{
    console.log(req.body);
    listado.listado(req, (data)=>{
        res.render('notasPromedio', {tasks: data});
    });
}
module.exports = redirectDocumente;



