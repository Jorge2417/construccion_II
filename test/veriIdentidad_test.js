const chai = require('chai');

const testService = require('../src/service/documentService');

var assert = chai.assert;
const a = ['76150112','458796521314','465'];
const fecha = '07/11/1998';
////////////////////////
describe('Vefiricar si identifica el DNI o Pasaporte,(Unit testing)', function(){
    it('si es DNI', function(){
        result= testService.verificar(a[0]);
        assert.equal(result, 'DNI');
    });
    it('si es Pasaporte', function(){
        result = testService.verificar(a[1]);
        assert.equal(result, 'Pasaporte');
    });
});
////////////////////////////
describe('correcto calculo de edad, (Unit testing)', function(){
    it('ver la edad si es correcta', function(){
        result = testService.edad(fecha);
        assert.equal(result, 20);
    });
});
/////////////////////////



