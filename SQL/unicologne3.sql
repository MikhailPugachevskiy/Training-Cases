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



/*übung 11: Abfragen mit Aggregatfunktionen 

1. Finde die Anzahl der Artists im Studio (ohne HAVING-Klausel)
2. Finde die Anzahl der Mitarbeiter pro Rolle im Studio
3. Finde die Gesamtsumme der Beschäftigungsjahre aller Engineers */

-- 1. Anzahl der Artists (ohne HAVING)
SELECT COUNT(*) AS Number_of_artists
FROM employees
WHERE Role = "Artist";

-- 2. Anzahl der Mitarbeiter pro Rolle
SELECT Role, COUNT(*) AS Number_of_employees
FROM employees
GROUP BY Role;

-- 3. Gesamte Beschäftigungsjahre aller Engineers
SELECT SUM(Years_employed) AS Total_years
FROM employees
WHERE Role = "Engineer";



/*Übung 12: Ausführungsreihenfolge 

1. Finde die Anzahl der Filme, die jeder Regisseur gedreht hat
2. Finde die gesamten inländischen und internationalen Verkaufszahlen, die jedem Regisseur zugeschrieben werden können */

-- 1. Anzahl Filme pro Regisseur
SELECT Director, COUNT(*) AS Number_of_movies
FROM movies
GROUP BY Director;

-- 2. Gesamte Verkäufe pro Regisseur
SELECT Director, 
       SUM(Domestic_sales + International_sales) AS Total_sales
FROM movies
INNER JOIN boxoffice
ON movies.Id = boxoffice.Movie_id
GROUP BY Director;