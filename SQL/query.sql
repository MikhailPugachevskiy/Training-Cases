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

/*Complex conditions
Numerical filtering
Exercise 4: Select the brand, model, condition and price from cars find results where the condition is greater than 3
*/

SELECT brand, model, condition, price FROM cars
	WHERE condition >= 3;

/*Exercise 5: Select the brand, model, condition and price from cars find results where the price is less than $50,000*/

SELECT brand, model, condition, price FROM cars
	WHERE price < 50000;

