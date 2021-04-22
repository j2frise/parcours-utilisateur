let star = document.querySelectorAll('.input1');

for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;
	});
}

let star1 = document.querySelectorAll('.input2');

for (let i = 0; i < star1.length; i++) {
	star1[i].addEventListener('click', function() {
		i = this.value;
	});
}