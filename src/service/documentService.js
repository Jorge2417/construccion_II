const servicio = {};

servicio.verificar = (id) => {
    if(id.length === 8){
        return 'DNI';
    }else{
        if(id.length === 12){
            return 'Pasaporte';
        }else{
            return 'dato incorrecto';
        }
    }
};

servicio.sexo = (nombre)=>{
    return (/a$/).test(nombre)? 'F':'M'; 
};

servicio.edad = (fecha)=>{
    var hoy = new Date();
    var cumpleaños = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleaños.getFullYear();
    var mi = hoy.getMonth() - cumpleaños.getMonth();
    if(mi<0 || (mi === 0 && hoy.getDate() < cumpleaños.getDate())){
        edad--;
    }
    return edad;   
};



module.exports = servicio;