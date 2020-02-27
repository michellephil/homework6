var video;
var volume;
var button;

function getVid(){
	video = document.querySelector("#myVideo"); 
	volume = document.querySelector("#volume");
}

function playVid() { 
	video.play();
	volume.innerHTML = video.volume * 100 + '%';
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= .1;
	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += .1;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime + 60 < video.duration) {
		video.currentTime += 60;
		console.log("Current location is " + video.currentTime);
	}
	else {
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Current location is " + video.currentTime);
		console.log("Speed is " + video.playbackRate);
	}
}

function mute() { 
	if (video.muted) {
		video.muted = false;
		console.log("Changing to unmuted");
		button = document.querySelector('#mute');
		button.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log("Changing to muted");
		button = document.querySelector('#mute');
		button.innerHTML = "Unmute"	
	}
}

function changeVolume() {
	var slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value / 100;
	volume.innerHTML = slider.value + '%';
	console.log("Volume is " + video.volume);
}

function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}
