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



/*Übung 20: Korrelierte Subqueries

1. Finde Mitarbeiter, deren Gehalt höher ist als der durchschnittliche Umsatz ihrer eigenen Abteilung*/

SELECT *
FROM employees
WHERE salary > 
   (SELECT AVG(revenue_generated)
    FROM employees AS dept_employees
    WHERE dept_employees.department = employees.department);



/*Übung 21: Existenz-Tests mit IN / NOT IN

1. Prüft, ob ein Wert in einer dynamischen Liste (aus einer Subquery) enthalten ist*/

SELECT *, …
FROM mytable
WHERE column
    IN / NOT IN (SELECT another_column
                 FROM another_table);