//First Object Exercise

/*Please define a new variable called product.  It should be an object literal with the following properties:

    name - set to the string "Gummy Bears"

    inStock - set to the boolean true

    price  - set to the number 1.99

    flavors - set to an array of at least three strings like ["grape", "apple", "cherry"] */

// Your code goes in here:
const product = {
    name: 'Gummy Bears',
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
};



/* Object Access Exercise

In index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode. 

    Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 

    fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object. 
    Make sure to add any necessary commas or spaces between the values to precisely match the exact expected output format, 
    which is shown in the example below.

    To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion. For example, if the address was "64 Johnson Ave", 
    the fullAddress variable would look like this:

    "64 Johnson Ave, Brooklyn, NY 11206" // this is the expected output format of the fullAddress string 
    // (keep an eye on the commas and/or spaces between the values and match that too!) */

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
