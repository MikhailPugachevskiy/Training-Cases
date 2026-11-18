const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});

/*Im GitBash eingeben: $ node index.js (ohne jokes)
=> {
  getRandomCNJoke: [Function (anonymous)],
  getCustomJoke: [Function (anonymous)],
  getRandomDadJoke: [Function (anonymous)],
  getRandomJokeOfTheDay: [Function (anonymous)]
} */

/* Im GitBash eingeben: $ node index.js (ohne colors => const colors = require("colors");)
=> {
  getRandomCNJoke: [Function (anonymous)],
  getCustomJoke: [Function (anonymous)],
  getRandomDadJoke: [Function (anonymous)],
  getRandomJokeOfTheDay: [Function (anonymous)]
}
I used to have a job at a calendar factory but I got the sack because I took a couple of days off.

$ node index.js <- nochmal eingeben (ohne colors)
=> {
  getRandomCNJoke: [Function (anonymous)],
  getCustomJoke: [Function (anonymous)],
  getRandomDadJoke: [Function (anonymous)],
  getRandomJokeOfTheDay: [Function (anonymous)]
}
I was just looking at my ceiling. Not sure if it’s the best ceiling in the world, but it’s definitely up there.*/


/*Im GitBash eingeben: $ node index.js (mit colors => const colors = require("colors");)
=> There are two types of people in this world, those who can extrapolate from incomplete data... <- in verschiedenen Farben (rainbow) angezeigt.*/