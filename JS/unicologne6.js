//Übungsaufgabe 20

/*Ein Code ist gegeben, der als Eingabe zwei Zahlen n1 und n2 sowie ein Zeichen op erhält (gegeben).
Die möglichen Werte für op sind '+', '-', '/' und '*'
Aufgabe ist es, die Variable result basierend auf den Bedingungen zu setzen:

- wenn op gleich '+' ist, setze result auf n1 + n2.
- wenn op gleich '-' ist, setze result auf n1 - n2.
- wenn op gleich '/' ist, setze result auf n1 / n2.
- wenn op gleich '*' ist, setze result auf n1 * n2. */

let n1 = parseInt(inp[0]) // Diese Zeile nicht ändern
let n2 = parseInt(inp[1]) // Diese Zeile nicht ändern
let op = inp[2] // Diese Zeile nicht ändern
let result = 0

if (op === '+') {
    result = n1 + n2
}
else if (op === '-') {
    result = n1 - n2
}
else if (op === '*') {
    result = n1 * n2
}
else if (op === '/') {
    result = n1 / n2
}

//Untere Zeile nicht ändern
console.log(`result = ${result}`)



//Übungsaufgabe 21: Verschachteltes If-Else

/*Erstelle Sie ein Programm, das prüft, ob jemand ein Schwimmbad betreten darf.

Regeln:
- Muss mindestens 10 Jahre alt sein
- Wenn die Person unter 13 ist, muss sie von einem Erwachsenen begleitet werden

Geben Sie genau diese Meldungen aus:
- Wenn die Person zu jung ist: Sorry, you are too young
- Wenn die Person unter 13 ist und kein Erwachsener dabei ist: Sorry, you need an adult with you
- Wenn die Person unter 13 ist und ein Erwachsener dabei ist: You can enter with adult supervision!
- Wenn die Person 13 oder älter ist: You can enter by yourself! */

//Untere Zeiclen nicht ändern
let age = parseInt(inp[0]);
let hasAdult = inp[1] === "true";

//Neuer Code:
if (age >= 10) {
    if (age < 13) {
        if (hasAdult) {
            console.log("You can enter with adult supervision!");
        } else {
            console.log("Sorry, you need an adult with you");
        }
    } else {
        console.log("You can enter by yourself!");
    }
} else {
    console.log("Sorry, you are too young");
}