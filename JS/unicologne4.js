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



//Übungsaufgabe 15: Logische Operatoren

/*Sie helfen einer Tierhandlung dabei, ein System zu erstellen, mit dem bestimmt wird, ob sie einem Kunden ein Haustier verkaufen kann.
Initialisieren Sie folgende Variablen:

- hasLicense mit dem Wert true
- hasSpace mit dem Wert false
- hasExperience mit dem Wert true

Schreiben Sie folgenden logischen Ausdrücke, um Folgendes zu bestimmen:

- canSellRegularPet: Der Kunde benötigt ENTWEDER eine Lizenz ODER Erfahrung UND muss Platz haben
- canSellExoticPet: Der Kunde benötigt SOWOHL eine Lizenz ALS AUCH Erfahrung UND muss Platz haben
- cannotSellAnyPet: Der Kunde hat KEINE Lizenz UND KEINE Erfahrung ODER hat KEINEN Platz */

// Deklarieren & initialisieren der drei in der Aufgabe genannten Variablen
let hasLicense = true
let hasSpace = false
let hasExperience = true

// Ersetzen jeden Platzhalter unten durch den logischen Ausdruck, der in der Aufgabe beschrieben wird
/*let canSellRegularPet = false
  let canSellExoticPet = false
  let cannotSellAnyPet = false */

// Bedingungen berechnen
let canSellRegularPet = (hasLicense || hasExperience) && hasSpace
let canSellExoticPet = hasLicense && hasExperience && hasSpace
let cannotSellAnyPet = (!hasLicense && !hasExperience) || !hasSpace

// Ergebnisse ausgeben
console.log("Can sell regular pet:", canSellRegularPet)
console.log("Can sell exotic pet:", canSellExoticPet)
console.log("Cannot sell any pet:", cannotSellAnyPet)



//Übungsaufgabe 16: Logische Operatoren

/*Sie helfen einer Fahrschule dabei, ein System zu erstellen, das feststellt, ob eine Person verschiedene Fahrzeugtypen fahren darf.
Initialisieren Sie die folgenden Variablen:

- hasLicense mit dem Wert true
- hasInsurance mit dem Wert false
- hasExperience mit dem Wert true

Schreiben Sie folgende logische Ausdrücke, um festzustellen, ob:

- canDriveCar: Die Person braucht ENTWEDER (einen Führerschein UND eine Versicherung) ODER (einen Führerschein UND Erfahrung)
- canDriveMotorcycle: Die Person braucht alle drei: einen Führerschein, eine Versicherung UND Erfahrung
- cannotDriveAny: Die Person hat KEINEN Führerschein ODER (KEINE Versicherung UND KEINE Erfahrung) */

// Variablen initialisieren
/*let hasLicense = true
let hasInsurance = false
let hasExperience = true */

// Bedingungen berechnen
let canDriveCar = (hasLicense && hasInsurance) || (hasLicense && hasExperience)
let canDriveMotorcycle = hasLicense && hasInsurance && hasExperience
let cannotDriveAny = !hasLicense || (!hasInsurance && !hasExperience)

// Ergebnisse ausgeben
console.log("Can drive car:", canDriveCar)
console.log("Can drive motorcycle:", canDriveMotorcycle)
console.log("Cannot drive any:", cannotDriveAny)