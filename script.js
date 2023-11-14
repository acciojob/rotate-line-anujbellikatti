//your JS code here. If required.
let line = document.getElementById("line")
	let x = 0;
let y = setInterval(function() {
	line.style.transform=`rotate(${x}deg)`
	x++;
}, 200);
