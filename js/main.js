(() => {
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playAudio'),
		pause = document.querySelector('#pauseAudio'),
		rewind = document.querySelector('#rewindAudio');

	function playAudio() {
		aud.play();
	}

	function pauseAudio() {
		aud.pause(true);
	}

	function rewindAudio() {
		aud.currentTime = 0;
	}

	play.addEventListener("click", playAudio);
	pause.addEventListener("click", pauseAudio);
	rewind.addEventListener("click", rewindAudio);


})();