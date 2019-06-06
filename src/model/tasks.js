const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const personaShema = new Shema({
    applicant_person: String, 
    identification_type: String,
    identification_number: String, 
    fecha: String, 
    sex: String,
    age: String,
    reference_person: String
});

module.exports = mongoose.model('document', personaShema);