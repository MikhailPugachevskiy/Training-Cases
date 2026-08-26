/*First For Loop Practice

Please use a for loop to print out the classic chorus lyrics of "I'm Blue" by Eiffel 65.  
Use a for loop to print out the string "Da ba dee da ba daa" exactly 6 times.*/

// Print out "Da ba dee da ba daa" 6 times, using a for loopfor
const i = 'Da ba dee da ba daa'
for (let i = 1; i <= 6; i++) {
    console.log('Da ba dee da ba daa');
}



/*More For Loops Practice

Let's try writing a for loop that counts down, rather than up. Please write a for loop that prints the following numbers (in this order):

    25
    20
    15
    10
    5
    0 */

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}



/*Iterating Arrays Exercise

I've provided you with an array of strings called people. Loop over the people array with a for loop, 
printing out each name in uppercase letters (hint: use i from your loop as an array index). Your result should look something like:


SCOOBY

VELMA

DAPHNE

SHAGGY

FRED */

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}




