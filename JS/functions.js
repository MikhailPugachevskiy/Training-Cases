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