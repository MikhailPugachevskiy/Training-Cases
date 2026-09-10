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



/*LIMIT

Exercise 25:
	Select the brand, model, year and price from the cars table
		order the results by the price in descending order
		limit the results to 1*/

SELECT brand, model, year, price FROM cars
	ORDER BY price DESC
	LIMIT 1;



/*Exercise 26:
	Select the brand, model, color and price from cars
		where the color is a shade of 'red'
		and sold is false
		order by price
		limit the results to 5*/

SELECT brand, model, color, price FROM cars
	WHERE color LIKE '%red%'
	AND sold IS FALSE
	ORDER BY price
	LIMIT 5;



/*COUNT and SUM

Exercise 27:
	Count the number of cars
		where sold is true*/

SELECT COUNT(*) FROM cars
	WHERE sold IS TRUE;



/*Exercise 28:
	Sum the price of cars
		where sold is true
	Use the alias total_earnings in your output*/

SELECT SUM(price) AS total_earnings FROM cars
	WHERE sold IS TRUE;



/*MAX, MIN and AVG

Exercise 29:
	Select the maximum retail price
		where sold is true
	Use most_expensive as an alias*/

SELECT MAX(price) AS most_expensive FROM cars
	WHERE sold IS TRUE;



/*Exercise 30:
	Use the AVG aggregate function to find the average price
		where the brand is Bentley
		We can use FLOOR and CEIL to round the average down or up
			to the nearest whole number*/

SELECT FLOOR(AVG(price)) AS average FROM cars
	WHERE brand = 'Bentley';



/*Exercise 31:
	Select the average, minimum and maximum price from cars
		where sold is true
	Round the average up to the nearest whole number
		and use 'avg' as the alias for that result	*/

SELECT
	CEIL(AVG(price)) AS avg,
	MIN(price),
	MAX(price)
FROM cars
	WHERE sold IS TRUE;



/*GROUP BY

Exercise 32:
	Select the brand, and a count of the brand from cars
		alias the count as brand_count
		group by the brand column*/

SELECT brand, count(brand) AS brand_count FROM cars
	GROUP BY brand;



/*Exercise 33:
	Select the condition, and a count of the condition from cars
		group by the condition column*/

SELECT condition, count(condition) FROM cars
	GROUP BY condition;



/*Exercise 34:
	Select:
		* the brand
		* a count of the brand
		* and an average of the price for each brand
		* round the average down to the nearest number
		* alias the average as 'AVG' in your output
	From cars where
		the car has not been sold
	Group the table by brand.*/

SELECT brand, count(brand), FLOOR(AVG(price)) AS AVG
	FROM cars
	WHERE sold IS FALSE
	GROUP BY brand;



/*HAVING

Exercise 35:
	Select:
		* the brand
		* a count of the brand
		* and an average of the price for each brand
		* round the average down to the nearest number
		* alias the average as 'AVG' in your output
	From cars where
		the car has not been sold
	Group the table by brand.
	
	Show results where the count is > 1*/

SELECT brand, count(brand), FLOOR(AVG(price)) AS AVG
	FROM cars
	WHERE sold IS FALSE
	GROUP BY brand
	HAVING count(brand) > 1;



/*Exercise 36:
	Select:
		* year
		* a count of cars from that year, aliased as car_count
		* the maximum price
		* the minimum price
	from the table cars
		where the car has been sold
	group by year
		only show years where more than one car has been sold from that year
	order the result by car_count*/

SELECT year,
	count(year) AS car_count,
	MAX(price),
	MIN(price)
FROM cars
WHERE sold IS TRUE
GROUP BY year
HAVING count(year) > 1
ORDER BY car_count;



/*Exercise 37:
	Select brand, model, and year from cars
		only show the oldest 5 cars in the database
		show cars which haven't been sold*/

SELECT brand, model, year FROM cars
	WHERE sold IS FALSE
	ORDER BY year
	LIMIT 5;



/*Exercise 38:
	Select color and count how many cars have each color
		find cars which have not been sold
		order by count in descending order
		only show results where the count is greater than 2*/

SELECT color, COUNT(color) FROM cars
	WHERE sold IS FALSE
	GROUP BY color
	HAVING COUNT(color) > 2
	ORDER BY COUNT(color) DESC;



/*INSERT INTO

Exercise 39:
	Retro rides have acquired two new cars this week:
		1. A Ford Escort RS2000 from 1978 in blue
				the car is from 1978, a 4/5 condition
				the car has not been sold and is listed at $39,000
		2. A 1977 Aston Martin V8 Vantage in dark green
				The car is in perfect condition
				and is listed for sale at $145,000*/

INSERT INTO cars (
	brand, model, year, price, color, condition, sold
) VALUES (
	'Ford', 'Escort RS2000', 1978, 39000, 'blue', 4, FALSE
);



/*Exercise 40: 
	Insert these two cars to the cars table:
		1. Brand: Chevrolet, model: Bel Air, year: 1955,
			retail_price: 50000, color: purple, condition 5, sold: false
		2. Brand: Porsche, model: 944 Turbo, year: 1986,
			retail_price: 48000, color: white, condition: 4, sold: false*/

INSERT INTO cars (
	brand, model, year, price, color, condition, sold
) VALUES (
	'Chevrolet', 'Bel Air', 1955, 50000, 'purple', 5, FALSE
), (
	'Porsche', '944 Turbo', 1986, 48000, 'white', 4, FALSE
);



/*UPDATE

Exercise 41:
	Set the sold column to true for the Ford Escort RS2000*/

UPDATE cars SET
	sold = TRUE
WHERE brand = 'Ford'
	AND model = 'Escort RS2000';



/*Exercise 42:
	Update the record for the Aston Martin DB4 with ID 14
		set the condition to 5
		and the price to 465000*/

UPDATE cars SET
	condition = 5,
	price = 465000
WHERE 
	id = 14;



/*Exercise 43: 
	Set the condition to 1
		and the price to $10,000
	where the car's brand is Porsche
		and sold is false*/

UPDATE cars SET
	condition = 1,
	price = 10000
WHERE
	brand = 'Porsche'
	AND sold IS FALSE;



/*DELETE

Exercise 44: Delete from the cars table, any record where condition is 0*/

DELETE FROM cars
	WHERE condition = 0;



/*Exercise 45: Delete any record from the cars table where sold is TRUE*/

DELETE FROM cars
	WHERE sold IS TRUE;