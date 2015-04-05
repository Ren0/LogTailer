var express = require("express");
var app = express();
var port = 3700;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public')); 

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (user) {
	console.log('connection: ');
	//console.log(user);
	
	Tail = require('tail').Tail;
	tail = new Tail("./test.log");
	tail.on("line", function(data) {
		console.log(data);
		user.emit('test', data);
	});
	tail.on("error", function(error) {
		console.log('ERROR: ', error);
	});	
});

app.get("/", function(req, res){
    res.render("index.html");
	
	
});