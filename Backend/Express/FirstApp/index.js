const express = require("express");
const app = express();

/*app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!")
    res.send('<h1>This is my webpage!</h1>')
})*/

app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

/*
- Der Doppelpunkt macht einen Teil des Pfads zur Variablen.
- /r/gardening/289173 ergibt req.params: { subreddit: 'gardening', postId: '289173' }.
- Alle Werte sind Strings. Express prüft nicht, ob etwas eine Zahl ist.
- Das Muster /r/:subreddit passt nicht auf /r/a/b, dafür braucht es eine eigene Route mit zwei Teilen.
- Reihenfolge beachten: Die Catch-All muss darunter stehen. */

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    }
})

app.get('/{*path}', (req, res) => {
    res.send(`I don't know that path!`)
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

/*
- require("express") lädt das Paket, express() ist eine Funktion. Ihr Rückgabewert ist deine App (üblicher Name: app).
- app.listen(8080, callback) startet den Server. Der Callback läuft, sobald der Server bereit ist.
- Das Terminal bleibt danach „hängen“. Das ist richtig, der Server wartet auf Requests.
- Aufrufen im Browser unter http://localhost:8080:
    localhost = dein eigener Rechner, nur du erreichst den Server.
    Port = Eingang, an dem der Server lauscht. Zwei Server können nicht denselben Port nutzen.
- Anfangs kommt „Cannot GET /“. Express meldet automatisch 404, weil noch keine Route antwortet. */

/*
Routing = einen Pfad einem Code und einer Antwort zuordnen.
app.get(pfad, callback) reagiert nur auf GET-Requests. Tippst du eine URL in den Browser, ist das immer GET.
app.post reagiert nur auf POST. Dasselbe /cats kann so zwei verschiedene Antworten haben.
Weitere Methoden: app.put, app.delete usw. (in den Docs unter Application).
/ heißt Root Route.
Nicht definierter Pfad → Express antwortet selbst mit „Cannot GET …“.*/


/*app.get('*', (req, res) => {          // Express 5: app.get('/{*path}', ...)
    res.send(`I don't know that path!`)
})*/

//- Routen werden von oben nach unten geprüft, die erste passende gewinnt.
//- Steht die Catch-All oben, überdeckt sie alle anderen GET-Routen.