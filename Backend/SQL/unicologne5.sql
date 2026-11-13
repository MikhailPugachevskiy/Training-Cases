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