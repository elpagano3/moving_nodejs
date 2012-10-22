var nombre;
var arrayNames = {};

var websocket=io.connect();
	$(document).on("ready", function(){

		websocket.emit('prueba',1);
		websocket.on('nuevoMensaje', function(mensaje){
			if(mensaje==1)
				console.log("Connected!");
			else
				console.log("error");
			});

			websocket.on('moveUp', function(mensaje){
				if(mensaje=="up"){
					console.log("Moviendo Arriba..");
					$("#gnu").animate({"bottom": "+=45px"}, "fast");
						}
				else
					console.log("Falló movimiento");

				});//Termina websocket.on moveUp

			websocket.on('moveDown', function(mensaje){
				if(mensaje=="down"){
					console.log("Moviendo hacia abajo..");
					$("#gnu").animate({"top": "+=30px"}, "fast");
						}
				else
					console.log("Falló movimiento");

		});//Termina websocket.on moveDown

			websocket.on('moveRight', function(mensaje){
				if(mensaje=="right"){
					console.log("Moviendo a la derecha..");
					$("#gnu").animate({"left": "+=45px"}, "fast");
						}
				else
					console.log("Falló movimiento");

		});//Termina websocket.on moveRight

		websocket.on('moveLeft', function(mensaje){
				if(mensaje=="left"){
					console.log("Moviendo a la izquierda..");
					$("#gnu").animate({"right": "+=30px"}, "fast");
						}
				else
					console.log("Falló movimiento");

		});//Termina websocket.on moveDown

	});//Termina onReady