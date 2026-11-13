/*Übung 19: Einfache Subqueries

1. Finde Sales Associates, deren Gehalt höher ist als der durchschnittliche Umsatz aller Associates*/

-- Zuerst den Durchschnitt berechnen
SELECT AVG(revenue_generated)
FROM sales_associates;

-- Dann als Subquery in der WHERE-Klausel nutzen
SELECT *
FROM sales_associates
WHERE salary > 
   (SELECT AVG(revenue_generated)
    FROM sales_associates);