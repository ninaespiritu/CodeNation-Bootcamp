
-- Run this before starting
USE bj3qias8rruyqowh7u4u;

CREATE TABLE movies (film_id INT NOT NULL auto_increment, movie_title VARCHAR(255) NOT NULL, year INT(4), rating INT(2), PRIMARY KEY(film_id));

CREATE TABLE actors (actor_id INT NOT NULL auto_increment, actor_name VARCHAR(255) NOT NULL, film_id INT NOT NULL, PRIMARY KEY(actor_id), FOREIGN KEY(film_id) REFERENCES movies(film_id));

-- CREATE: Add new movie ======================================
INSERT INTO movies (movie_title, year, rating) VALUES ("Pulp Fiction", 1994, 7);
INSERT INTO movies (movie_title, year, rating) VALUES ("Titanic", 1997, 6);
INSERT INTO movies (movie_title, year, rating) VALUES ("The Notebook", 2004, 9);
INSERT INTO movies (movie_title, year, rating) VALUES ("Notting Hill", 1999, 9);
INSERT INTO movies (movie_title, year, rating) VALUES ("Pride and Prejudice", 2005, 9);

-- READ: Read all movies ======================================
SELECT * FROM movies;
SELECT * FROM movies WHERE year < 2000; -- 90s movies
SELECT * FROM movies WHERE rating > 8;
-- AVG
SELECT AVG(year) AS AverageYear FROM movies;
SELECT AVG(rating) AS AverageRating FROM movies;
-- COUNT
SELECT COUNT(*) AS NumberOfMovies FROM movies;
SELECT COUNT(*) AS NumberOfMovies FROM movies WHERE year < 2000;
SELECT COUNT(*) AS NumberOfMovies FROM movies WHERE rating > 8;
-- MAX
SELECT MAX(year) AS NewestMovie FROM movies;
SELECT MAX(rating) AS TopRatedMovie FROM movies;
-- MIN 
SELECT MIN(year) AS OldestMovie FROM movies;
SELECT MIN(rating) AS LowestRatedMovie FROM movies;
-- SUM
SELECT SUM(rating) AS SumOfRatings FROM movies;

-- WHERE
SELECT (movie_title) FROM movies WHERE year < 2000;
-- LIKE
SELECT * FROM movies WHERE movie_title LIKE "%Notebook%";
SELECT movie_title FROM movies WHERE movie_title LIKE "%Notebook%";
-- ORDER BY
SELECT * FROM movies ORDER BY year;
SELECT * FROM movies ORDER BY year DESC;
SELECT * FROM movies ORDER BY rating;
SELECT * FROM movies ORDER BY rating DESC;
SELECT movie_title FROM movies WHERE movie_title LIKE '%i%' ORDER BY rating DESC;

-- UPDATE: Update movie info ==================================
UPDATE movies SET movie_title = "Pride & Prejudice" WHERE film_id = 5;
UPDATE movies SET year = 1997 WHERE film_id = 2;
UPDATE movies SET rating = 8 WHERE film_id = 3;

-- DELETE: Delete movie =======================================
DELETE FROM movies WHERE film_id = 7;
DELETE FROM movies WHERE year < 1998;
DELETE FROM movies WHERE rating < 7;