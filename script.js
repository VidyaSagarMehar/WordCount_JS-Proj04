// let str = "Hey there everyone I am Vidya Sagar Mehar";
// var spaceCount = str.split(" ").length - 1;

// let a = str.length;

// console.log(a - spaceCount);

// let inpt = document.querySelector("#input").value;
// let spaceCount = inpt.split(" ").length - 1;
// let strLn = inpt.length;

function myFunction() {
	let inpt = document.querySelector("#input").value;
	let spaceCount = inpt.split(" ").length - 1;
	let strLn = inpt.length - spaceCount;

	document.querySelector("#countOutput").innerHTML = "Word Count ~ " + strLn;
}
