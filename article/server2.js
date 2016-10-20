var url = require("url"),
	http = require("http"),
	fs = require("fs");
	
function gotoFind(reqsite, resurl, res) {
	var resurldot = reqsite.lastIndexOf("."),
		resType = reqsite.substr(resurldot),
		page404 = __dirname + "/" + url.parse("404.htm").pathname,
		content404 = fs.readFileSync(page404),
		flType;

	fs.exists(resurl, function (exists) {
		if (!exists) {
			res.writeHead(404,{'Content-Type' : 'text/html'});
			res.end(content404);
		} else {
			var resfile = fs.readFileSync(resurl, 'binary');
			switch (resType) {
				case '.css': flType = 'text/css'; break;
				case '.js': flType = 'text/javascript';break;
				case '.png': flType = "image/png"; break;
				case '.jpg': flType = "image/jpg"; break;
				case '.jpeg': flType = "image/jpeg"; break;
				case '.json':flType = "application/json";break;
				case '.map': flType = "application/map";break;
				case '.html':
				case '.htm': flType = "text/html";break;
				default: console.log(resType);flType = "text/html";break;
			}
			res.writeHead(200, {'Content-Type': flType});
			res.write(resfile, 'binary');
			res.end();
		}
	});
}
	
	
http.createServer(function (req, res) {
	var requrl = url.parse(req.url).pathname,
		resurl = __dirname + "/" + requrl;
	req.setEncoding('utf-8');
	if (requrl == "/favicon.ico") {
		return;
	} else {
		if (requrl == "/") {
			var indexurl = __dirname + "/index.html",
				indexfile = fs.readFileSync(indexurl, 'binary');
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(indexfile, 'binary');
			res.end();
		} else {
			gotoFind(requrl, resurl, res);
		}
	}
}).listen(8080,'192.168.1.117');
console.log("run at 192.168.1.117:8080");