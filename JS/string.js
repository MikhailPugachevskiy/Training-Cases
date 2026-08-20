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




