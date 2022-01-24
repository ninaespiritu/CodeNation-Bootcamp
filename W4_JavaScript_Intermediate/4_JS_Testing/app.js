let myArray = ["Dan", "Stuart", "Ben", "Barbara", "Stephanie"];

const divide = (num1, num2) => {
	if (num1 !== 0 || num2 !== 0) {
		return num1 * num2;
	} else {
		return "please enter a number greater than 0";
	}
};

const codenation = () => {
	let lesson = {
		week: 4,
		topic: "JavaScript",
	};
	return lesson;
};

const myData = () => {
	let data = [
		{ name: "Dan" },
		{ name: "Stuart" },
		{ name: "Ben" },
		{ name: "Barbara" },
		{ name: "Stephanie" },
	];
	const result = data
		.filter(({ name }) => name.length >= 4)
		.map(({ name }) => name);

	return result;
};

const numberToString = () => {
	const number = 1234;
	const string = number.toString();
	return string;
};

const planetsOrder = () => {
	const planets = [
		"Sun",
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Jupiter",
		"Saturn",
		"Uranus",
		"Neptune",
	];
	return planets[3];
};

const studentList = () => {
	const students = [
		{ name: "Nina", present: true },
		{ name: "Mario", present: true },
		{ name: "Ben", present: false },
		{ name: "Leon", present: false },
	];

	for (i = 0; i < students.length; i++) {
		if ((students[i].present = true)) {
			console.log("Present");
		} else if ((students[i].present = false)) {
			console.log("Absent");
		}
	}
};

studentList();

module.exports = {
	myArray,
	divide,
	codenation,
	myData,
	numberToString,
	planetsOrder,
};
