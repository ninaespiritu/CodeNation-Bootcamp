// ACTIVITY 1

let printMsg = () => {
	console.log("Hello Code Nation");
};

let repeatMsg = (func, number) => {
	for (i = 0; i < number; i++) {
		func();
	}
};

repeatMsg(printMsg, 5);



// ACTIVITY 2

let numAdd = (num1, num2) => {
	return (num1 + num2);
};

let numFormula = (func, num1, num2, repeat) => {
	let numTotal = 0;
	for (i = 0; i < repeat; i++) {
		numTotal = (func(num1, num2) + numTotal);
	}
    console.log(numTotal);
};

numFormula(numAdd, 1, 4, 3);



// ACTIVITY 3

let array = [1, 2, 3, 4, 5];

let multiplyArray = array.map((number) => {
    return number * 3;
})

console.log(multiplyArray);



// ACTIVITY 4

const multiply = (a, b) => {
    return a * b;
};
const add = (a, b) => {
    return a + b;
};
const divide = (a, b) => {
    return a / b;
};
const subtract = (a, b) => {
    return a - b;
};

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};

console.log(doMath(28)(15, add));