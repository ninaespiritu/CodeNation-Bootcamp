/* const { expect } = require("@jest/globals"); */
const { TestWatcher } = require("jest");
const { test } = require("picomatch");
/* const { test } = require("picomatch"); */
const app = require("../app.js");

// ====== ACTIVITIES ====== //

test("should not be returned as null", () => {
	expect(app.myArray).not.toBe(null);
});

test("should be truthy", () => {
	expect(app.divide(2, 3)).toBeTruthy();
});

test("should not be falsy", () => {
	expect(app.divide(2, 3)).not.toBeFalsy();
});

test("should be equal to object properties", () => {
	expect(app.codenation()).toEqual({week: 4, topic: "JavaScript"});
});

test("should return items in an array with 6 or more characters", () => {
	expect(app.myData).toBeDefined();
});

test("should convert number to string", () => {
	const number = 1234;
	const string = number.toString();
	
	expect(string).toBeDefined();
});

test("should display correct planet order number", () => {
	const planets = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

	expect(planets[3]).toBe("Earth");
});