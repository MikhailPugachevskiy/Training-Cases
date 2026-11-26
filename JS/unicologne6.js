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