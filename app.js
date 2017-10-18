'use strict';

//this is code from day 2 about me
var username = prompt('Hi! What\'s your name?');
console.log('username:', username);

alert('Alright ' + username + ', I am going to ask you a few questions about Melanie. Let\'s see how you do.');

var counter = 1;
var university = prompt('Did Melanie go to a university?');
console.log('university:', university);

// Here is where I allow upper and lower case answers to be accepted
if (university.toUpperCase() === 'Y' || university.toUpperCase() === 'YES') {
  alert('That\'s correct!');
  counter ++;
} else if (university.toUpperCase() === 'N' || university.toUpperCase() === 'NO') {
  alert('Incorrect, she graduated from the University of Washington.');
  counter ++;
}

var degree = prompt('Did Melanie get a degree in science? ');
console.log('science degree:', degree);

if (degree.toUpperCase() === 'Y' || degree.toUpperCase() === 'YES') {
  alert('Nope! She has a degree in art history.');
  counter ++;
} else if (degree.toUpperCase() === 'N' || degree.toUpperCase() === 'NO') {
  alert('Correct! She has a degree in art history.');
  counter ++;
}

var bike = prompt('Does Melanie enjoy riding a bike?');
console.log('bike rider:', bike);

if (bike.toUpperCase() === 'Y' || bike.toUpperCase() === 'YES') {
  alert('No doubt, Melanie loves her bike.');
  counter ++;
} else if (bike.toUpperCase() === 'N' || bike.toUpperCase() === 'NO'){
  alert('Incorrect! Just take a look at her computer sometime.');
  counter ++;
}

var seattle = prompt('Is Melanie native to Seattle?');
console.log('seattlite:', seattle);

if (seattle.toUpperCase() === 'Y' || seattle.toUpperCase() === 'YES') {
  alert('Yep, but that doesn\'t make her immune to rainy days.');
  counter ++;
} else if (seattle.toUpperCase() === 'N' || seattle.toUpperCase() === 'NO') {
  alert('Believe it or not, she\'s a true local, but that doesn\'t make her immune to rainy days.');
  counter ++;
}

var pets = prompt('Last question, does Melanie have any pets?');
console.log('pets:', pets);

//these if/else if scenarios got very redundant!!
if (pets.toUpperCase() === 'Y' || pets.toUpperCase() === 'YES') {
  alert('You got it! She has a 10 pound dog named Beardsley.');
  counter ++;
} else if (pets.toUpperCase() === 'N' || pets.toUpperCase() === 'NO') {
  alert('Not so! She has a 10 pound dog named Beardsley.');
  counter ++;
}

//This is question 6 where I am generating a random number with Math.floor((Math.random())) that will generate a number between 1 and 20.
var random = Math.floor((Math.random() * 20) + 1);
console.log('random number:', random);
var number;
var attempts = 0;

//Then use a 'while' loop to compare user input to the random number and generate a response accordingly.
while (number !== random && attempts < 4) {
  number = parseInt(prompt('How many cups of coffee do I drink?'));
  console.log('user guess:', number);
  attempts ++;

  if (number < random) {
    alert('That\'s not enough!');
    counter ++;
  } else if (number > random) {
    alert('I like my coffee, but that\'s too much');
    counter ++;
  } else if (isNaN(number)) {
    alert('Please give a real number');
    counter ++;
  } if (attempts = 4) {
    alert('sorry, out of tries');
  }
}

console.log('Attempts:', counter);
