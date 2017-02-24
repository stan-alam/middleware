var text = "I like doritos!";
console.log("Before defining functions");

function myFunc(callback) {
	console.log("In the myFunc");
	return callback();
}

function getText() {
	console.log("in the getText function");
	return text;

}

console.log("Before making all the calls");

assert(myFunc(getText) === text,
	"the function, myFunc works! " + text);

console.log("After the calls have been made");