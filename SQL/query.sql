/*SELECT all*/
SELECT * FROM cars;

/*Selecting colums
Exercise 1: Select the brand, model, condition and year from the cars table*/
SELECT brand, model, condition, year FROM cars;

/*WHERE Clause
Exercise 2: Select the brand, model, color and price from cars where the color is black*/

SELECT brand, model, color, price FROM cars
	WHERE color = 'black';

/*Exercise 3: Select the brand, model, condition and price from cars where the condition equals 0*/

SELECT brand, model, condition, price FROM cars
	WHERE condition = 0;

