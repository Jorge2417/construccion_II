const chai = require('chai');

const logica = require('../src/logic/documentLogic');
var assert = chai.assert;
const nuevaPersona = {
    apellido: 'Salva Durand',
    nombre: 'Jennifer J',
    idNumber: "76150112",
    fecha: '22/03/1996',
    sex: 'Femenino',
    contacto: 'Jorge Andre',
};
const menorPersona = {
    apellido: 'Salva Durand',
    nombre: 'Job C',
    idNumber: "76158754",
    fecha: '03/09/2004',
    sex: 'Masculino',
    contacto: 'Jorge Andre',
};

describe('Correcto guardado del documento', ()=> {
    it('si es menor de edad, la persona de referencia(contacto) no cambia', function(){
        result = logica.save(nuevaPersona);
        assert.equal(result.reference_person, 'Jennifer J Salva Durand');
    });
    
    it('si es menor de edad, la persona de referencia(contacto) es la que se registro', function(){
        result = logica.save(menorPersona);
        assert.equal(result.reference_person, 'Job C Salva Durand');
    });
});