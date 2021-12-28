// ACTIVITY 1

let age = 20;
let country = "UK";

if (age > 17 && country == "UK") {
	console.log("Yes, I can serve you!");
} else {
	console.log("You aren't old enough.");
}

// ACTIVITY 2

let topping = "pepperoni";

switch (true) {
	case topping == "beef":
	case topping == "pepperoni":
	case topping == "mushroom":
	case topping == "cheese":
		console.log(`${topping} is an important ingredient for my pizza.`);
		break;
	case topping == "pineapple":
		console.log(`${topping} should not be on any pizza.`);
		break;
	default:
		console.log(`I don't mind having ${topping} on my pizza.`);
}

// ACTIVITY 3

let password = "password123";

if (password.length < 8) {
	console.log("Your password is too short.");
} else {
	console.log(password);
}

// ACTIVITY 4, 5, AND 6

let num1 = 15;

// ACT. 4

if (num1 % 3 === 0 || num1 % 5 === 0) {
	console.log("This number is divisible by 3 or 5.");
} else {
	console.log("This number is not divisible by 3 or 5.");
}

// ACT. 5

let num2 = 24;

if (num2 % 3 === 0) {
	console.log("fizz");
} else if (num2 % 5 === 0) {
	console.log("buzz");
} else if (num2 % 3 === 0 && num % 5 === 0) {
	console.log("fizz buzz");
} else {
	console.log(num2);
}

// ACT. 6

let num3 = "1234321";
let numReversed = num3.toString().split("").reverse().join("");

if (num3 === numReversed) {
	console.log(`${num3} is a palindrome.`);
} else {
	console.log(`${num3} is not a palindrome.`);
}

// ACTIVITY 7

let time = 10;
let placeOfWork = "Manchester";
let townOfHome = "Eastbourne";

if (time >= 8 && time < 9) {
	console.log("I'm commuting.");
} else if (time >= 9 && time < 17) {
	console.log(`I'm at work in ${placeOfWork}.`);
} else {
	console.log(`I'm at home in ${townOfHome}.`);
}

// ACTIVITY 8

let string =
	"jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let a = string.lastIndexOf("a");
let e = string.lastIndexOf("e");
let i = string.lastIndexOf("i");
let o = string.lastIndexOf("o");
let u = string.lastIndexOf("u");

let vowels = [a, e, i, o, u];

let vowelIndex = Math.max(...vowels);

console.log(`The last vowel is ${vowelIndex}.`);

// ACTIVITY 9

let word = "racecar";
let length = word.length;

if (word.charAt(length - 1) == word.charAt(0)) {
	//return true;
	console.log("true");
} else {
	//return false;
	console.log("false");
}

// ACTIVITY 10

let num4 = 6;
let num5 = 4;

if ((num4 + num5) % 2 === 0) {
	console.log(`The sum of ${num4} and ${num5} is even.`);
} else {
	console.log(num4 * num5);
}
