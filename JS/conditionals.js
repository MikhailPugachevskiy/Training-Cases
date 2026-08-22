/*In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function.
    Write your code between the two comments in index.js
    You will automatically have access to a variable called num.  Please do not try and define num or change num in any way! 
    I will be setting the value of num when I test your code, so that I can test different outcomes
    If num is an even number, print out "even".  Don't do anything if num is an odd number.*/

function isEven(num) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (num % 2 === 0) {
        console.log("even");
    }
    //AND THIS LINE ↑↑↑↑↑
}



/*In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function.

    Write your code between the two comments in index.js

    You will automatically have access to a variable called phrase.  Please do not try and define phrase or change phrase in any way! 

    Your job is to print out a color based upon the following rules:

    if phrase is 'stop', you should print out 'red'
    if phrase is 'slow', you should print out 'yellow'
    if phrase is 'go', you should print out 'green'
    if phrase is anything else, you should print out 'purple'*/

function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === 'stop') {
        console.log("red")
    } else if (phrase === 'slow') {
        console.log("yellow")
    } else if (phrase === 'go') {
        console.log("green")
    } else {
        console.log("purple")
    }
    //AND THIS LINE ↑↑↑↑↑
}



/* Given you a nested conditional that uses a variable called num. Change the value of num to another number, 
so that "YOU GOT ME!" is printed out. Don't change anything other than the value of num! Leave the conditional alone!*/

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}
