//Übungsaufgabe 18: If-Anweisung

//Aufgabe 18.1: Für die Variablen a und b fehlen Werte. Ergänze Sie diese so, dass der Code innerhalb der if-Anweisung ausgeführt wird!

//Ersetzen die Platzhalterwerte so, dass die folgende Bedingung wahr ist

//Gegeben:
/*let a = 0;
  let b = 5; */

//Neuer Code:
let a = 15
let b = 12

//Untere Zeilen nicht ändern
let c = 0;
if (a >= b && !(b < 10)) {
    c = 2;
}

c += 1;
console.log(`c = ${c}`);


//Aufgabe 18.2: Erstellen Sie eine Variable namens temperature und setze Sie diese auf 25.

/*Verwenden Sie if-Anweisungen, um:

- Wenn temperature größer als 30 ist, setze eine Variable message auf "Too hot!".
- Wenn temperature kleiner als 10 ist, setze message auf "Too cold!".
- Wenn temperature zwischen 10 und 30 liegt, setze message auf "Just right!".*/

let temperature = 25;
let message = ""; // Nachricht basierend auf der Temperatur setzen

if (temperature > 30) {
    message = "Too hot!";
}
if (temperature < 10) {
    message = "Too cold!";
}
if (temperature >= 10 && temperature <= 30) {
    message = "Just right!";
}

console.log(message); // Dies zeigt das Ergebnis



//Übungsaufgabe 19: If-Else

/*Aufgabe 19.1: Sie erhalten einen Code, der als Eingabe eine Zahl erhält, die die Windgeschwindigkeit angibt, 
  und sie in einer Variablen namens wind speichert.
  Ihre Aufgabe ist es, die Variable condition basierend auf den folgenden Bedingungen zu initialisieren:

- "Calm", wenn wind kleiner als 8 ist,
- "Breeze", wenn wind zwischen 8 und 31 liegt (einschließlich 8 und 31).
- "Gale", wenn wind zwischen 32 und 63 liegt (einschließlich 32 und 63)
- "Storm" andernfalls */

//Gegeben:
let wind = parseInt(inp); // Diese Zeile nicht ändern
let condition = "unset";

if (wind < 8) {
    condition = "Calm";
} else if (wind >= 8 && wind <= 31) {
    condition = "Breeze";
} else if (wind >= 32 && wind <= 63) {
    condition = "Gale";
} else {
    condition = "Storm";
}

//Untere Zeile nicht ändern
console.log(`condition = ${condition}`);


/*Aufgabe 19.2: Ihnen wird ein Code gegeben, der als Eingabe eine Zahl erhält, die den Niederschlag in Millimetern angibt, 
und sie in einer Variable namens rainfall speichert. Ihre Aufgabe ist es, eine Variable namens rainCondition basierend auf diesen Bedingungen zu initialisieren:

- "Dry", wenn rainfall kleiner als 1 ist.
- "Light Rain", wenn rainfall zwischen 1 und 10 liegt (einschließlich 1 und 10).
- "Moderate Rain", wenn rainfall zwischen 11 und 50 liegt (einschließlich 11 und 50).
- "Heavy Rain", wenn rainfall größer als 50 ist. */

//Gegeben:
let rainfall = parseInt(inp); // Diese Zeile nicht ändern
let rainCondition = "unset";

//Neuer Code:
if (rainfall < 1) {
    rainCondition = "Dry";
} else if (rainfall >= 1 && rainfall <= 10) {
    rainCondition = "Light Rain";
} else if (rainfall >= 11 && rainfall <= 50) {
    rainCondition = "Moderate Rain";
} else if (rainfall > 50) {
    rainCondition = "Heavy Rain";
}

//Untere Zeile nicht ändern
console.log(rainCondition);