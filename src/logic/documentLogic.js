const myservicio = require('../service/documentService');

const logicDocument = {};

logicDocument.save = (body) => {
    const designar = (dato) =>{
        if (myservicio.edad(dato) >= 18) {
            return (body.nombre + ' ' + body.apellido);
        } else {
            return (body.contacto);
        }
    };
    const verifi = (dato) =>{
        if (myservicio.edad(dato) >= 18) {
            return (body.contacto);
        } else {
            return (body.nombre + ' ' + body.apellido);
        }
    };
    const rg = {
        applicant_person: designar(body.fecha),
        identification_type: myservicio.verificar(body.idNumber),
        identification_number: body.idNumber,
        fecha: body.fecha,
        sex: body.sex != '' ? body.sex : myservicio.sexo(body.nombre),
        age: myservicio.edad(body.fecha),
        reference_person: verifi(body.fecha),
    };
   
    return rg;
};

module.exports = logicDocument;