var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-type' : 'text/plain'
	});
	response.write('Natasha est ready ! :)')
	response.end();
	console.log('Natasha serveur tourne bien sur le port 1337');
}).listen(1337);