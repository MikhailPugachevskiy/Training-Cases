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



