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
