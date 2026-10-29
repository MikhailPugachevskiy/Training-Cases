/*Übung 5: Wiederholung 

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



/*Übung 7: OUTER Joins

1. Finde die Liste aller Gebäude, die Mitarbeiter haben
2. Finde die Liste aller Gebäude und ihre Kapazität
3. Liste alle Gebäude und die unterschiedlichen Mitarbeiter-Rollen in jedem Gebäude (auch leere Gebäude) */

-- 1. Gebäude, die Mitarbeiter haben
SELECT DISTINCT Building
FROM employees;

-- oder mit JOIN:
SELECT DISTINCT Building_name
FROM buildings
INNER JOIN employees
ON buildings.Building_name = employees.Building;

-- 2. Alle Gebäude + Kapazität
SELECT Building_name, Capacity
FROM buildings;

-- 3. Alle Gebäude + unterschiedliche Rollen (auch leere Gebäude)
SELECT DISTINCT Building_name, Role
FROM buildings
LEFT JOIN employees
ON buildings.Building_name = employees.Building;



/*Übung 8: NULL-Werte

1. Finde Name und Rolle aller Mitarbeiter, die keinem Gebäude zugewiesen sind
2. Finde die Namen der Gebäude, in denen keine Mitarbeiter arbeiten. */

-- 1. Mitarbeiter ohne Gebäude-Zuweisung
SELECT Name, Role
FROM employees
WHERE Building IS NULL;

-- 2. Gebäude ohne Mitarbeiter
SELECT Building_name
FROM buildings
LEFT JOIN employees
ON buildings.Building_name = employees.Building
WHERE employees.Building IS NULL;



/*Übung 9: Abfragen mit Ausdrücken

1. Liste alle Filme und ihre kombinierten Verkaufszahlen in Millionen Dollar
2. Liste alle Filme und ihre Bewertungen in Prozent
3. Liste alle Filme, die in geraden Jahren veröffentlicht wurden */

-- 1. Filme + kombinierte Verkäufe in Millionen
SELECT Title, (Domestic_sales + International_sales) / 1000000 AS Combined_sales_millions
FROM movies
INNER JOIN boxoffice
ON movies.Id = boxoffice.Movie_id;

-- 2. Filme + Bewertung in Prozent
SELECT Title, Rating * 10 AS Rating_percent
FROM movies
INNER JOIN boxoffice
ON movies.Id = boxoffice.Movie_id;

-- 3. Filme mit geradem Veröffentlichungsjahr
SELECT Title, Year
FROM movies
WHERE Year % 2 = 0;



/*Übung 10: Abfragen mit Aggregatfunktionen

1. Finde die längste Beschäftigungsdauer eines Mitarbeiters im Studio
2. Finde für jede Rolle die durchschnittliche Anzahl der Beschäftigungsjahre
3. Finde die Gesamtzahl der Beschäftigungsjahre in jedem Gebäude */

-- 1. Längste Beschäftigungsdauer
SELECT MAX(Years_employed) AS Longest_time
FROM employees;

-- 2. Durchschnittliche Beschäftigungsjahre pro Rolle
SELECT Role, AVG(Years_employed) AS Average_years
FROM employees
GROUP BY Role;

-- 3. Gesamte Beschäftigungsjahre pro Gebäude
SELECT Building, SUM(Years_employed) AS Total_years
FROM employees
GROUP BY Building;