const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const myNota = new Shema({
    usuario: String,
    universidad: String,
    parcial1: String, 
    parcial2: String,
    proParcial: String,
    porParcial: String,
    trabajo: String,
    proTra: String, 
    final: String,
    proFinal: String, 
    promedio: String,
    porcentaje: String,
    notaPro: String,
    notaPor: String
});

module.exports = mongoose.model('notas', myNota);
