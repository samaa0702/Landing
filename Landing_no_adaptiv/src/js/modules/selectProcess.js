let process1 = document.querySelector('.process__item_first');
let process2 = document.querySelector('.process__item_second');
let process3 = document.querySelector('.process__item_third');
let process4 = document.querySelector('.process__item_fourth');

process1.onclick = function() {
	process1.classList.toggle('active')
	process2.classList.remove('active')
	process3.classList.remove('active')
	process4.classList.remove('active')
}

process2.onclick = function() {
	process1.classList.remove('active')
	process2.classList.toggle('active')
	process3.classList.remove('active')
	process4.classList.remove('active')
}

process3.onclick = function() {
	process1.classList.remove('active')
	process2.classList.remove('active')
	process3.classList.toggle('active')
	process4.classList.remove('active')
}

process4.onclick = function() {
	process1.classList.remove('active')
	process2.classList.remove('active')
	process3.classList.remove('active')
	process4.classList.toggle('active')
}