let app = require('http').createServer()
let io  = require('socket.io')(app)

let PORT = 800
let clientCount = 0

app.listen(PORT);

io.on('connection', function (socket) {
	clientCount++
	socket.nickname = 'user' + clientCount
	const name = socket.nickname;

	io.emit('enter', name + 'comes in') // 广播(所有socket)

	socket.on('send', function (data) {
		io.emit('message', '[' + name + '] ' + data)
	});

	socket.on('disconnect', function() {
		io.emit('leave', name + ' left')
	})
});