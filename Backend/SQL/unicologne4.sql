/*Übung 13: Zellen einfügen

1. Füge den neuen Film Toy Story 4 hinzu (beliebigen Regisseur verwenden)
2. Toy Story 4 hat eine Bewertung von 8.7, 340 Millionen inländische und 270 Millionen internationale Verkäufe. Füge den Eintrag in die BoxOffice-Tabelle ein. */

-- 1. Toy Story 4 hinzufügen
INSERT INTO movies
(Title, Director, Year, Length_minutes)
VALUES ("Toy Story 4", "Josh Cooley", 2019, 100);

-- 2. BoxOffice-Eintrag für Toy Story 4
INSERT INTO boxoffice
(Movie_id, Rating, Domestic_sales, International_sales)
VALUES (15, 8.7, 340000000, 270000000);



/*Übung 14: Zeilen aktualisieren

Korrigiere fehlerhafte Einträge in der Movies-Tabelle

1. Der Regisseur von A Bug's Life ist falsch → richtig ist John Lasseter
2. Das Erscheinungsjahr von Toy Story 2 ist falsch → richtig ist 1999
3. Titel und Regisseur von Toy Story 8 sind falsch → Titel = "Toy Story 3", Regisseur = Lee Unkrich */

-- 1. Regisseur von A Bug's Life korrigieren
UPDATE movies
SET Director = "John Lasseter"
WHERE Title = "A Bug's Life";

-- 2. Jahr von Toy Story 2 korrigieren
UPDATE movies
SET Year = 1999
WHERE Title = "Toy Story 2";

-- 3. Titel und Regisseur von Toy Story 8 korrigieren
UPDATE movies
SET Title = "Toy Story 3",
    Director = "Lee Unkrich"
WHERE Title = "Toy Story 8";



/*Übung 15: Zeilen löschen

Bereinige die Movies-Tabelle

1. Entferne alle Filme, die vor 2005 veröffentlicht wurden
2. Andrew Stanton hat das Studio verlassen → entferne alle Filme, die von ihm Regie geführt wurden */

-- 1. Filme vor 2005 löschen
DELETE FROM movies
WHERE Year < 2005;

-- 2. Filme von Andrew Stanton löschen
DELETE FROM movies
WHERE Director = "Andrew Stanton";



/*Übung 16: Tabellen erstellen

Erstelle eine neue Tabelle

Erstelle eine Tabelle namens Database mit folgenden Spalten:
    Name → Text (Beschreibung des Datenbanknamens)
    Version → Gleitkommazahl (aktuelle Version)
    Download_count → Ganzzahl (Anzahl der Downloads)
(Keine Constraints erforderlich) */

CREATE TABLE IF NOT EXISTS Database (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
);



/*Übung 17: Tabellen ändern

Die Übungsdatenbank unterstützt nur das Hinzufügen neuer Spalten

1. Füge eine Spalte Aspect_ratio mit Datentyp FLOAT hinzu
2. Füge eine Spalte Language mit Datentyp TEXT hinzu
    Standardwert soll English sein */

    -- 1. Aspect_ratio hinzufügen
ALTER TABLE movies
ADD Aspect_ratio FLOAT;

-- 2. Language mit Standardwert hinzufügen
ALTER TABLE movies
ADD Language TEXT DEFAULT "English";



/*Übung 18: Tabellen löschen

1. Entferne die Tabelle Movies
2. Entferne auch die Tabelle BoxOffice */

-- 1. Movies-Tabelle löschen
DROP TABLE IF EXISTS Movies;

-- 2. BoxOffice-Tabelle löschen
DROP TABLE IF EXISTS BoxOffice;