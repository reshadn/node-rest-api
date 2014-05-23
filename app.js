var restify = require('restify');
var mongojs = require('mongojs');

var ip_address = '127.0.0.1',
	port = '8080';

var server = restify.createServer({
	name : "node-rest-api-jobs"
});

//plugin to parse HTTP query strings
server.use(restify.queryParser());
//convert request data to JS Object
server.use(restify.bodyParser());
//CORS support
server.use(restify.CORS());

server.listen(port, ip_address, function() {
	console.log('%s listening at %s ', server.name, server.url);
});

