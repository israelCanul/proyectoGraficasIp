exports = module.exports = function(app, mongoose) {

	var msj = new mongoose.Schema({
	    fecha    : String
	  , hora     : String
	  , tipo : String
	  ,prioridad:String
	  , clasificacion : String
	  , protocolo : String
	  , ip_origen : String
	  , puerto_origen : String
	  , ip_destino : String
	  , puerto_destino : String

	});

	mongoose.model('dato',msj);

};