const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const personaShema = new Shema({
    id: String, 
    name: String,
    apellido: String, 
    grado: String, 
    articulo: String,
    libros: String,
    proyectos: String,
    asesor: String,
    respuesta: String
});

module.exports = mongoose.model('document', personaShema);