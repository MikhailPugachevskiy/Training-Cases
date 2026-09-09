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



/*OR

Exercise 14: Find the brand, model, condition and price of cars
		where the price is less than $250,000
		or the brand is Porsche
		additional: only show cars with condition >3*/

SELECT brand, model, condition, price FROM cars
	WHERE (price < 250000
	OR brand = 'Porsche')
	AND condition > 3;


/*Exercise 15: Search for brand, model, color, year and price of cars
		where the color is a shade of red
		or the year is between 1960 and 1969
		and sold is false*/

SELECT brand, model, color, year, price FROM cars
	WHERE color LIKE '%red%'
	OR year BETWEEN 1960 AND 1969
	AND sold is FALSE;
	


/*IN Operator

Exercise 16: Select the brand, model, price and sold columns from cars the brand can be 'Ford', 'Chevorlet' or 'Ferrari' sold must be false*/

SELECT brand, model, price, sold FROM cars
	WHERE brand IN ('Ford', 'Chevrolet', 'Ferrari')
	AND sold IS FALSE;



/*Exercise 17: Select the brand, model, condition and year from cars
		Where the year is 1961, 1963, 1965, 1967 or 1969
		and the condition is 3 or higher
		and sold is false*/

SELECT brand, model, condition, year FROM cars
	WHERE year IN (1961, 1963, 1965, 1967, 1969)
	AND condition >= 3
	AND sold IS FALSE;



/*Exercise 18: 
Select brand, model, price and sold from cars 
		filter out any cars which are sold
		show cars where the brand is none of ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
		or the price is less than $50000*/

SELECT brand, model, price, sold FROM cars
	WHERE (
		brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
		OR price < 50000
	) AND sold IS FALSE;



/*Exercise 19:
	Select brand, model, and color from cars
		where the color is 'red'
		and the brand is not 'Ferrari'
		and the car has not been sold*/

SELECT brand, model, color FROM cars
  WHERE color LIKE '%red%'
  AND brand != 'Ferrari'
  AND sold IS FALSE;



/*Exercise 20:
	Select brand, model, and color from cars
		where the color is not red, blue, or white
		and the brand is none of: Aston Martin, Bentley or Jaguar
		and sold is false*/

SELECT brand, model, color FROM cars
  WHERE color NOT IN ('red', 'blue', 'white')
  AND brand NOT IN ('Aston Martin', 'Bentley', 'Jaguar')
  AND sold IS FALSE;


/*Exercise 21:
	Select brand, model, year, sold from cars
		where the brand is 'Dodge' and year is in the 60s
		or the brand is either 'Ford' or 'Triumph' and the car is from the 70s
		only select cars where sold is not true*/

SELECT brand, model, year, sold FROM cars
  WHERE ((brand = 'Dodge' AND year BETWEEN 1960 AND 1969)
  OR (brand IN ('Ford', 'Triumph') AND year BETWEEN 1970 AND 1979))
  AND SOLD IS NOT TRUE;



/*ORDER BY Operator

Exercise 22:
	Select the brand, model and year from the cars table order by the brand*/

SELECT brand, model, year FROM cars
	ORDER BY brand DESC, year;



/*Exercise 23:
	Select the brand, model, condition and price from cars
		order the table by condition in descending order
		and by price in ascending order*/

SELECT brand, model, condition, price FROM cars
	WHERE sold IS FALSE
	ORDER BY condition DESC, price;



/*Exercise 24:
		Select the brand, model, condition and price from cars
		where the car is not sold
		and the condition is not 5
		order the table by condition in descending order
		and by price in ascending order*/

SELECT brand, model, condition, price FROM cars
	WHERE sold IS FALSE
	AND condition != 5
	ORDER BY condition DESC, price;