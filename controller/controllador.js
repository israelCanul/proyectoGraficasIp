var mongoose= require('mongoose');
var Dato = mongoose.model('dato');
var contDatos= require('./controllador');
//GET - Funcion para regresar todos los books de la coleccion
//GET - This function return all books on the colection


exports.separar=function(datos){
  var valueColumn={'fecha':'0','hora':'1','tipo':'2','prioridad':'3','clasificacion':'4','protocolo':'5','ip_origen':'6','puerto_origen':'7','ip_destino':'8','puerto_destino':'9'};  
  var general=[],Fecha={},Hora={},Tipo={},Prioridad={},Clasificacion={},Protocolo={},Ip_Origen={},Puerto_Origen={},Ip_Destino={},Puerto_Destino={};
  var Fecha1=[],Hora1=[],Tipo1=[],Prioridad1=[],Clasificacion1=[],Protocolo1=[],Ip_Origen1=[],Puerto_Origen1=[],Ip_Destino1=[],Puerto_Destino1=[];

  datos.map(function(item){  
    // se arma el array para las fechas
    if(typeof(Fecha[""+item.fecha])=='undefined'){
      Fecha1.push({'nombre':""+item.fecha});
      Fecha[""+item.fecha]={
        'x':0,
        'y':1
      };
    }else{
      Fecha[""+item.fecha].y++;
    }
    //se arma el array para las horas
    if(typeof(Hora[""+item.hora])=='undefined'){
      Hora1.push({'nombre':""+item.hora});
      Hora[""+item.hora]={
        'x':1,
        'y':1
      };
    }else{
      Hora[""+item.hora].y++;
    }
    //se arma el array para el tipo
    if(typeof(Tipo[""+item.tipo])=='undefined'){
      Tipo1.push({'nombre':""+item.tipo});
      Tipo[""+item.tipo]={
        'x':2,
        'y':1
      };
    }else{
      Tipo[""+item.tipo].y++;
    }
    //se arma el array para la prioridad
    if(typeof(Prioridad[""+item.prioridad])=='undefined'){
      Prioridad1.push({'nombre':""+item.prioridad});
      Prioridad[""+item.prioridad]={
        'x':3,
        'y':1
      };
    }else{
      Prioridad[""+item.prioridad].y++;
    }
    //se arma el array para la Clasificacion
    if(typeof(Clasificacion[""+item.clasificacion])=='undefined'){
      Clasificacion1.push({'nombre':""+item.clasificacion});
      Clasificacion[""+item.clasificacion]={
        'x':4,
        'y':1
      };
    }else{
      Clasificacion[""+item.clasificacion].y++;
    }  
    //se arma el array para el Protocolo
    if(typeof(Protocolo[""+item.protocolo])=='undefined'){
      Protocolo1.push({'nombre':""+item.protocolo});
      Protocolo[""+item.protocolo]={
        'x':5,
        'y':1
      };
    }else{
      Protocolo[""+item.protocolo].y++;
    }  
    //se arma el array para la Ip de Origen
    if(typeof(Ip_Origen[""+item.ip_origen])=='undefined'){
      Ip_Origen1.push({'nombre':""+item.ip_origen});
      Ip_Origen[""+item.ip_origen]={
        'x':6,
        'y':1
      };
    }else{
      Ip_Origen[""+item.ip_origen].y++;
    } 
    // se arma el array para los puertos origen    
    if(typeof(Puerto_Origen[""+item.puerto_origen])=='undefined'){
      Puerto_Origen1.push({'nombre':""+item.puerto_origen});
      Puerto_Origen[""+item.puerto_origen]={
        'x':7,
        'y':1
      };
      //console.log(item.puerto_origen);
    }else{
      Puerto_Origen[""+item.puerto_origen].y++;
      //console.log(item.puerto_origen);
    }     
    //se arma el array para la Ip de destino
    if(typeof(Ip_Destino[""+item.ip_destino])=='undefined'){
      Ip_Destino1.push({'nombre':""+item.ip_destino});
      Ip_Destino[""+item.ip_destino]={
        'x':8,
        'y':1
      };
    }else{
      Ip_Destino[""+item.ip_destino].y++;
    }                           
    //se arma el array para Puerto de Destino
    if(typeof(Puerto_Destino[""+item.puerto_destino])=='undefined'){
      Puerto_Destino1.push({'nombre':""+item.puerto_destino});
      Puerto_Destino[""+item.puerto_destino]={
        'x':9,
        'y':1
      };
    }else{
      Puerto_Destino[""+item.puerto_destino].y++;
    } 
  });
  Fecha1.map(function(date){
    //console.log(Fecha[date.nombre]);
    date.x=Fecha[date.nombre].x;
    date.y=Fecha[date.nombre].y;    
  });
  Hora1.map(function(hora){
    //console.log(Hora[hora.nombre]);
    hora.x=Hora[hora.nombre].x;
    hora.y=Hora[hora.nombre].y;    
  });
  Tipo1.map(function(tipo){
    //console.log(Tipo[tipo.nombre]);
    tipo.x=Tipo[tipo.nombre].x;
    tipo.y=Tipo[tipo.nombre].y;    
  });
  Prioridad1.map(function(prioridad){
    console.log(Prioridad[prioridad.nombre]);
    prioridad.x=Prioridad[prioridad.nombre].x;
    prioridad.y=Prioridad[prioridad.nombre].y;    
  });
  Clasificacion1.map(function(clasificacion){
    //console.log(Clasificacion[clasificacion.nombre]);
    clasificacion.x=Clasificacion[clasificacion.nombre].x;
    clasificacion.y=Clasificacion[clasificacion.nombre].y;    
  });
  Protocolo1.map(function(protocolo){
    //console.log(Protocolo[protocolo.nombre]);
    protocolo.x=Protocolo[protocolo.nombre].x;
    protocolo.y=Protocolo[protocolo.nombre].y;    
  });
  Ip_Origen1.map(function(ip_origen){
    //console.log(Ip_Origen[ip_origen.nombre]);
    ip_origen.x=Ip_Origen[ip_origen.nombre].x;
    ip_origen.y=Ip_Origen[ip_origen.nombre].y;    
  });
  Puerto_Origen1.map(function(puerto_origen){
    //console.log(Puerto_Origen[puerto_origen.nombre]);
    puerto_origen.x=Puerto_Origen[puerto_origen.nombre].x;
    puerto_origen.y=Puerto_Origen[puerto_origen.nombre].y;    
  });
  Ip_Destino1.map(function(ip_destino){
    //console.log(Ip_Destino[ip_destino.nombre]);
    ip_destino.x=Ip_Destino[ip_destino.nombre].x;
    ip_destino.y=Ip_Destino[ip_destino.nombre].y;    
  });
  Puerto_Destino1.map(function(puerto_destino){
   //
    puerto_destino.x=Puerto_Destino[puerto_destino.nombre].x;
    puerto_destino.y=Puerto_Destino[puerto_destino.nombre].y;    
  });  
  // general para el primer grafico de contadores
  general=[
    Fecha1,Hora1,Tipo1,Clasificacion1,Prioridad1,Protocolo1,Ip_Origen1,Puerto_Origen1,Ip_Destino1,Puerto_Destino1
  ];
  //general para el segundo grafico
  /*var general2=[
    Fecha,Hora,Tipo,Clasificacion,Prioridad,Protocolo,Ip_Origen,Puerto_Origen,Ip_Destino,Puerto_Destino
  ];*/
  var general2=[];
  datos.map(function(dato){
    var listItems=[];
    var points=[];
    var allPoints=[];
    
    
    points.push(/*[dato.fecha].x,*/Fecha[dato.fecha].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Hora[dato.hora].x,*/Hora[dato.hora].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Tipo[dato.tipo].x,*/Tipo[dato.tipo].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Prioridad[dato.prioridad].x,*/Prioridad[dato.prioridad].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Clasificacion[dato.clasificacion].x,*/Clasificacion[dato.clasificacion].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Protocolo[dato.protocolo].x,*/Protocolo[dato.protocolo].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Ip_Origen[dato.ip_origen].x,*/Ip_Origen[dato.ip_origen].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Puerto_Origen[dato.puerto_origen].x,*/Puerto_Origen[dato.puerto_origen].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Ip_Destino[dato.ip_destino].x,*/Ip_Destino[dato.ip_destino].y);
    //allPoints.push(points);
    //points=[];
    points.push(/*Puerto_Destino[dato.puerto_destino].x,*/Puerto_Destino[dato.puerto_destino].y);
    //allPoints.push(points);
    listItems=({
      'name':dato._id,
      'data':points
    });
    
    general2.push(listItems);                        
    console.log(listItems);
   });  
 

  respuesta={
    'grafico1':general,// primer grafico
    'grafico2':general2// segundo grafico
  }
  return respuesta;
}





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
        //console.log(strDest);
        io.emit('get data autoComplete',strDest);
      }
      
      //io.emit('get data',strDest);    
  }); 
};

