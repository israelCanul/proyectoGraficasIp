$(document).ready(function(){
	var socket=io();
	var datosAutocomplete=null;
	var point=[];
	var arrayPuntos=[];

	

	//llamamos y cargamos los datos para el autocomplete
	socket.emit('get data autoComplete');
	//habilitamos la funcion para cargar los datos ya sea de la busqueda en general o de la que realicemos con el 
	//autocomplete
	socket.on('get data', function (data) {
		$('#list-msgs').html("");
		var datos=data;
		if(datos.length>0){
			$('#list-msgs').html('<tr><th>Id</th><th>Fecha</th><th>Hora</th><th>Tipo</th><th>Prioridad</th><th>Clasificacion</th><th>Protocolo</th><th>Ip Origen</th><th>Puerto Origen</th><th>Ip Destino</th><th>Puerto Destino</th><tr>');
			datos.map(function(dato){
			$('#list-msgs').append(
									"<tr><td>"+  dato._id+"</td><td>"+  dato.fecha+"</td><td>"+
									dato.hora +"</td><td>"+
									dato.tipo+"</td><td>"+
									dato.prioridad+"</td><td>"+
									dato.clasificacion+"</td><td>"+
									dato.protocolo+"</td><td>"+
									dato.ip_origen+"</td><td>"+
									dato.puerto_origen+"</td><td>"+
									dato.ip_destino+"</td><td>"+
									dato.puerto_destino+'</td></tr>');
			});
		}
    });

	// socket para recibir los datos actualizados para la tabla 
	socket.on('graphics', function (data) {
	$("#contenedorLista").html("");	
	arrayPuntos=[];
	var datos=data;

	for (var i = 0 ; i < datos.length; i++) {
		var columnas=['Fecha','Hora','Tipo','Prioridad','Clasificacion','Protocolo','Ip Origen','Puerto Origen','Ip Destino','Puerto Destino'];
		point=[];

		$("#contenedorLista").append('<div class="columnas"><ul id="tabla_'+i+'"><th><h5>'+columnas[i]+'</h5></th></ul></div>');
		datos[i].map(function(dato){
			//console.log(dato);
			$("#tabla_"+i).append('<li>'+dato.nombre+' : '+
										dato.y+'</li>'
				);	
			tempPoint=[];
			tempPoint.push(dato.x,dato.y);
			point.push(tempPoint);
		});

		arrayPuntos.push(point);
	};


 $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        data: {
            table: 'columns'
        },
        title: {
            text: 'Grafica de dispersion de los datos Filtrados'
        },
        subtitle: {
            text: 'Mediante Consulta - Tabla Anterior'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Valores de La tabla'
            },
            categories: ['Fecha', 'Hora', 'Tipo','Prioridad','Clasificacion','Protocolo','Ip origen','Puerto origen','Ip destino','Puerto destino'],
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Contadores'
            }
        },
        /*legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },*/
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                	headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Cantidad {point.y} repetidos<br>Posicion {point.x} en la grafica'
                }
            }
        },
        series: [
        {
        	name: 'Fecha',
            color: 'rgba(223, 83, 83, .5)',
            label:'Fechass',
            data: arrayPuntos[0],

        }, 
        {
        	name: 'Hora',
            color: 'rgba(223, 83, 30, .5)',
            data: arrayPuntos[1],

        }, 
        {
        	name: 'Tipo',
            color: 'rgba(130, 83, 83, .5)',
            data: arrayPuntos[2],

        }, 
        {
        	name: 'Clasificacion',
            color: 'rgba(223, 83, 20, .5)',
            data: arrayPuntos[3],

        }, 
        {
        	name: 'Prioridad',
            color: 'rgba(10, 83, 83, .5)',
            data: arrayPuntos[4],

        }, 
        {
        	name: 'Protocolo',
            color: 'rgba(10, 83, 20, .5)',
            data: arrayPuntos[5],

        },
        {
        	name: 'Ip Origen',
            color: 'rgba(223, 255, 83, .5)',
            data: arrayPuntos[6]
        }, 
        {
        	name: 'Puerto Origen',
            color: 'rgba(223, 83, 255, .5)',
            data: arrayPuntos[7],

        }, 
        {
        	name: 'Ip Destino',
            color: 'rgba(0, 83, 83, .5)',
            data: arrayPuntos[8],

        },                                                 
        {
            name: 'Puerto Destino',
            color: 'rgba(119, 152, 0, .5)',
            data: arrayPuntos[9],
        }]
    });
});

// socket para recibir los datos actualizados para la tabla 
socket.on('graphicsDetalle', function (data) {

	var arrayPuntosDetalle=[];
	var datos=data;
	console.log(datos);


    $('#container2').highcharts({
    	chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Grafica de dispersion de los datos Filtrados'
        },
        subtitle: {
            text: 'Mediante Consulta - Tabla Anterior'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Valores de La tabla'
            },
            categories: ['Fecha', 'Hora', 'Tipo','Prioridad','Clasificacion','Protocolo','Ip origen','Puerto origen','Ip destino','Puerto destino'],
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Contadores'
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                	headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Cantidad {point.y} repetidos<br>Posicion {point.x} en la grafica'
                }
            }
        },
/*        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },*/
         series: datos
        /*series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]*/
    });

});



	//habilitamos la funcion para que cada vez que se envien los datos de busqueda se carge y reinicialize el autocomplete
	socket.on('get data autoComplete', function (datos) {
		//console.log(datos);
		datosAutocomplete=datos; 
	    $("#busqueda").MixCombo({
	        	    delay: 0,
				    minLength: 1,
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
				        //console.log(t.item.label);
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