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
