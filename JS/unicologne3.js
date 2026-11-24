//Übungsaufgabe 10: Vergleichsoperatoren

/*Aufgabe 10.1: Schreiben Sie ein Skript, das 2 Variablen n1 und n2 mit den Werten 8 bzw. 9 initialisiert. 
  Initialisieren Sie danach eine weitere Variable n3, die enthält, ob n1 größer als n2 ist.*/

let n1 = 8
let n2 = 9
let n3 = n1 > n2

// Ändern Sie die folgende Zeile nicht
console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`)


/*Aufgabe 10.2: Schreibe Sie ein Skript, das eine Variable age mit dem Wert 18 initialisiert.
Danach initialisiere eine weitere Variable canVote, die speichert, ob die Person alt genug ist, um zu wählen (18 oder älter).*/

let age = 18
let canVote = age >= 18

//Untere Zeile nicht ändern
console.log(`age = ${age}, canVote = ${canVote}`)



//Übungsaufgabe 11: Strikte vs. lose Gleichheit
/*Ihre Aufgabe ist es, die folgenden Vergleiche durchzuführen und die Ergebnisse auszugeben:

    Überprüfen, ob a lose gleich b ist, und speichere das Ergebnis in d.
    Überprüfen, ob a strikt gleich c ist, und speichere das Ergebnis in e.
    Überprüfen, ob b lose ungleich c ist, und speichere das Ergebnis in f.
    Überprüfen, ob a strikt ungleich b ist, und speichere das Ergebnis in g.

Verwenden Sie die gegebenen Variablen und Vergleichsoperatoren. */

//Gegeben:
let a = 10
let b = "10"
let c = true

//Neuer Code:
let d = a == b
let e = a === c
let f = b != c
let g = a !== b

// Untere Zeilen nicht ändern
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`f = ${f}`)
console.log(`g = ${g}`)



//Übungsaufgabe 12: Logische Operatoren

//Aufgabe 12.1: Ändern Sie die Werte von b1 und b2, sodass b3 den Wert true enthält. Es gibt mehrere Lösungen.

/* Gegegeben:
let b1 = false
let b2 = false
let b3 = b1 || b2*/

//Neuer Code:
let b1 = true
let b2 = false
let b3 = b1 || b2

//Untere Zeile nicht ändern
console.log(`b3 = ${b3}`)


//Aufgabe 12.2: Ersetzen Sie die Fragezeichen der Variablen b4, b5 und b6, sodass b7 true enthält.

/*Gegeben:
let b4 = ?
let b5 = ?
let b6 = ? */

//Neuer Code:
let b4 = true
let b5 = true
let b6 = true

//Untere Zeile nicht ändern
let b7 = b1 && b2 && b3
console.log(`b4 = ${b4}`)



//Übungsaufgabe 13

//Aufgabe 13.1: Ersetzen Sie die Fragezeichen der Variablen b8 und b9, sodass b10 den Wert true annimmt. b8 & b9 müssen Zahlen enthalten (z. B. 3, 5, 11,…)

/*Gegeben:
let b8 = ?
let b9 = ?
let b10 = !((b8 + b9) > (b8 * b9))*/

//Neuer Code:
let b8 = 2
let b9 = 5
let b10 = !((b8 + b9) > (b8 * b9))

//Untere Zeile nicht ändern
console.log(`b10 = ${b10}`)


//Aufgabe 13.2: Ersetzen Sie die Fragezeichen der Variablen x & y, damit z zu true ausgewertet wird. x & y sollten positive oder negative Ganzzahlen enthalten.

/* Gegeben:
let x = ?
let y = ?
let z = ((x * y) < (x + y) && (x + y) < (x - y)) */

//Neuer Code:
let x = 4
let y = -3
let z = ((x * y) < (x + y) && (x + y) < (x - y))

//Untere Zeile nicht ändern
console.log(`z = ${z}`)