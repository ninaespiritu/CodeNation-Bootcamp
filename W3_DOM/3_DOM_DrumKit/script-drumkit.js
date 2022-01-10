const button = document.querySelector("button");
const h1 = document.querySelector("h1");

const audioClap = document.getElementById("audioClap");
const audioHihat = document.getElementById("audioHihat");
const audioBass = document.getElementById("audioBass");
const audioKick = document.getElementById("audioKick");
const audioCrashCymbal = document.getElementById("audioCrashCymbal");
const audioRideCymbal = document.getElementById("audioRideCymbal");
const audioSnare = document.getElementById("audioSnare");
const audioSmallTom = document.getElementById("audioSmallTom");
const audioMediumTom = document.getElementById("audioMediumTom");

const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const bass = document.getElementById("bass");
const kick = document.getElementById("kick");
const crashcymbal = document.getElementById("crashcymbal");
const ridecymbal = document.getElementById("ridecymbal");
const snare = document.getElementById("snare");
const smalltom = document.getElementById("smalltom");
const mediumtom = document.getElementById("mediumtom");

// KEYUP = NO COLOR
document.addEventListener("keyup", () => {
	clap.style.backgroundColor = "#2b2f4b";
	hihat.style.backgroundColor = "#2b2f4b";
	bass.style.backgroundColor = "#2b2f4b";
	kick.style.backgroundColor = "#2b2f4b";
	crashcymbal.style.backgroundColor = "#2b2f4b";
	ridecymbal.style.backgroundColor = "#2b2f4b";
	snare.style.backgroundColor = "#2b2f4b";
	smalltom.style.backgroundColor = "#2b2f4b";
	mediumtom.style.backgroundColor = "#2b2f4b";

	h1.style.color = "white";
	h1.style.fontSize = "40px";
});

// KEYPRESS = SOUND AND COLOR
document.addEventListener("keypress", (event) => {
	if (event.key == "a") {
		audioClap.src = "audio/clap.mp3";
		clap.style.backgroundColor = "#3B62B1";
		h1.style.color = "#3B62B1";
		h1.style.fontSize = "45px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "s") {
		audioHihat.src = "audio/hihat.mp3";
		hihat.style.backgroundColor = "#515EC3";
		h1.style.color = "#515EC3";
		h1.style.fontSize = "45px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "d") {
		audioBass.src = "audio/bass.mp3";
		bass.style.backgroundColor = "#6C57B7";
		h1.style.color = "#6C57B7";
		h1.style.fontSize = "42px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "f") {
		audioKick.src = "audio/kick.mp3";
		kick.style.backgroundColor = "#994C9F";
		h1.style.color = "#994C9F";
		h1.style.fontSize = "42px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "g") {
		audioCrashCymbal.src = "audio/crashcymbal.mp3";
		crashcymbal.style.backgroundColor = "#9F4C77";
		h1.style.color = "#9F4C77";
		h1.style.fontSize = "52px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "h") {
		audioRideCymbal.src = "audio/ridecymbal.mp3";
		ridecymbal.style.backgroundColor = "#B35E66";
		h1.style.color = "#B35E66";
		h1.style.fontSize = "50px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "j") {
		audioSnare.src = "audio/snare.mp3";
		snare.style.backgroundColor = "#B3AB55";
		h1.style.color = "#B3AB55";
		h1.style.fontSize = "47px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "k") {
		audioSmallTom.src = "audio/smalltom.mp3";
		smalltom.style.backgroundColor = "#5F9851";
		h1.style.color = "#5F9851";
		h1.style.fontSize = "42px";
	}
});
document.addEventListener("keypress", (event) => {
	if (event.key == "l") {
		audioMediumTom.src = "audio/mediumtom.mp3";
		mediumtom.style.backgroundColor = "#369C7C";
		h1.style.color = "#369C7C";
		h1.style.fontSize = "45px";
	}
});

// MOUSE CLICK
clap.addEventListener("click", () => {
	audioClap.src = "audio/clap.wav";
});
hihat.addEventListener("click", () => {
	audioHihat.src = "audio/hihat.wav";
});
bass.addEventListener("click", () => {
	audioBass.src = "audio/bass.wav";
});
kick.addEventListener("click", () => {
	audioKick.src = "audio/kick.wav";
});
crashcymbal.addEventListener("click", () => {
	audioCrashCymbal.src = "audio/crashcymbal.wav";
});
ridecymbal.addEventListener("click", () => {
	audioRideCymbal.src = "audio/ridecymbal.wav";
});
snare.addEventListener("click", () => {
	audioSnare.src = "audio/snare.wav";
});
smalltom.addEventListener("click", () => {
	audioSmallTom.src = "audio/smalltom.wav";
});
mediumtom.addEventListener("click", () => {
	audioMediumTom.src = "audio/mediumtom.wav";
});
