var express = require('express'),http = require('http');
var app = express();
var server = http.createServer(app);
app.set('title', 'Moving');
app.set('views',__dirname + '/views');
app.set('view options', { layout: false });
app.get('title');
app.configure(function(){
	app.use(express.static(__dirname));
	app.use(express.static(__dirname + '/public'));
});
app.get('/',function(req,res){
	res.render('index.jade',{layout:false});
});
app.get('/pad.html', function(req, res){
  res.sendfile(__dirname + '/pad.html');
});
server.listen(8080);
console.log("Server listen port 8080");

//websockets

var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
	console.log("Sockect Connected");
	socket.on('prueba', function(conexion){
		if(conexion==1){
		console.log("New line is open");
		var mensaje=1;
		io.sockets.emit('nuevoMensaje', mensaje);
		}
		else {console.log("Conexion False");}
	});

	socket.on('padCon', function(conexion){
		if(conexion==1){
		console.log("Pad Detected");
		var mensaje=1;
		io.sockets.emit('nuevoMensaje', mensaje);
		}
		else {console.log("Conexion False");}
	});

	socket.on('upClick', function(conexion){
		if(conexion==1){console.log("Click up");
		var msg="up";
		io.sockets.emit('moveUp', msg);
		}
		else {console.log("not detected click");}
	});

	socket.on('downClick', function(conexion){
		if(conexion==1){console.log("Click down");
		var msg="down";
		io.sockets.emit('moveDown', msg);
		}
		else {console.log("not detected click");}
	});

	socket.on('rightClick', function(conexion){
		if(conexion==1){console.log("Click right");
		var msg="right";
		io.sockets.emit('moveRight', msg);
		}
		else {console.log("not detected click");}
	});

	socket.on('leftClick', function(conexion){
		if(conexion==1){console.log("Click left");
		var msg="left";
		io.sockets.emit('moveLeft', msg);
		}
		else {console.log("not detected click");}
	});

});//Termina io.sockets.on