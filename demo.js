// ----- TEMPLATE LITERALS

// const firstName = "Daniel";
// const lastName = "Braaksma"
// const age = 34;

// const sentence = 'My name is' + firstName + " " + lastName + " and I am " + age + " years old";
// // console.log(sentence);
// const easierSentence = `My name is ${firstName} ${lastName} and I am ${age} years old`;
// console.log(easierSentence);


/* function highlight(strings, ...values) {
  let str = '';
  strings.forEach((string, i) => {
    str += string;
    if (values[i]) {
      str += `<strong>${values[i]}</strong>`;
    }
  });
  return str;
}

const name = 'Snickers';
const age = '100';
const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
console.log(sentence);

document.getElementById("text").innerHTML = sentence; */

// ------ SCOPE REVIEW
// scope = what variables you have access to


// global scope
// let y = 1;
// const x = "global"


// function scope (){
//   // function scope
//   let y = 1;

//   if (true){
//   // if block scope
//   y = 2;
//   console.log(x);
//   }

//   console.log(y);
// }

// scope();

// let hello = "hi"

// function sayHi (isSpanish){

//     if(!isSpanish) {
//        throw new Error("must pass a boolean")
//     }

//     console.log(isSpanish);
// 	let hello = "bounjour";



// 	if (isSpanish){
// 		let hello = "hola"
// 	return hello;
// 	}
// 	return hello;
// }

// console.log(hello);
// console.log(sayHi());
// console.log(sayHi(true));

// DESTRUCTURING

// STRING METHODS

// ASSIGNMENT
// create a function that accepts an object and prints out all the values into one sentence
// Extra credit, make the function be able to handle an array or objects and print out each one
