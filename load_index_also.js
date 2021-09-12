var http = require('http');	//server package Iguess
var fs = require('fs');		//read, edit, write files
var url = require('url');	//getting info from theurl (e.g. /english might load another page)
const PORT = process.env.PORT || 5000;

http.createServer(function (req, res) {
	var q = url.parse(req.url, true); //	console.log(q.pathname); q as in query
//	console.log(q);
//	if (q.pathname=='/') {
//		var filename = './index.html';
//	} else {
//	var filename = "." + q.pathname; };
	var filename = "." + q.pathname;
	if (filename == './') {filename = './index';}

	//add .html when eneded
	var filename = filename + '.html';


	fs.readFile(filename, function(err, data) {
		//error if we get an error
		if (err) { //if error=true
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404, Page Not Found");
		}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
//	console.log("...incomming request: " + req.url)
	return res.end(); //basically same as res.end(); justneaterwith return
})
}).listen(PORT);

console.log('Server listening on port ${PORT}');