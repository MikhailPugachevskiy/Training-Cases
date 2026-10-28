/*Übung 5: Wiederholung 

Aufgaben

1. Liste alle kanadischen Städte und ihre Bevölkerungszahlen
2. Sortiere alle Städte in den USA nach Latitude von Norden nach Süden
3. Liste alle Städte westlich von Chicago, sortiert von West nach Ost
4. Liste die zwei größten Städte in Mexiko (nach Bevölkerung)
5. Liste die dritt- und viertgrößte Stadt (nach Bevölkerung) in den USA und ihre Bevölkerungszahl */

-- 1. Kanadische Städte + Bevölkerung
SELECT City, Population
FROM north_american_cities
WHERE Country = "Canada";

-- 2. US-Städte von Norden nach Süden
SELECT City
FROM north_american_cities
WHERE Country = "United States"
ORDER BY Latitude DESC;

-- 3. Städte westlich von Chicago (West → Ost)
SELECT City
FROM north_american_cities
WHERE Longitude < -87.629798
ORDER BY Longitude ASC;

-- Alternative mit Unterabfrage:
SELECT City
FROM north_american_cities
WHERE Longitude < (SELECT Longitude FROM north_american_cities WHERE City = "Chicago")
ORDER BY Longitude ASC;

-- 4. Die zwei größten Städte Mexikos
SELECT City
FROM north_american_cities
WHERE Country = "Mexico"
ORDER BY Population DESC
LIMIT 2;

-- 5. 3. und 4. größte Stadt der USA + Bevölkerung
SELECT City, Population
FROM north_american_cities
WHERE Country = "United States"
ORDER BY Population DESC
LIMIT 2 OFFSET 2;



/*Ubung 6: Abfragen über mehrere Tabellen mit JOINs

1. Finde die inländischen und internationalen Verkaufszahlen für jeden Film
2. Zeige die Verkaufszahlen für Filme, die international besser liefen als im Inland
3. Liste alle Filme nach ihrer Bewertung in absteigender Reihenfolge */

-- 1. Inländische und internationale Verkäufe pro Film
SELECT Title, Domestic_sales, International_sales
FROM movies
INNER JOIN boxoffice
ON movies.Id = boxoffice.Movie_id;

-- 2. Filme mit höheren internationalen als inländischen Verkäufen
SELECT Title, Domestic_sales, International_sales
FROM movies
INNER JOIN boxoffice
ON movies.Id = boxoffice.Movie_id
WHERE International_sales > Domestic_sales;

-- 3. Alle Filme nach Bewertung (absteigend)
SELECT Title, Rating
FROM movies
INNER JOIN boxoffice
ON movies.Id = boxoffice.Movie_id
ORDER BY Rating DESC;