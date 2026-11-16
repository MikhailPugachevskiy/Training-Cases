const fs = require('fs');
const folderName = process.argv[2] || 'Project'

/*
- require('fs') lädt das eingebaute Modul. Das ist die CommonJS-Schreibweise, die du aus React nicht kennst (dort import).
- process.argv[2] || 'Project' nimmt den ersten Eingabewert, sonst den Standardnamen.*/



// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

/*
- Der Fehler kommt nicht per try/catch, sondern als err in der Callback-Funktion.
- recursive: true legt fehlende Zwischenordner mit an und meldet keinen Fehler, wenn der Ordner schon existiert. Das entspricht mkdir -p im Terminal.
- Die Ausgabe „IN THE CALLBACK!!“ erscheint erst, nachdem der Ordner angelegt wurde.*/



try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}

/*
- mkdirSync legt zuerst den Ordner an, danach die drei Dateien. Die Reihenfolge ist wichtig, sonst gibt es keinen Ordner für die Dateien.
- Der zweite Parameter '' ist der Dateiinhalt (leer).
- Alles in try...catch: Wenn etwas schiefgeht, springt Node in catch, statt abzustürzen.
- Start mit node boilerplate.js Portfolio: Es entsteht der Ordner Portfolio mit den Dateien index.html, app.js und styles.css.*/