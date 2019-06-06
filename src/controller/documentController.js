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

redirectDocumente.save = (req, res) =>{
    listado.save(req);
    res.redirect('/');
};


module.exports = redirectDocumente;