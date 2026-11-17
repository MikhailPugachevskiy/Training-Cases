const { PI, square } = require('./math');

/*
- require('./math') braucht den Pfad ./. Ohne ihn sucht Node ein Paket namens math und meldet Cannot find module 'math'. 
- .js darfst du weglassen.
- Ohne exports bekommst du ein leeres Objekt {}.
- add wird hier nicht exportiert, deshalb gibt es add in app.js nicht.
- { PI, square } ist normales Destructuring, das kennst du aus JavaScript.*/

const cats = require('./shelter')
// console.log(PI)

// console.log(square(9))
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)
