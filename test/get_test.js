const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);   
const url= 'http://localhost:3000';

describe('vistas',()=>{
    it('usando metodo get', function() {
        chai.request(url)
        .get('/')
        .end((err, res) =>{
            console.log(res.boy);
            expect(res).to.have.status(200);
        })
    });
});
