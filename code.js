// basic object

var cody = new Object();

// setting fields

cody.living = true;
code.age = 33;
cody.gender = 'male';

console.log(cody);

// creating a method in js

cody.getGender = function() {
	return cody.gender;
};

// structure-like accessing of js object

var myObject = new Object();
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';

console.log(myObject);

var myString = new String('foo');

console.log(myString);

// internally both the custom object type and string  are quite similar. but js
// treats string as primitive, while myObject is an array, non-primitive

// creating a constructor in js

var Person = function(living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender() = function() {
		return this.gender;
	};

	// how to instatiate an object of Person struct

	var cody = new Person(true, 33, 'male');

	console.log(cody);
}

// the default struct in js
// any random type of object can be constructed with Object() constructor

var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function() {
	return codyA.gender;
};

// using the typeof operator in the console

var Person = function Person(living,age,gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() {return this.gender;};
};

var cody = new Person(true, 33, 'male');

console.log(typeof cody); // logs object, because cody is an object
console.log(cody.constructor);

//working with arrays

var myArray = new Array();
console.log(typeof myArray) // will print object, because, yeah! array is also an object

// what is an instance?
// ans: an object returned from a constructor.

//Math is not a constructor, but a static object.

var x = new Math(); //this ain't possible
// but this is
var x = Math.PI; // Math is just a namespace that has a lot of variables

// instantiating native constructors

var myFunction = new Function("x", "y", "return x*y");
var myError = new Error('Darn!');
var myRegExp = new RegExp('\bt[a-z]+\b');

// logging which constructor created the object

console.log(myFunction.constructor);
console.log(myError.constructor);
console.log(myRegExp.constructor);

// difference between literal

var myNumber = new Number(23); //this is an object
var myNumberLiteral = 23; // primitive no. value, not an object

// with this loc we verify that literals are created from the same constructor
console.log(myNumber.constructor, myNumberLiteral.constructor);

// the primitive values such as null, undefined, "string", 10, true, and false
// are not objects

// equal by value and equal by reference

var price1 = 10;
var price2 = 10;
var price3 = new Number('10'); // not a primitive
var price4 = price3;

console.log(price1 === price2); // true
console.log(price1 === price3); // false, cuz price1 is primitive and price3
// is not
console.log(price4 === price3); // true by reference and not by value
price4 = 10;
console.log(price4 === price3);

// complex objects and their dynamic properties
// a new variable that points to an exisiting objet, will not copy the object
// but will only be a reference to that object

var objA = {property: 'value'};
var pointer1 = objA;
var pointer2 = pointer1;

objA.property = null;

// now all three references are pointing to the same object and, the .property
// to any of these will return null, and not 'value'

// encapsulating complex objects into other objects

var object1 = {
	object1_1: {
		object1_1_1: {
			foo: 'bar'
		},
		object1_1_2: {},
	},
	object1_2: {
		object1_2_1: {},
		object1_2_2: {},
	}
};

// setting object properties

cody['living'] = false;

// getting object properties

console.log(cody.living);

// deleting object properties

delete cody.living;

// how to check if a property exists by using in operator

var myObject = {
	foo: 'value';
};
console.log('foo' in myObject); // this will return true
console.log('toString' in myObject); // this will also return true
// because every object has toString
// Object.prototype.toString

// looping over object's properties with for in

var cody = {
	age: 23;
	gender: 'male';
};

for (var key in cody) {
	if (cody.hasOwnProperty(key)) {
		console.log(key);
	}
}

// for in loop has a drawback. It will not only access the properties of the specific
// object being looped over

// how to print all properites in window object

for (x in window) {
	console.log(x);
}

// method to list all the objects contained inside window.document object

for (x in window.document) {
	console.log();
}