exports.findAllDato = function(io) {
  //console.log("solicito");
   Dato.find(function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2);
      io.emit('get data', msj);    
  }); 
};


exports.findDatoByFecha = function(io,date) {
     
   Dato.find({fecha:date},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);

      //console.log(graficos);
      
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);

  }); 
};

exports.findDatoByTime = function(io,time) {
   Dato.find({hora:time},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByPriority = function(io,priority) {
   Dato.find({prioridad:priority},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByType = function(io,type) {
   Dato.find({tipo:type},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByClassification = function(io,classification) {
   Dato.find({clasificacion:classification},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByProtocol = function(io,protocol) {
   Dato.find({protocolo:protocol},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByIpOrigin = function(io,IpOrigin) {
   Dato.find({ip_origen:IpOrigin},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByPortOrigin = function(io,portOrigin) {
   Dato.find({puerto_origen:portOrigin},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByIpDestination = function(io,IpDestination) {
   Dato.find({ip_destino:IpDestination},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
      io.emit('get data', msj);    
  }); 
};
exports.findDatoByPortDestination = function(io,portDestination) {
   Dato.find({puerto_destino:portDestination},function(err, msj) {
      if(err) res.send(500, err.message);
      var graficos=contDatos.separar(msj);
      //console.log(graficos);
      io.emit('graphics', graficos.grafico1);
      io.emit('graphicsDetalle', graficos.grafico2); 
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