const listado = require('../dataAccessObject/documentoDAO');

const redirectDocumente = {};

redirectDocumente.list = (req, res) => {
    console.log(req.body);
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