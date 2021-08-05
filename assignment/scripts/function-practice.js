console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('in helloName', name);
  return 'Hello ' + name + '!';
}

// Remember to call the function to test
console.log('Test - should say "Hello Jordan!"', helloName('Jordan'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('In addNumbers ', firstNumber, secondNumber);
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log("Test - should give the sum of 35 and 25: ", addNumbers(34, 25));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  console.log("in multiplyThree", num1, num2, num3);
  let answer = num1 * num2 * num3; // creating a variable to return
  return answer;
} // return num1 * num2 * num3
console.log('Test - should say the multiple of 56, 892, and 3.451: ', multiplyThree(56, 892, 3.451));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  let lastItem = array[array.length-1]; // create a variable to store the item
  return lastItem;
  //return lastItem for empty array
}
let ballot = ['charlie', 'alice', 'bob']
console.log('Test - should say "bob"', getLast(ballot));
let empty = '';
console.log('Test - should say undefined', getLast(empty));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let i in array){ // iterating through array
    if (array[i] === value){ // check for exact value at each location
      return true; // if found
    }
  }
  return false; // code only gets here when if loop doesn't return true i.e. value not found
} //end find

let numbers = [2, 3, 4, 5, 6];
console.log('Test - should say True', find(5, numbers));
console.log('Test - should say False', find(1, numbers));
let plants = ['monstera', 'pylea', 'basil', 'money tree', 'cactus'];
console.log('Test - should say false', find(6, plants));
console.log('Test - should say false', find('monteras', plants));
console.log('Test - should say true', find('money tree', plants));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    if (string[0] === letter) { // use an if statement, treating string as an array, exact comparison with letter
      return true;
    }
  return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let i of array){
    sum += i;
  }
  return sum;
}
let someNums = [89, .004543, 7, 19.19];
console.log('Test - should give the correct sum:', sumAll(someNums));
let someOtherNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log('Test - should give the correct sum:', sumAll(someOtherNumbs));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArray( array ) {
  console.log('in positiveArray');
  let newArray = []; //declare new, empty array
  // loop through given array, checking for positives
  for (let i of array) {
    if (i > 0){
      console.log(`adding positive number: ${i}, positiveArray size: ${newArray.push(i)}`); // positives go to end of newArray
    }
  }
  return newArray;
}
let sampleNumbers = [-500, -15, 0, 17, 22, -18, 201];
console.log('Test - should say length of new array, 3', positiveArray(sampleNumbers));
let negativesOnly = [-2, 0, -4, -6];
console.log('Testing on array with no positives - should show an empty array', positiveArray(negativesOnly));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
