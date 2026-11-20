const express = require("express");
const app = express();

app.use(() => {
    console.log("WE GOT A NEW REQUEST!!")
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