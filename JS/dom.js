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