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




