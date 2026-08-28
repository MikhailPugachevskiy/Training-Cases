/*Heart Function Exercise

It's time to write our first function!

    Define a function called printHeart that prints out the string "<3"

    Execute your function once*/

// Write your function here:
function printHeart() {
    console.log("<3");
}
printHeart();



/*Rant Exercise

Define a function called rant which accepts a string argument called message.  
The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  
For example, rant("I hate beets") should print out:

    I HATE BEETS
    I HATE BEETS
    I HATE BEETS*/

// DEFINE YOUR FUNCTION:
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}



/*Multiple Args Exercise

In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  
Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  
If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

    isSnakeEyes(1,1) //Snake Eyes!
    isSnakeEyes(1,5) //Not Snake Eyes!
    isSnakeEyes(4,5) //Not Snake Eyes!

Hint: Normally a function will return a value, but for the sake of having this work with the Udemy interpreter we will be using console.log() 
instead of return, to print the output.*/



/*Multiple Args Exercise

In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  
Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  
If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

    isSnakeEyes(1,1) //Snake Eyes!
    isSnakeEyes(1,5) //Not Snake Eyes!
    isSnakeEyes(4,5) //Not Snake Eyes!*/

// define isSnakeEyes below:
function isSnakeEyes(die1, die2) {
    if (die1 === 1 & die2 === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!')
    }
}



/*Return Value Practice

It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure to return the value instead of printing it!

    multiply(2,3) // 6
    multiply(9,9) // 81
    multiply(5,4) // 20 */

// DEFINE YOUR FUNCTION BELOW:
function multiply(num1, num2) {
    return num1 * num2;
}



/*isShortsWeather Function

 Write function isShortsWeather. 

    It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 

    If temperature is greater than or equal to 75, return true. 

    Otherwise, return false.   

    isShortsWeather(80) //true
    isShortsWeather(48) //false
    isShortsWeather(75) //true */

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}



/*Last Element Exercise

Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

    lastElement([3,5,7]) //7
    lastElement([1]) //1
    lastElement([]) //null 

To test if the array is empty or not, you can use the array's .length property.

If the array's length is equal to 0, it means it's empty and you can return null. Otherwise, if the array's length is higher than 0 that means there is a last element that we should return.

Since array index numbers start at 0, the last element in the array will always be the array's length minus 1.*/

// DEFINE YOUR FUNCTION BELOW:
function lastElement(array) {
    if (array.length === 0) {
        return null;
    } else {
        return array[array.length - 1];
    }
}



/*Capitalize Exercise

Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

    capitalize('eggplant') // "Eggplant"
    capitalize('pamplemousse') // "Pamplemousse"
    capitalize('squid') //"Squid"

Hints:

    Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  
    You will need to make a new string that you return.

    Single out the first letter and capitalize it. (use a string method to help!)

    Add that first letter to the rest of the original string, SLICED to omit the original first letter (use a string method to help!)

    For example: 'eggplant' becomes 'E' + 'ggplant' */

// DEFINE YOUR FUNCTION BELOW:
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}



