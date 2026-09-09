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



/*Not equal
Exercise 6: Filter out cars from 1965. Select the brand, model, year and price*/

SELECT brand, model, year, price FROM cars
	WHERE year != 1965;



/*Exercise 7: Find cars which are not yellow. Select the brand, model, price and color*/

SELECT brand, model, price, color FROM cars
	WHERE color != 'yellow';



/*NOT & LIKE

Exercise 8: Select the brand, model, color and year find any car where the color includes 'green'*/

SELECT brand, model, color, year FROM cars
	WHERE color LIKE '%green%';



/*Exercise 9: Select the brand, model, color and year for cars where the model is 'DB' followed by any other single character*/

SELECT brand, model, color, year FROM cars
	WHERE model LIKE 'DB_';



/*AND

Exercise 10: Select the brand, model, color and year from cars exclude any green car show models which are 'DB' followed by any other single character 
and the year is after 1964*/

SELECT brand, model, color, year FROM cars
	WHERE color NOT LIKE '%green%'
	AND model LIKE 'DB_'
	AND year > 1964;



/*Exercise 11:Select the brand, model, year, condition and price from cars
		where the condition is 3 or higher
		and the year is before 1970
		and the price is below 100,000*/

SELECT brand, model, year, condition, price FROM cars
	WHERE condition >= 3
	AND year < 1970
	AND price <= 100000;



/*BETWEEN

Exercise 12: Select cars made between 1980 and 1989 show the brand, model, year and price */

SELECT brand, model, year, price FROM cars
	WHERE year BETWEEN 1980 AND 1989;



/*Exercise 13: Select brand, model, condition, color and price from cars
		where the price is between $20,000 and $60,000
		and the condition is between 1 and 3
		and the color contains red*/

SELECT brand, model, condition, color, price FROM cars
	WHERE price BETWEEN 20000 AND 60000
	AND condition BETWEEN 1 AND 3
	AND color LIKE '%red%';



