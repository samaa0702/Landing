let feature1 = document.querySelector('.features__item_first');
let feature2 = document.querySelector('.features__item_second');
let feature3 = document.querySelector('.features__item_third');

feature1.onclick = function() {
	feature1.classList.toggle('active')
	feature2.classList.remove('active')
	feature3.classList.remove('active')
}

feature2.onclick = function() {
	feature1.classList.remove('active')
	feature2.classList.toggle('active')
	feature3.classList.remove('active')
}

feature3.onclick = function() {
	feature1.classList.remove('active')
	feature2.classList.remove('active')
	feature3.classList.toggle('active')
}