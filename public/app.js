$(document).ready(function() {
	var socket = io.connect(document.URL);
	socket.on('test', function (data) {
		console.log(data);
	});
});