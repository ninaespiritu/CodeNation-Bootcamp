// ACTIVITY 1

let favFilms = [
	"The Devil Wears Prada",
	"The Terminal",
	"Spirited Away",
	"Howl's Moving Castle",
	"The Fundamentals of Caring",
];

favFilms.push("The Imitation Game");
favFilms.push("Your Name");

for (let i = 0; i < favFilms.length; i++) {
	console.log(favFilms[i]);
}

// ACTIVITY 2

/* // Generate a number between 1 and 50, including 1 and 50
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let value = generateRandomInteger(1, 10);

console.log(value); */

let num = [];
while (num.length < 6) {
	let random = Math.floor(Math.random() * 50) + 1;
	if (num.indexOf(random) === -1) num.push(random);
	console.log(num);
}

// ACTIVITY 3

// this prints out 0 to 9, don't  know how to make it reversed
for (let i = 9; i >= 0; i--) {
	console.log(i);
}

// ACTIVITY 4

let films = [
	"Mean Girls",
	"White Chicks",
	"Legally Blonde",
	"The Princess Diaries",
];

for (let i = 0; i < films.length; i++) {
	console.log(films[i]);
}

let film3 = films[2];
let ghostbusters = "Ghostbusters";

if (film3 == ghostbusters) {
	console.log("Yay, it's Ghostbusters!");
} else {
	console.log("Boo! We want Ghostbusters");
}

// ACTIVITY 5

/* let number = [];
while (number.length < 6) {
  let random = Math.floor(Math.random() * 30) + 1;
  if (number.indexOf(random) === -1) number.push(random);
}
console.log(number); */

/* if (number % 7 === 0) {
  console.log("This number is divisible by 7.");
} else {
  console.log("This number is not divisible by 7.");
} */

let numRandom = [];
for (let i = 0; i < 6; i++) {
	numRandom.push(Math.floor(Math.random() * 30) + 1);
	console.log(numRandom[i]);
	if (numRandom[i] % 7 == 0) {
		console.log(`${numRandom[i]} is divisible by 7.`);
	} else {
		console.log(`${numRandom[i]} is not divisible by 7.`);
	}
}

// ACTIVITY 6

let bobFollowers = ["Hannah", "John", "George", "Alex"];
let kateFollowers = ["Bella", "Alex", "Pam", "George"];

let totalFollowers = bobFollowers + kateFollowers;

console.log(totalFollowers);
// this is all i have so far
