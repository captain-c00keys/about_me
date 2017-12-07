'use strict';

var username = prompt('What is you\'re name?');
console.log('name of user', username);

//prompt 1
var beers = prompt('How many beers did Gene have at the Seahawks game?');
console.log('number of beers:', beers);

if (beers === '7' || beers === '8') {
  alert('Hell, you\'re guess is better than mine!');
} else {
  alert('Better use that magic ball for advice!');
}

//prompt 2
var countries = prompt('What is Gene\'s favorite country?');
console.log('number of countries:', countries);

if (countries.toLowerCase() === 'brazil') {
  alert('Oh, you\'re good!!');
} else {
  alert('I would love to visit there too!');
}

//prompt 3
var cars = prompt('How many cars has Gene had in his life?');
console.log('number of cars:', cars);

if (cars === '3') {
  alert('Getting hotter');
} else {
  alert('And I thought you knew me better than that!');
}

//prompt 4
var computers = prompt('How many computers has Gene had in his life?');
console.log('number of computers:', computers);

if (computers === '3') {
  alert('Nailed it!!');
} else {
  alert('It\'s like we\'re strangers');
}

if (cars === '3' && computers === '3') {
  alert('Who would have guessed I\'ve destroyed that many expensive things!');
} else {
  alert('I have to look into getting new friends');
}

//prompt 5
var whoopings = prompt(username + ', what number of times was Gene whooped as a kid?');
console.log('number of whoopings:', whoopings);

if (whoopings === '7' || whoopings === 'too many') {
  alert('You have redeemed yourself');
} else {
  alert('I\'m trading you out for Justin Beiber!!');
};

//prompt 6
var gameTime = prompt('Hi ' + username + ', now that you\'ve guessed that I\'ve had ' + beers + 'too many, ruined ' + computers + 'computers and ' + cars + 'cars, (let\'s not even talk about the ' + whoopings + 'whoopings you\'ve guessed), it\'s time for another game.');
console.log('ridiculous number of siblings', gameTime);

//prompt 7
var number;
var counter = 0;
var flag;

while (counter < 5) {
  number = parseInt(prompt('How many siblings to I have?'));

  if (number === 21) {
    alert('You\'ve got it');
    counter++;
  } else if(number > 21) {
    alert('That\'s the size of a small village somewhere');
    counter++;
  } else if(number < 21) {
    alert('If only I were that lucky!!!');
    counter++;
    console.log('what is value of counter', counter);
  } else if(isNaN(number) || number === null) {
    alert('Please enter a number');
    counter++;
  }
  if (guess < 3) {
    guess++;
    counter++;
  } else if (guess === 3) {
    flag = true;
    guess++;
    break;
  }
  console.log('counter:', counter);
}
