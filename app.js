var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
// libreria para la bd 
 var mongoose= require('mongoose');
// inicializacion de app y de socket
var app = express();
var socket_io  = require('socket.io');
var io  = socket_io();
app.io = io;

//conexion con la bd y callback de la conexion
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('conectado a la BD');
});

// se importan los modelos y los controladores para la bd
var models     = require('./model/dato')(app, mongoose);
var contDatos= require('./controller/controllador');
//var Dato = mongoose.model('dato');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

//conexiones con el socket
  io.on('connection',function(socket){
    //avisamos a consola de un nuevo usuario conectado 
    console.log("New user connected");
    contDatos.findAllDato(io);
    contDatos.getDataAutoComplete(io);

    // funcion que se encarga de compartir la informacion
    // con los nuevos clientes que soliciten info
    socket.on('get data', function() {
      // obtiene todos los mensajes
      contDatos.findAllDato(io);      
    });
    socket.on('get data autocomplete', function() {
      // obtiene todos los mensajes
      contDatos.getDataAutoComplete(io);      
    });    
    socket.on('get data by date', function(date) {
      // obtiene todos los mensajes
      contDatos.findDatoByFecha(io,date);      
    });
    socket.on('get data by time', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByTime(io,param);      
    });
    socket.on('get data by type', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByType(io,param);      
    });
    socket.on('get data by priority', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByPriority(io,param);      
    });    
    socket.on('get data by clasification', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByClassification(io,param);      
    });
    socket.on('get data by protocol', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByProtocol(io,param);      
    });
    socket.on('get data by ipOrigin', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByIpOrigin(io,param);      
    });
    socket.on('get data by portOrigin', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByPortOrigin(io,param);      
    });
    socket.on('get data by ipDestination', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByIpDestination(io,param);      
    });
    socket.on('get data by portDestination', function(param) {
      // obtiene todos los mensajes
      contDatos.findDatoByPortDestination(io,param);      
    });    
/*    socket.on('new message', function(msg) {
      // agrega un nuevo mensaje
      contDatos.addMessages(msg);
      var author={
        author:msg.author,
        color:msg.conf.color
      };
      //contDatos.addAuthor(author);
      contDatos.findAllDato(io); 
    }); */
    // mostramos en consola cuando un cliente 
      // se desconecta
      socket.on('disconnect',function(){
        console.log("User disconnected");
      })

  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
