// ACTIVITY 1

const factorial = (n) => {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};

console.log(factorial(33));

// ACTIVITY 2

let orderCount = 0;

const takeOrder = (topping, crust) => {
	console.log(`Pizza with ${topping} and ${crust} crust`);
	orderCount++;
};

takeOrder("pineapple", "thin");
takeOrder("pepperoni", "stuffed");

console.log(orderCount);

// ACTIVITY 3

let pinOriginal = 1234;
let cashBalance = 2560;

const cashTransaction = (pinInput, cashWithdraw) => {
	if (pinInput === pinOriginal && cashBalance >= cashWithdraw) {
		console.log(
			`You have successfully withdrawn £${cashWithdraw}. Your new balance is £${
				cashBalance - cashWithdraw
			}.`
		);
	} else {
		console.log(
			`Sorry, you do not have enough balance. Your current balance is £${cashBalance}.`
		);
	}
};

cashTransaction(1234, 2000);

// I did this without having to refer to MDN Web Docs, I feel smart
