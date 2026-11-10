/*Übung 1: SELECT-Abfragen

1.	Finde den Titel (Title) jedes Films
2.	Finde den Regisseur (Director) jedes Films
3.	Finde den Titel und den Regisseur jedes Films
4.	Finde den Titel und das Jahr (Year) jedes Films
5.	Finde alle Informationen über jeden Film */

-- 1. Titel jedes Films
SELECT Title FROM movies;

-- 2. Regisseur jedes Films
SELECT Director FROM movies;

-- 3. Titel und Regisseur
SELECT Title, Director FROM movies;

-- 4. Titel und Jahr
SELECT Title, Year FROM movies;

-- 5. Alle Informationen
SELECT * FROM movies;



/*Übung 2: Abfragen mit Bedingungen 

1.	Finde den Film mit der Zeilen-ID (row id) 6
2.	Finde die Filme, die zwischen 2000 und 2010 erschienen sind
3.	Finde die Filme, die nicht zwischen 2000 und 2010 erschienen sind
4.	Finde die ersten 5 Pixar-Filme und ihr Erscheinungsjahr */

-- 1. Film mit ID 6
SELECT * FROM movies WHERE Id = 6;

-- 2. Filme zwischen 2000 und 2010
SELECT * FROM movies WHERE Year BETWEEN 2000 AND 2010;

-- 3. Filme NICHT zwischen 2000 und 2010
SELECT * FROM movies WHERE Year NOT BETWEEN 2000 AND 2010;

-- 4. Erste 5 Filme + Erscheinungsjahr
SELECT Title, Year FROM movies WHERE Id BETWEEN 1 AND 5;
-- oder:
SELECT Title, Year FROM movies LIMIT 5;



/*Übung 3: Abfragen mit Bedingungen

1. Finde alle Toy-Story-Filme
2. Finde alle Filme, die von John Lasseter Regie geführt wurden
3. Finde alle Filme (und den Regisseur), die nicht von John Lasseter Regie geführt wurden
4. Finde alle WALL-*-Filme */

-- 1. Alle Toy-Story-Filme
SELECT * FROM movies WHERE Title LIKE "%Toy Story%";

-- 2. Filme von John Lasseter
SELECT * FROM movies WHERE Director = "John Lasseter";

-- 3. Filme NICHT von John Lasseter
SELECT * FROM movies WHERE Director != "John Lasseter";

-- 4. Alle WALL-*-Filme
SELECT * FROM movies WHERE Title LIKE "WALL-%";



/*Übung 4: Filtern & Sortieren Von Abfrageergebnissen

1. Liste alle Regisseure von Pixar-Filmen (alphabetisch), ohne Duplikate
2. Liste die letzten vier Pixar-Filme (vom neuesten zum ältesten)
3. Liste die ersten fünf Pixar-Filme alphabetisch sortiert
4. Liste die nächsten fünf Pixar-Filme alphabetisch sortiert */

-- 1. Alle Regisseure alphabetisch, ohne Duplikate
SELECT DISTINCT Director FROM movies ORDER BY Director ASC;

-- 2. Die letzten vier Filme (neueste zuerst)
SELECT * FROM movies ORDER BY Year DESC LIMIT 4;

-- 3. Die ersten fünf Filme alphabetisch
SELECT * FROM movies ORDER BY Title ASC LIMIT 5;

-- 4. Die nächsten fünf Filme alphabetisch (Zeilen 6–10)
SELECT * FROM movies ORDER BY Title ASC LIMIT 5 OFFSET 5;