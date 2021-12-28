// ACTIVITY 1

const person = {
	name: "Nina",
	age: 20,
	favSong: "Nothing - Bruno Major",

	sayHi() {
		return `Hello, my name is ${this.name}.`;
	},
};

console.log(person.sayHi(), person.age, person.favSong);

// ACTIVITY 2

const pet = {
	name: "Timi",
	typeOfPet: "cat",
	age: 2,
	colour: "black",

	eat() {
		return `${this.name} is eating.`;
	},

	drink() {
		return `${this.name} is drinking.`;
	},
};

console.log(
	`${pet.name} is a ${pet.age}-year-old ${pet.typeOfPet} with ${pet.colour} fur.`
);

// ACTIVITY 3

let orderPrice = [];
let orderTotal = 0;

const coffeeShop = {
	name: "Costa",
	branch: "Manchester",

	// key values for drinks info
	drinks: ["Coffee", "Hot chocolate", "Tea"],

	// key values for food info
	drinksPrice: [1.29, 1.39, 1.09],
	food: ["Toast", "Muffin", "Croissant", "Cake"],
	foodPrice: [1.29, 1.49, 1.49, 1.79],

	// function: input drinks order here
	drinksOrdered() {
		orderPrice.push(this.drinksPrice[1]);
		return `Drinks order: ${this.drinks[1]} - £${this.drinksPrice[1]}`;
	},

	// function: input drinks order here
	foodOrdered() {
		orderPrice.push(this.foodPrice[2]);
		return `Food order: ${this.food[2]} - £${this.foodPrice[2]}`;
	},
};

// print out customer's orders
console.log(
	`Welcome to ${coffeeShop.name} - ${coffeeShop.branch}!`.toUpperCase()
);
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());

// order total (£) formula
for (let i = 0; i < orderPrice.length; i++) {
	orderTotal += orderPrice[i];
}
console.log(`Your total is £${orderTotal}.`);
