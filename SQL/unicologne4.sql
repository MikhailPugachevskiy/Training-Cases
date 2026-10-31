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