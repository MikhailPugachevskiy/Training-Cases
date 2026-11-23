//Übungsaufgabe 1: Ausgaben 

//Aufgabe 1.1: Verwenden Sie die Codeansicht, um ein Programm zu schreiben, das Hello World! ausgibt.

console.log("Hello World!")

/*Aufgabe 1.2: 
  Korrigieren Sie den Code so, dass nur Hello, JavaScript! ausgegeben wird. Die Zeile, die Hello, JavaScript! ausgibt, steht bereits unter dem Editor
  und wird eigenständig ausgeführt. Fügen Sie sie also nicht erneut hinzu.

- Ersetze das ? durch die Symbole, die eine Zeile in einen Kommentar verwandeln
- Die Zeile, die Goodbye! ausgibt, soll zu einem Kommentar werden, damit sie NICHT ausgeführt wird
- Ändern Sie nur die Zeile, die mit ? beginnt*/

//console.log("Goodbye!");



//Übungsaufgabe 2: Zahlen & Zeichenketten

//Aufgabe 2.1: Schreiben Sie einen Code, der eine Variable namens x mit dem Wert 3.14 initialisiert.

let x = 3.14;


//Aufgabe 2.2: Speichern Sie die Zeichenfolge Ich lerne JavaScript! in einer Variablen namens student.

let student = "Ich lerne JavaScript!"


//Aufgabe 2.3: Speichern Sie den String Hello, welcome to JavaScript! in einer Variable namens greeting

let greeting = "Hello, welcome to JavaScript!";



//Übungsaufgabe 3: Boolescher Wert

//Aufgabe 3.1: Deklarieren Sie eine Variable namens boolean und weise ihr den Wert true zu.

let boolean = true;


/*Aufgabe 3.2: Deklarieren Sie eine Variable namens isLoggedIn und weisen ihr den Wert false zu, um darzustellen, 
  dass ein Nutzer derzeit nicht angemeldet ist.*/

let isLoggedIn = false;



//Übungsaufgabe 4: Namenskonventionen

/*In JavaScript gibt es bestimmte Regeln und Konventionen für die Benennung von Variablen:
- Variablennamen unterscheiden zwischen Groß- und Kleinschreibung, das bedeutet, myVariable und myvariable werden als unterschiedlich betrachtet.
- Variablennamen dürfen nur Buchstaben (a-z, A-Z), Zahlen (0-9), Unterstriche (_) und Dollarzeichen ($) enthalten.
- variable-Namen müssen mit einem Buchstaben, Unterstrich oder Dollarzeichen beginnen. Sie können nicht mit einer number beginnen.
- Bestimmte Wörter sind in JavaScript reserviert und können nicht als Variablennamen verwendet werden, wie etwa let, const, function, if, else usw.
- Es ist üblich, camelCase für Variablennamen zu verwenden, wobei jedes Wort außer dem ersten mit einem Großbuchstaben beginnt (z. B. myVariableName).*/

//Erlaubt: 
let myVariable = 10;
let _name = "John";
let $count = 5;

//Nicht erlaubt:

//let 1stPlace = "Invalid";  // Darf nicht mit einer Zahl beginnen
//let my-variable = 3;       // Darf keine Bindestriche enthalten
//let if = true;             // Darf keine reservierten Wörter verwenden


//Aufgabe 4.1: Erstelle Sie zwei Variablen:

/*firstName und weise ihr den Wert "John" zu
lastName und weise ihr den Wert "Doe" zu

Befolgen Sie die Namenskonventionen von JavaScript.*/

// Gib deinen Code unten ein
let firstName = "John";
let lastName = "Doe";


/*Aufgabe 4.2: Der folgende Code enthält Variablendeklarationen, aber nicht alle entsprechen den korrekten JavaScript-Namenskonventionen. 
Ihre Aufgabe ist es, die Variablen zu identifizieren und zu entfernen, die nicht den Namenskonventionen entsprechen. 
Zu den korrekten Namenskonventionen gehören:

- Variablennamen sollten in camelCase geschrieben werden.
- Verwende keine reservierten Schlüsselwörter und beginne Namen nicht mit einer Zahl.
- Variablennamen sollten aussagekräftig sein.
- Keine Leerzeichen oder Sonderzeichen, außer _ und $. Ein camelCase-Name, dem am Anfang oder Ende ein _ oder $ hinzugefügt wird, 
  entspricht weiterhin den Konventionen.

  Sie müssen alle Variablen löschen, die gegen die Namenskonventionen verstoßen. Dazu gehören Namen, die Syntaxfehler verursachen, 
  und Namen mit einem falschen Stil (wie snake_case statt camelCase). Zum Beispiel verwendet last_login_time Unterstriche statt camelCase 
  und muss daher entfernt werden, obwohl es keinen Syntaxfehler verursacht.*/
/*
let userName = "John"; 
let 2ndUser = "Jane"; 
let last_login_time = "2025-01-01"; 
let $totalSales = 1000; 
let user-name = "Mike";
let productID = 12345; 
let var = "reserved"; 
let itemPrice$ = 25.99; 
let _isLoggedIn = true;
let days OfWeek = 7; 
let special&Offer = false;*/

let userName = "John";
let $totalSales = 1000;
let productID = 12345;
let itemPrice$ = 25.99;
let _isLoggedIn = true;