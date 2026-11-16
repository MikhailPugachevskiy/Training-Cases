const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

/*
- .slice(2) schneidet die ersten zwei Einträge ab, übrig bleiben nur deine Namen.
- for...of geht jeden Namen durch, das Template Literal baut den Satz.
- node greeter.js Tim Bob gibt „Hi there, Tim“ und „Hi there, Bob“ aus.
- Ohne Eingabe passiert nichts, weil das Array leer ist.*/