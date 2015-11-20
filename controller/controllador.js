var mongoose= require('mongoose');
var Dato = mongoose.model('dato');

//GET - Funcion para regresar todos los books de la coleccion
//GET - This function return all books on the colection
exports.findAllDato = function(io) {
  //console.log("solicito");
   Dato.find(function(err, msj) {
      if(err) res.send(500, err.message);
      ////console.log('GET /messages'+msj);
      io.emit('get data', msj);    
	});	
};

exports.getDataAutoComplete = function(io) {
  //console.log("solicito");
   Dato.find(function(err, msj) {
    var strDest=[];
      if(err) res.send(500, err.message);
      ////console.log('GET /messages'+msj);
      if(msj.length>0){
        msj.map(function(mnsj){

          strDest.push ({
            label: mnsj.fecha,
            categoria:"Fecha"
          });
          strDest.push ({
            label: mnsj.prioridad,
            categoria:"Prioridad"
          });          
          strDest.push ({
            label: mnsj.hora,
            categoria:"Hora"
          });
          strDest.push ({
            label: mnsj.tipo,
            categoria:"Tipo"
          });
          strDest.push ({
            label: mnsj.clasificacion,
            categoria:"Clasificacion"
          });
          strDest.push ({
            label: mnsj.protocolo,
            categoria:"Protocolo"
          });
          strDest.push ({
            label: mnsj.ip_origen,
            categoria:"Ip origen"
          });           
          strDest.push ({
            label: mnsj.puerto_origen,
            categoria:"Puerto origen"
          });
          strDest.push ({
            label: mnsj.ip_destino,
            categoria:"Ip destino"
          });
          strDest.push ({
            label: mnsj.puerto_destino,
            categoria:"Puerto destino"
          });                                                                     
        });
        console.log(strDest);
        io.emit('get data autoComplete',strDest);
      }
      
      //io.emit('get data',strDest);    
  }); 
};


exports.findDatoByFecha = function(io,date) {
   Dato.find({fecha:date},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};

exports.findDatoByTime = function(io,time) {
   Dato.find({hora:time},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByPriority = function(io,priority) {
   Dato.find({prioridad:priority},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByType = function(io,type) {
   Dato.find({tipo:type},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByClassification = function(io,classification) {
   Dato.find({clasificacion:classification},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByProtocol = function(io,protocol) {
   Dato.find({protocolo:protocol},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByIpOrigin = function(io,IpOrigin) {
   Dato.find({ip_origen:IpOrigin},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByPortOrigin = function(io,portOrigin) {
   Dato.find({puerto_origen:portOrigin},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByIpDestination = function(io,IpDestination) {
   Dato.find({ip_destino:IpDestination},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByPortDestination = function(io,portDestination) {
   Dato.find({puerto_destino:portDestination},function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('get data', msj);    
  }); 
};
exports.addDato = function(data) {
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //hoy es 0!
var yyyy = hoy.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 
//fecha actual en formato yyyy/mm/dd
hoy = mm+'/'+dd+'/'+yyyy;

var dato = new Dato({
      fecha    : data.fecha
    , hora     : data.time
    , tipo : data.tipo
    , clasificacion : data.clas
    , protocolo : data.protocolo
    , ip_origen : data.ip_origen
    , puerto_origen : data.puerto_origen
    , ip_destino : data.ip_destino
    , puerto_destino : data.puerto_destino
  });
    
    dato.save(function(err, dato_guardado) {
      if(err) console.log("Error Guardando : "+dato_guardado);      
      //res.status(200).jsonp(dato_guardado);
      console.log("Mensaje Guardado : "+dato_guardado);
    });
};