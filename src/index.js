let socket = io('ws://localhost:800/');

socket.on('enter', (data) => {
	showMessage('enter', data)
});

socket.on('message', (data) => {
	showMessage('message', data)
});

socket.on('leave', (data) => {
	showMessage('leave', data)
});

document.getElementById('sendBtn').onclick = function () {
	let txt = document.getElementById('sendTxt').value;
	console.log(txt)
	if (txt) {
		socket.emit('send', txt);
	}
};

function showMessage(type, data) {
	let div = document.createElement('div');
	let color;
	div.innerHTML = data;
	switch(type) {
		case 'enter':
			color = 'blue'
			break
		case 'leave':
			color = 'red'
			break
		default:
			break
	}
	div.style.color = color
	document.body.appendChild(div);
}
