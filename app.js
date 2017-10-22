'use strict';

// getting user's info
var username = prompt('Hi! What\'s your name?');
console.log('username:', username);

alert('Alright ' + username + ', I am going to ask you a few questions about Melanie. Let\'s see how you do.');

var counter = 0; //this is how I am tracking total attempts to answer questions
var correct = 0; //this is how I track total correct answers

//changed individual y/n questions to loop for reusability
var correctAnswers = 0;
var questions = ['Did Melanie go to a university?', 'Did Melanie get a degree in science?', 'Does Melanie enjoy riding a bike?', 'Is Melanie native to Seattle?', 'Next question, does Melanie have any pets?'];
var expectedAnswers = ['Y', 'N', 'Y', 'Y', 'Y'];
var variationAnswers = ['Yes', 'No', 'Yes', 'Yes', 'Yes'];
var givenAnswers = [];

//this function uses parameters from the previosly stated variables for its arguments
function askQuestions(qArray, gArray, vArray, eArray) {
  for (var i = 0; i < qArray.length; i++) {
    console.log('array index', qArray[i]);
    gArray.push(prompt(qArray[i]));
  }
  for (var j = 0; j < qArray.length; j++) {
    if (gArray[j].toLowerCase() === eArray[j].toLowerCase() || gArray[j].toLowerCase() === vArray[j].toLowerCase()) {
      correctAnswers++;
    }
  }
  console.log('correct answers', correctAnswers);
  console.log('correct matches length', correctAnswers === qArray.length);

  if (correctAnswers === qArray.length) {
    alert('Awesome! you know me very well!');
  } else if (correctAnswers > 0 && correctAnswers < qArray.length) {
    alert('You\'re Partially Right, you got ' + correctAnswers + ' correct.');
  } else {
    alert('Sorry, you didn\'t get any right');
  }
}

console.log('correct answers after questions', correctAnswers);


//This is question 6 where I am generating a random number with Math.floor((Math.random())) that will generate a number between 1 and 20.
function randomNumberGame(){
  var random = Math.floor((Math.random() * 20) + 1);
  console.log('random number:', random); //this will print out the random number
  var number; //this is the user input
  var attempts = 0; //this will allow me to limit total attempts
  //Then use a 'while' loop to compare user input to the random number and generate a response accordingly.
  while (number !== random && attempts < 4) {
    number = parseInt(prompt('How many cups of coffee do I drink each day?'));
    console.log('user guess:', number);
    attempts ++; //counts attempts for each answer given in loop

    if (number < random) {
      alert('That\'s not enough!');
      counter ++;
    } else if (number > random) {
      alert('I like my coffee, but that\'s too much');
      counter ++;
    } else if (isNaN(number)) {
      alert('Please give a real number');
      counter ++;
    } else if (number === random) {
      alert('You got it! Best part of waking up...');
      correct ++;
      counter ++;
    } if (attempts === 4) {
      alert('sorry, out of tries');
    }
  }
}
function placesQuestion() {
  //question 7 array
  var places = ['france', 'iceland', 'brazil', 'chile'];
  var attpl = 0; //this is how many attempts user has with this question
  var corrtpl = false; //variable that allows my for loop to exist within my while looop

  while (attpl < 6 && corrtpl === false) { //user gets 6 attempts and loops through as long as answer is false
    var response = (prompt('One last question, what countries have I visited?'));
    attpl ++; //counts attempts
    counter ++; // counts total questions
    response = response.toLowerCase(); //changes replies to lower case
    console.log('reply:', response); //logs user's reply

    for (var i = 0; i < places.length; i ++) { //this is only used if user gueses correctly

      if (response.toLowerCase() === places[i]) {
        alert('Wow! Good job');
        corrtpl = true;
        correct ++;
        break;
      }
    }
    if (corrtpl === false) {
      alert('Nope, but I\'ll add it to my list!');
    }
  }
}

askQuestions(questions, givenAnswers, variationAnswers, expectedAnswers);
randomNumberGame();
placesQuestion();

//now counting total correct answers
console.log(correct);
console.log(correctAnswers);
alert('You got ' + (correctAnswers + correct) + ' answers right out of 7 questions');
console.log('Total attempts:', counter);
