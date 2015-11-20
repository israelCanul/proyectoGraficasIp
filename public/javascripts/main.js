$(document).ready(function(){
	var socket=io();
	var datosAutocomplete=null;
	//llamamos y cargamos los datos para el autocomplete
	socket.emit('get data autoComplete');
	//habilitamos la funcion para cargar los datos ya sea de la busqueda en general o de la que realicemos con el 
	//autocomplete
	socket.on('get data', function (data) {
		$('#list-msgs').html("");
	var datos=data;
		if(datos.length>0){
			console.log("son mas de 0 : "+ datos.length);
			
			//console.log(datos);
			datos.map(function(dato){
				$('#list-msgs').append('<div>'+  dato.fecha+", "+
	  dato.hora +", "+
	  dato.tipo+", "+
	  dato.prioridad+", "+
	  dato.clasificacion+", "+
	  dato.protocolo+", "+
	  dato.ip_origen+", "+
	  dato.puerto_origen+", "+
	  dato.ip_destino+", "+
	  dato.puerto_destino+'</div>');			
			});
		}
      
    });
	//habilitamos la funcion para que cada vez que se envien los datos de busqueda se carge y reinicialize el autocomplete
	socket.on('get data autoComplete', function (datos) {
		console.log(datos);
		datosAutocomplete=datos; 
	    $("#busqueda").MixCombo({
	        	    delay: 0,
				    minLength: 3,
				    source: function(e, t) {
				        var o = new RegExp($.ui.autocomplete.escapeRegex(e.term), "i");
				        t($.grep(datos, function(e) {
				            return e = e.label || e.value || e, o.test(e) || o.test(normalize(e))
				        }))
				    },
				    change: function(e, t) {
				        $("#busqueda").val("");
				    },
				    select: function(e, t) {
				        console.log(t.item.label);
				        // aqui se cargan las funciones correspondientes de acuerdo al tipo de busqueda que realizen
				        if(t.item.categoria=='Fecha'){
				        	socket.emit('get data by date',t.item.label);
				        }
				        if(t.item.categoria=='Hora'){
				        	socket.emit('get data by time',t.item.label);
				        }
				        if(t.item.categoria=='Tipo'){
				        	socket.emit('get data by type',t.item.label);
				        }
				        if(t.item.categoria=='Prioridad'){
				        	socket.emit('get data by priority',t.item.label);
				        }				        
				        if(t.item.categoria=='Clasificacion'){
				        	socket.emit('get data by clasification',t.item.label);
				        }
				        if(t.item.categoria=='Ip origen'){
				        	socket.emit('get data by ipOrigin',t.item.label);
				        }
				        if(t.item.categoria=='Protocolo'){
				        	socket.emit('get data by protocol',t.item.label);
				        }
				        if(t.item.categoria=='Puerto origen'){
				        	socket.emit('get data by portOrigin',t.item.label);
				        }
				        if(t.item.categoria=='Ip destino'){
				        	socket.emit('get data by ipDestination',t.item.label);
				        }	
				        if(t.item.categoria=='Puerto destino'){
				        	socket.emit('get data by portDestination',t.item.label);
				        }					        				        				        				        				        
				    }
	    });		   
    });


   
		// autocomplete customisado para el bookin
        $.widget("custom.MixCombo", $.ui.autocomplete, {
            _create: function() {
                this._super();
                this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
            },
            _renderItem: function( ul, item ) {
                return $( "<li>" )
                    .attr("data-value", item.value)
                    .data("ui-autocomplete-item", item)
                    .data("item", item)
                    .append(item.label)
                    .appendTo( ul );
            },
            _renderMenu:function(e,t){
                var n=this,r="",cat=[];

                $.each(t,function(t,i){
                    if(cat[i.categoria]!=true){
                        e.append("<li class='ui-autocomplete-category'>"+i.categoria+"</li>");
                        r=i.categoria
                        cat[i.categoria]=true;
                    }
                    n._renderItem(e,i);
                });
            }
        });
		var accentMap = {
		    "á": "a",
		    "é": "e",
		    "í": "i",
		    "ó": "o",
		    "ú": "u"
		};
		var normalize = function(e) {
		    for (var t = "", o = 0; o < e.length; o++) t += accentMap[e.charAt(o)] || e.charAt(o);
		    return t
		}; 
        

});