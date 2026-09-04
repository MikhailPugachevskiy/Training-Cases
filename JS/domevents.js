/*Know Thy Enemy Exercise

Write some inline event handlers WHICH IS NOT SOMETHING I RECOMMEND, but hopefully it will illustrate to you just how annoying it can be. 
In index.html, you'll find an <h1> element and a <button>.  Please add two inline click handlers directly in the html:

    When the h1 is clicked, you should print*  "boo"

    When the button is clicked, you should print "clicked"

    * "print" = console.log('something here');

<!DOCTYPE html>

<head>
    <title>Inline Events</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1 onclick="console.log('boo')">Inline Events Suck...</h1>
    <button onclick="console.log('clicked')" id="btn">Click Me</button>
</body>

</html>*/



/*Click Events Exercise

Some practice using addEventListener. I've provided you with two buttons, each with an id: 'hello' and 'goodbye'.  
Your goal is to add a click listener to each button. 

    When the hello button is clicked, you should console.log "hello"

    When the goodbye button is clicked, you should console.log "goodbye"

Make sure to use addEventListener!

<!DOCTYPE html>

<head>
    <title>ClasList</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>Click These Buttons</h1>
    <p>And Prepare To Have Your Mind Blown</p>
    <button id="hello">Hello</button>
    <button id="goodbye">Goodbye</button>
</body>

</html>*/

const helloButton = document.querySelector('#hello');
helloButton.addEventListener('click', function () {
    console.log('hello');
});

const goodbyeButton = document.querySelector('#goodbye');
goodbyeButton.addEventListener('click', function () {
    console.log('goodbye');
});



/*Form Events Exercise

index.html already has a form element that contains two <input> elements, one for quantity and one for a product name.  
index.html also contains an empty <ul> where you will append new <li>'s.  Watch the gif at the bottom for an overview of 
how your code should work. Your task is to follow these steps:

    Listen for the form submission

    When the form is submitted, prevent the default behavior

    Grab the quantity input value and the product input value

    Create a new <li> element.  Set the text on the new <li> to include the quantity and product name from the form.

    Append the new <li> to the <ul> on the page

    Reset the inputs

Please note:
The form will need to be assigned to a variable named form for the test to pass, 
already included is this line of code for you in the app.js code.

<!DOCTYPE html>

<head>
    <title>Grocery List</title>
    <!--LEAVE THESE LINES ALONE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>Grocery List</h1>
    <form action="/nowhere">
        <label for="product">Enter A Product</label>
        <input type="text" id="product" name="product">
        <label for="qty">Enter A Quantity</label>
        <input type="number" id="qty" name="qty">
        <button>Submit</button>
    </form>

    <ul id="list"></ul>
    
    
    
    <!--LEAVE THE BELOW CODE ALONE TOO! ALSO, NO NEED TO STUDY THE BELOW CODE, 
    IT'S JUST AN INNER MECHANISM TO MAKE THIS CODING EXERCISE WORK FULLY!-->
    <script>(function(arr){arr.forEach(function(item){if(item.hasOwnProperty('append'))return;Object.defineProperty(item,'append',{configurable:true,enumerable:true,writable:true,value:function append(){var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)));});this.appendChild(docFrag);}});});})([Element.prototype,Document.prototype,DocumentFragment.prototype]);</script>    
</body>

</html>*/

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const qty = form.elements.qty.value;
    const product = form.elements.product.value;
    const li = document.createElement('li');
    li.innerText = `${qty}${product}`;
    ul.appendChild(li);
    form.reset();
});