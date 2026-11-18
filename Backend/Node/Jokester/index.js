const jokes = require("give-me-a-joke");
console.dir(jokes);

/*Im GitBash eingeben: $ node index.js
=> {
  getRandomCNJoke: [Function (anonymous)],
  getCustomJoke: [Function (anonymous)],
  getRandomDadJoke: [Function (anonymous)],
  getRandomJokeOfTheDay: [Function (anonymous)]
} */

jokes.getRandomDadJoke(function (joke) {
    console.log(joke);
});

/* Im GitBash eingeben: $ node index.js
=> {
  getRandomCNJoke: [Function (anonymous)],
  getCustomJoke: [Function (anonymous)],
  getRandomDadJoke: [Function (anonymous)],
  getRandomJokeOfTheDay: [Function (anonymous)]
}
I used to have a job at a calendar factory but I got the sack because I took a couple of days off.

$ node index.js
=> {
  getRandomCNJoke: [Function (anonymous)],
  getCustomJoke: [Function (anonymous)],
  getRandomDadJoke: [Function (anonymous)],
  getRandomJokeOfTheDay: [Function (anonymous)]
}
I was just looking at my ceiling. Not sure if it’s the best ceiling in the world, but it’s definitely up there.*/