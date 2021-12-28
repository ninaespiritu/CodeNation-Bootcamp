// This loops code between here and * 3 times
for (let i = 0; i < 3; i++) {
	// This loops code between here and ** 3 times
	for (let j = 0; j < 3; j++) {
		// This prints out thrice beacause of the loop
		console.log("     |     |     ");
	}
	//If i is NOT equal to 2 then print the below
	if (i !== 2) {
		console.log("------------------");
	}
}

console.log("My name is Nina");
console.log("I'm 20 years old");
console.log("My star sign is Taurus");

let name = "Nina";
let namelength = name.length;
let nameUpper = name.toUpperCase();

console.log(nameUpper);
console.log(namelength);
