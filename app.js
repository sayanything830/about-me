'use strict';

// //this is code from day 2 about me
// var username = prompt('Hi! What\'s your name?');
// console.log('username:', username);
//
// alert('Alright ' + username + ', I am going to ask you a few questions about Melanie. Let\'s see how you do.');
//
// var counter = 0; //this is how I am tracking total attempts to answer questions
// var correct = 0; //this is how I track total correct answers
//
// var university = prompt('Did Melanie go to a university?');
// console.log('university:', university);
//
// // Here is where I allow upper and lower case answers to be accepted
// if (university.toUpperCase() === 'Y' || university.toUpperCase() === 'YES') {
//   alert('That\'s correct!');
//   counter ++; //adds it to total attempt counter variable
//   correct ++; //adds it to my correct answer variable
// } else if (university.toUpperCase() === 'N' || university.toUpperCase() === 'NO') {
//   alert('Incorrect, she graduated from the University of Washington.');
//   counter ++;
// }
//
// var degree = prompt('Did Melanie get a degree in science? ');
// console.log('science degree:', degree);
//
// if (degree.toUpperCase() === 'Y' || degree.toUpperCase() === 'YES') {
//   alert('Nope! She has a degree in art history.');
//   counter ++;
// } else if (degree.toUpperCase() === 'N' || degree.toUpperCase() === 'NO') {
//   alert('Correct! She has a degree in art history.');
//   counter ++;
//   correct ++;
// }
//
// var bike = prompt('Does Melanie enjoy riding a bike?');
// console.log('bike rider:', bike);
//
// if (bike.toUpperCase() === 'Y' || bike.toUpperCase() === 'YES') {
//   alert('No doubt, Melanie loves her bike.');
//   counter ++;
//   correct ++;
// } else if (bike.toUpperCase() === 'N' || bike.toUpperCase() === 'NO'){
//   alert('Incorrect! Just take a look at her computer sometime.');
//   counter ++;
// }
//
// var seattle = prompt('Is Melanie native to Seattle?');
// console.log('seattlite:', seattle);
//
// if (seattle.toUpperCase() === 'Y' || seattle.toUpperCase() === 'YES') {
//   alert('Yep, but that doesn\'t make her immune to rainy days.');
//   counter ++;
//   correct ++;
// } else if (seattle.toUpperCase() === 'N' || seattle.toUpperCase() === 'NO') {
//   alert('Believe it or not, she\'s a true local, but that doesn\'t make her immune to rainy days.');
//   counter ++;
// }
//
// var pets = prompt('Next question, does Melanie have any pets?');
// console.log('pets:', pets);
//
// //these if/else if scenarios got very redundant!!
// if (pets.toUpperCase() === 'Y' || pets.toUpperCase() === 'YES') {
//   alert('You got it! She has a 10 pound dog named Beardsley.');
//   counter ++;
//   correct ++;
// } else if (pets.toUpperCase() === 'N' || pets.toUpperCase() === 'NO') {
//   alert('Not so! She has a 10 pound dog named Beardsley.');
//   counter ++;
// }
//
// //This is question 6 where I am generating a random number with Math.floor((Math.random())) that will generate a number between 1 and 20.
// var random = Math.floor((Math.random() * 20) + 1);
// console.log('random number:', random); //this will print out the random number
// var number; //this is the user input
// var attempts = 0; //this will allow me to limit total attempts
// //Then use a 'while' loop to compare user input to the random number and generate a response accordingly.
// while (number !== random && attempts < 4) {
//   number = parseInt(prompt('How many cups of coffee do I drink each day?'));
//   console.log('user guess:', number);
//   attempts ++; //counts attempts for each answer given in loop
//
//   if (number < random) {
//     alert('That\'s not enough!');
//     counter ++;
//   } else if (number > random) {
//     alert('I like my coffee, but that\'s too much');
//     counter ++;
//   } else if (isNaN(number)) {
//     alert('Please give a real number');
//     counter ++;
//   } else if (number === random) {
//     alert('You got it! Best part of waking up...');
//     correct ++;
//     counter ++;
//   } if (attempts === 4) {
//     alert('sorry, out of tries');
//   }
// }
//
// //question 7 array
// var places = ['france', 'iceland', 'brazil', 'chile'];
// var attpl = 0; //this is how many attempts user has with this question
// var corrtpl = false; //variable that allows my for loop to exist within my while looop
//
// while (attpl < 6 && corrtpl === false) { //user gets 6 attempts and loops through as long as answer is false
//   var response = (prompt('One last question, what countries have I visited?'));
//   attpl ++; //counts attempts
//   counter ++; // counts total questions
//   response = response.toLowerCase(); //changes replies to lower case
//   console.log('reply:', response); //logs user's reply
//
//   for (var i = 0; i < places.length; i ++) { //this is only used if user gueses correctly
//
//     if (response.toLowerCase() === places[i]) {
//       alert('Wow! Good job');
//       corrtpl = true;
//       correct ++;
//       break;
//     }
//   }
//   if (corrtpl === false) {
//     alert('Nope, but I\'ll add it to my list!');
//   }
// }
//
// //now counting total correct answers
// alert('You got ' + correct + ' answers right out of 7 questions');
// console.log('Total attempts:', counter);
