/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/
console.log("\n------- A Answer-----\n")
let test ="this is a test!";
console.log(test);
/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
console.log("\n----B Answer------\n")
let num1 = '10';
let num2 = '20';

let sum = Number(num1) + Number(num2);
console.log(sum)


/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/
console.log("\n-------C Answer------\n")
let random=(min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
      };
    console.log(random(0, 20));
/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/
console.log("\n----- D Answer----\n")
let me={
    name:"Esther",
    surname:"Nomeh",
    age:"25",
}
console.log(me);
/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
console.log("\n------E Answer-----\n")
     me= {
    name:"Esther",
    surname:"Nomeh",
    age:"25"
}
delete me.age;
console.log(me);
/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/
console.log("\n-------F Answer----------\n")
me.skills = [`python`, `CSS`, `JavaScript`]

console.log(me)
/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

console.log("\n-----Exercise G -----\n")

me.skills.pop();

console.log(me)

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

console.log("\n.....answer 1...\n")

const dice= Math.floor(Math.random()*(6-1))+1;
console.log(dice)
/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

console.log("\n.....answer 2...\n")
function whoIsBigger(a, b){
    if (a>b){
      return a;
    }else if (a==b){
      return a;
    }else{
      return b;
    };
  };
  console.log(whoIsBigger(2,3))
/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
console.log("\n.....answer 3...\n")

function splitMe(string) {
   
    return string.split(" ")

}

splitMe("i love Epicode")

console.log(splitMe("i love Epicode"))
/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
console.log("\n.....answer 4...\n")
function deleteOne(string,boolean) {
   let stringLength = string.length
    if (boolean === true) {
        return string.slice(1,stringLength)
    } 
    else
    {
        return string.slice(0,stringLength-1)
    }

}

deleteOne("it is a string",true)

console.log(deleteOne("it is a string",true))
/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
console.log("\n.....answer 5...\n")
function onlyLetters(string) {
    let replaced = string.replace(/[0-9]/g, ' ')
 
    return replaced
 
 }
 
 console.log(onlyLetters("grapes are the best"))
/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
console.log("\n.....answer 6...\n")
function isThisAnEmail(str) {

    let thisEmail = "onions@gmail.com"

   if (thisEmail === str) {
    
   }
   return true

}


console.log(isThisAnEmail("onions@gmail.com"))
/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/ 
console.log("\n.....answer 7...\n")

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const whatDayIsIt = new Date();
let day = weekday[whatDayIsIt .getDay()];
console.log(whatDayIsIt)
/* EXERCISE 8


Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
console.log("\n.....answer 8...\n")
const rollTheDices = function (numberOfDices) {
  let result = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < numberOfDices; i++) {
    let diceRoll = dice();
    result.sum += diceRoll;
    result.values.push(diceRoll);
  }
  return result;
};
/* EXERCISE 9

  
*/
console.log("\n.....answer 9...\n")

const howManyDays = function(selectedDate) {
  let today = Date.now();
  let selectedInMilliseconds = Date.parse(selectedDate) //ms
  return Math.floor((today - selectedInMilliseconds) / (1000 * 60 * 60 * 24))
};

let date = howManyDays(("5 april 1997"))
console.log(date)

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
const isTodayMyBirthday = function () {
  let today = new Date();
  let myBirthday = new Date(1997, 4, 4);
  let isTodayMyBirthday = false;
  if (
    today.getDay() === myBirthday.getDay() &&
    today.getMonth() === myBirthday.getMonth()
  ) {
    isTodayMyBirthday = true;
  }
  return isTodayMyBirthday;
};


// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
const user = {
  name: "Sylvia",
  surname: "Nomeh"
}

const deleteProp = function (obj /* object */, prop /*string*/) {
delete obj[prop];
return obj;
};

let newuser = deleteProp(user, "surname")

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
const oldestMovie = function () {
  let result = { Year: 2100 };
  for (let i = 0; i < movies.length; i++) {
    let currentYear = parseInt(movies[i].Year);
    if (currentYear < result.Year) {
      result = movies[i];
    }
  }

  return result;
};

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

const countMovies = function () {
  return movies.length;
};


/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
const onlyTheTitles = function () {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    result.push(movies[i].Title);
  }

  return result;
};



/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/
const onlyInThisMillennium = function () {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > 1999) {
      result.push(movies[i]);
    }
  }

  return result;
};



/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

const getMovieById = function (id) {
  let foundMovie //object
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      foundMovie = movies[i];
    }
  }
  return foundMovie;
};



/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

const sumAllTheYears = function () {
  let result = 0;
  for (let i = 0; i < movies.length; i++) {
    result += parseInt(movies[i].Year);
  }
  return result;
};


/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/
const searchByTitle = function (keyword) {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(keyword) !== -1) {
      result.push(movies[i]);
    }
  }
  return result;
};



/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/
const searchAndDivide = function (word) {
  let result = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(word) !== -1) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }
  return result;
};



/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/
const removeIndex = function (index) {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (index !== i) {
      result.push(movies[i]);
    }
  }
  return result;
};



// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/
const halfTree = function (height) {
  for (let i = 0; i < height; i++) {
    let toPrint = "";
    for (let j = 0; j < i + 1; j++) {
      toPrint += "*";
    }
    console.log(toPrint);
  }
};
/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/
const tree = function (height) {
  for (let i = 0; i < height; i++) {
    let stars = "*".repeat(2 * i + 1);
    let spacesBefore = " ".repeat(height - i - 1);
    console.log(spacesBefore + stars);
  }
};
tree(10)
/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/
const isItPrime = function (number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];