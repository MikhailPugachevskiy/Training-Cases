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