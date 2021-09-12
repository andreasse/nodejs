var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res) {
	var q = url.parse(req.url, true); //	console.log(q.pathname);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data) {
		//error if we get an error
		if (err) { //if error=true
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
//	console.log("...incomming request: " + req.url)
	return res.end(); //basically same as res.end(); justneaterwith return
})
}).listen(8080);

console.log("Server listening on port 8080...");