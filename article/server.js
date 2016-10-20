var http = require("http"),
    url = require("url"),
    fs = require("fs");

function gotoIndex(res) {
    var indexpath = url.parse('index.html').pathname,
        indexpage = fs.readFileSync(indexpath);
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end(indexpage);
}

function gotofind(reqs,reals,res) {
    var point = reqs.lastIndexOf("."),
        findtype = reqs.substring(point + 1),
        filetype,
        lostpath = __dirname + "/" + url.parse("404.htm").pathname,
        lostPage = fs.readFileSync(lostpath);
    fs.exists(reals, function (exists) {
        if (!exists) {
            res.writeHead(404,{'Content-Type' : 'text/html'});
            res.end(lostPage);            
        } else {
            switch (findtype) {
                case 'css' : filetype = 'text/css'; break;
                case 'png' : filetype = 'image/png'; break;
                case 'jpg' : filetype = 'image/jpg'; break;
                default : filetype = 'text/html'; break;
            };
            fs.readFile(reals, 'binary', function (err, file) {
                if (err) {
                    res.writeHead(500, {'Content-Type' : 'text/html'});
                    res.end(lostPage);
                } else {
                    res.writeHead(200, {'Content-Type' : filetype});
                    res.write(file,'binary');                    
                    res.end();
                }
            })
        }
    })    
}

http.createServer(function (req,res) {
    var reqsite = url.parse(req.url).pathname,
        realsite =__dirname + "/static" + reqsite;
    req.setEncoding('utf-8');
    if (reqsite == '/favico.ico') {
        return;
    } else {
        if (reqsite == '/' || reqsite == '/index' || reqsite == '/index.html') {
            gotoIndex(res);
        } else {
            gotofind(reqsite, realsite, res);
        }
    }
}).listen(8080,'192.168.1.117');
console.log('192.168.1.117:8080')