//Übungsaufgabe 14: Ändern Sie die Werte der Variablen b1, b2  und b3, sodass b4 den Wert true enthält.

/*Gegeben:
let b1 = false
let b2 = false
let b3 = true */

let b4 = b1 && b2 && (!b3)
console.log(`b4 = ${b4}`)

//Neuer Code:
let b1 = true
let b2 = true
let b3 = false