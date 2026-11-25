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