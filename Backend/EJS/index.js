const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})


//npm i ejs installieren. Man braucht kein require('ejs'), Express lädt es selbst.

//app.set('view engine', 'ejs') sagt Express, welche Engine es nutzen soll.

//res.render('home') sucht views/home.ejs und schickt das fertige HTML. Weder .ejs noch views/ muss man angeben.

/*Warum path.join(__dirname, '/views')? Der Standardordner views ist relativ zu dem Ordner, aus dem man node startet (process.cwd()). Startet man
eine Ebene höher, kommt Failed to lookup view 'home'.*/

//__dirname ist der Ordner der Datei index.js, egal von wo man startet. path.join setzt die Teile sauber zusammen. Das richtet man einmal pro App ein.