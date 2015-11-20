$(document).ready(function(){
	var socket=io();

	socket.on('get data', function (data) {
		$('#list-msgs').html("");
	var datos=data;
		if(datos.length>0){
			console.log("son mas de 0 : "+ datos.length);
			$('#list-msgs').text(datos);
			datos.map(function(dato){
							
			});
		}
      
    });

    socket.emit('get data by date', '2015/11/09');
});