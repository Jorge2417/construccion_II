const myservicio = require('../service/documentService');
const promedio = require('salvanotapro');
const porcentaje = require('salvanotapor');

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

logicDocument.calculate = (body) => {
    const resul  =  promedio.printMsg(body.parcial1,body.parcial2, body.trabajo, body.final);
    const proP = promedio.printParcial(body.parcial1,body.parcial2);
    const resultado = porcentaje.printMsg(body.parcial1,body.parcial2, body.trabajo, body.final);
    const porP = porcentaje.printParcials(body.parcial1,body.parcial2);
    const porT = porcentaje.printTrab(body.trabajo);
    const porF = porcentaje.printFin(body.final);
/////////
    const a = Math.round(resul);
    const b = Math.round(resultado);
    
    const dato = {
        parcial1: body.parcial1,
        parcial2: body.parcial2,
        proParcial: proP,
        porParcial: porP,
        trabajo: body.trabajo,
        proTra: porT,
        final: body.final,
        proFinal: porF,
        promedio: resul,
        porcentaje: resultado,
        notaPro: a,
        notaPor: b
    };

    return dato;
}


module.exports = logicDocument;