/* d */

window.addEventListener("keydown", (e) => {
	const start = document.getElementById("page1");
	const main = document.getElementById("page2");

	const key = document.getElementById("event.key");
	const location = document.getElementById("event.location");
	const which = document.getElementById("event.which");
	const code = document.getElementById("event.code");
	/* const displayKey = document.getElementById("display.key"); */
	const displayWhich = document.getElementById("display.which");

	start.style.display = "none";
	main.style.display = "block";

	key.textContent = e.key;
	location.textContent = e.location;
	which.textContent = e.which;
	code.textContent = e.code;

	/* displayKey.textContent = e.key; */
	displayWhich.textContent = e.which;

});

