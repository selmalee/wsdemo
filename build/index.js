'use strict';

var socket = io('ws://localhost:800/');

socket.on('enter', function (data) {
	showMessage('enter', data);
});

socket.on('message', function (data) {
	showMessage('leave', data);
});

socket.on('leave', function (data) {
	showMessage('leave', data);
});

document.getElementById('sendBtn').onclick = function () {
	var txt = document.getElementById('sendTxt').value;
	console.log(txt);
	if (txt) {
		socket.emit('send', txt);
	}
};

function showMessage(type, data) {
	var div = document.createElement('div');
	var color = void 0;
	div.innerHTML = data;
	switch (type) {
		case 'enter':
			color = 'blue';
			break;
		case 'leave':
			color = 'red';
			break;
		default:
			break;
	}
	div.style.color = color;
	document.body.appendChild(div);
}