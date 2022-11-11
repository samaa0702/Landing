var videoBlock = document.getElementById('video__block');
var vid = document.getElementById('vid');
var vidContent = document.getElementById('vid__content');
var vidDots = document.getElementById('dots');

videoBlock.addEventListener('click', function() {
	if (vid.paused) {
		vid.play();
		videoBlock.classList.remove('paused');
		vidContent.classList.add('display-none');
		vidDots.classList.add('display-none');
	}
	else {
		vid.pause();
		videoBlock.classList.add('paused');
		vidContent.classList.remove('display-none');
		vidDots.classList.remove('display-none');
	};
})