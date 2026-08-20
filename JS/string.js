/*define the following string variables (you can use either let or const):

    bestColor should be set to the string purple (the best color on planet earth, as we all know);

    quote should be set to the string You had me at "hello" - be careful about quotation marks, we want double quotes inside the string.*/

const bestColor = "purple";
const quote = 'You had me at "hello"';



/*provided you with a variable in index.js called message.  Without altering the original value stored in message, 

please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed.  

You will need to use two string methods that we just covered.  Don't forget you can chain them together on a single line!*/

const message = "    TASTE THE RAINBOW!  ";
const whisper = message.trim().toLowerCase();



/*provided you with a word variable, set to "skateboard".  Your goal is to use string methods on word, so that you end up with the string "beard". 

    Use a string method to extract the "board" part of "skateboard"  (using the slice method)

    Replace the "o" in board with an "e" (using the replace method)

    Save the result in a variable called facialHair*/

const word = "skateboard"; //Don't change this line!
const facialHair = word.slice(5, 10).replace('o', 'e');



/*die1 and die2 which represent six-sided dice.  Each variable holds a randomly generated integer from 1 to 6.  Please create a new variable called roll, which will be a string that displays each die as well as their sum.  Follow this pattern:

die1: 3

die2: 5

roll: "You rolled a 3 and a 5. They sum to 8"

Here is another example with different numbers:

die1: 6

die2: 4,

roll: You rolled a 6 and a 4. They sum to 10"*/

const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;