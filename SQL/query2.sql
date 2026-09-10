/*SQL Injection

Exercise 1:
  Select the brand, model and price from cars

  In our WHERE clause, we'll match against a placeholder value:
    <<BRAND>>*/

SELECT brand, model, price FROM cars
  WHERE brand = <<BRAND>>;



/*Exercise 2:
	Select the brand, model and price from cars
	Use a parameter value of $1
	Pass the user input in index.js*/

SELECT brand, model, price FROM cars
  WHERE brand = $1;