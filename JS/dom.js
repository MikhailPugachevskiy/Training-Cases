/*getElementById Practice

Let's get some practice using getElementById. I've provided a little bit of markup for you (please don't change it!)  
Your goal is to write code in app.js to select the following elements using getElementById:

    Select the image element by its id and save it to a variable called image

    Select the h1 by its id and save it to a variable called heading

Note: You may need to reset the code before attempting this exercise.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicorn</title>
</head>
<body>
    <h1 id="mainheading">I &hearts; unicorns</h1>
    <img src="https://images.unsplash.com/photo-1550747528-cdb45925b3f7?w=200" id="unicorn" alt="unicorn">
    <!-- image source: unsplash.com -->
</body>
</html> */

// Write your code in here:
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');



/*querySelector Practice

I've provided you with some simple markup in index.html.  Your task is to use querySelector and querySelectorAll to select some of those elements.

    Select all elements that have the class of "done" and save them in a variable called doneTodos.

    Select the one checkbox and save it in a variable called checkbox. Be careful, there is more than one input element on the page! 
    You'll need to select using the type attribute. (if you can't remember the css attribute selector...google it! That's what I would do!)

Write your code in app.js.  Please do not change any of the elements in index.html

<!DOCTYPE html>
<html>

<head>
    <title>Todos</title>
</head>

<body>
    <h1>Garden Todos</h1>
    <input type="text" placeholder="New Todo">
    <ul>
        <li>Start Seedlings</li>
        <li class="done">Deadhead Zinnias</li>
        <li class="done">Water Tomatoes</li>
        <li class="done">Harvest Potatoes</li>
        <li>Prune Roses</li>
    </ul>
    <label>Delete All</label>
    <input type="checkbox" id="scales" name="scales" checked>

</body>

</html>*/

// Your code goes in here!
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type="checkbox"]');



/*Pickles Exercise

Provided you with some basic markup in index.html

    Please use JavaScript to select the <span> element that currently reads "Delicious"

    Change its text to read "Disgusting" USING JAVASCRIPT. Please change the text to "Disgusting". 

<!DOCTYPE html>

<head>
    <title>Pickles</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <!--PLEASE LEAVE THIS LINE ALONE! MAKE YOUR CHANGES USING JAVASCRIPT!!-->
    <h1>Pickles Are <span>Delicious</span></h1>
</body>

</html> */

// YOUR CODE GOES IN HERE:
const span = document.querySelector("span");
span.innerText = 'Disgusting';



/*Manipulating Attributes Practice

Please select the image element and:

    change its source to this url:
    https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200

    change its alt text to be "chicken"

<!--DONT CHANGE ANYTHING IN THIS FILE!-->
Egg and Chicken


<h4>Which Came First?</h4>
<img src="https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?w=200" alt="egg">
<!-- image source: unsplash.com --> */

// The url you need: 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200'
const eggImg = document.querySelector('img');
eggImg.src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';
eggImg.alt = 'chicken';



/*Magical Forest Circle Exercise

I've provided you with some basic markup in index.html.  Please do not change any of the markup directly.  
Instead, use JavaScript to make the following changes:

    Select the div with the id of container.  Using JavaScript, set it's text alignment to 'center';

    Select the image and use JavaScript to give it a width of 150px and a border radius of 50%

Remember to use camelCased property names in JavaScript! (backgroundColor, not background-color, etc.) 

<!DOCTYPE html>

<head>
    <title>Forest</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
   <div id="container">
        <h1>I &hearts; Trees</h1>
        <img src="https://images.unsplash.com/photo-1596328546171-77e37b5e8b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="trees">
    </div>
</body>

</html>*/

//Solution
//const image = document.querySelector("img");
image.style.width = '150px';
image.style.borderRadius = '50%';

const container = document.querySelector('#container');
container.style.textAlign = 'center';



/*Rainbow Text Exercise

I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter). 

    Please write some JavaScript to make them rainbow-colored! 

    In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

    Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.  
    The first span should be red, the second should be orange, etc.   Your result should look like this:

<!DOCTYPE html>

<head>
    <title>Rainbow</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/nodelist-foreach-polyfill@1.2.0/index.min.js"></script>
</head>

<body>
    <!--DON'T TOUCH THIS FILE!-->
    <h1>
        <span>R</span>
        <span>A</span>
        <span>I</span>
        <span>N</span>
        <span>B</span>
        <span>O</span>
        <span>W</span>
    </h1>
</body>

</html> */

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
const spans = document.querySelectorAll('span');
for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i];
}



/*ClassList Practice

In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 

    Please use JavaScript and the classList property to invert which elements have the highlight class. 

    Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.  

<!DOCTYPE html>

<head>
    <title>ClasList</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script>if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach}</script>
</head>

<body>
    <!--LEAVE THIS FILE ALONE!-->
    <ul>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
    </ul>
</body>

</html>

No need to touch anything in this file:
li {
  background-color: #B10DC9;
}

.highlight {
  background-color: #7FDBFF;
}*/

// WRITE YOUR CODE IN HERE:
const lis = document.querySelectorAll('li');

for (let li of lis) {
    li.classList.toggle('highlight');
}



