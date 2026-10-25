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