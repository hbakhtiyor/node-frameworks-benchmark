global.Promise = require('bluebird');

const AeroServer = require('aero/lib/Server');
const server = new AeroServer();

const headers = {
        'Connection': 'close'
};

server.routes.GET = {
	'': function(request, response) {
		response.writeHead(200, headers);
		response.end("Hello World!");
	},

	'keep-alive': function(request, response) {
		response.end("Hello World!");
	}
};

server.run({
	config: {
		ports: {
			http: 8000
		}
	}
}).then(()=>{
	console.log('AeroJS listening @ port 8000');
});
