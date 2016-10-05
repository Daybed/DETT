var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-type' : 'text/plain'
	});
	response.write('Le serveur est lancé et fonctionne sur le port 1337')
	response.end();
	console.log('Le serveur fonctionne sur le port 1337');
}).listen(1337);

// TEST
