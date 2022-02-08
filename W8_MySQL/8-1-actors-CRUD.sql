
-- Run this before starting
USE bj3qias8rruyqowh7u4u;

CREATE TABLE actors (actor_id INT NOT NULL auto_increment, actor_name VARCHAR(255) NOT NULL, film_id INT NOT NULL, PRIMARY KEY(actor_id), FOREIGN KEY(film_id) REFERENCES movies(film_id));

-- CREATE: Add new actor ======================================
INSERT INTO actors (actor_name) VALUE ("Benedict Cumberbatch");
INSERT INTO actors  SET actor_name = "Leonardo DiCaprio", film_id = (SELECT film_id FROM movies WHERE movie_title = "Titanic");
INSERT INTO actors  SET actor_name = "Keira Knightley", film_id = (SELECT film_id FROM movies WHERE movie_title = "Pride & Prejudice");
INSERT INTO actors  SET actor_name = "Ryan Gosling", film_id = (SELECT film_id FROM movies WHERE movie_title = "The Notebook");
INSERT INTO actors  SET actor_name = "Julia Roberts", film_id = (SELECT film_id FROM movies WHERE movie_title = "Notting Hill");
INSERT INTO actors  SET actor_name = "Quentin Tarantino", film_id = (SELECT film_id FROM movies WHERE movie_title = "Pulp Fiction");

-- READ: Read all movies ======================================
SELECT * FROM actors;
-- COUNT
SELECT COUNT(*) AS NumberOfActors FROM actors;
-- WHERE
SELECT * FROM actors WHERE actor_id < 5;
SELECT * FROM actors WHERE film_id < 5;
-- LIKE
SELECT * FROM actors WHERE actor_name LIKE "%a%";
-- ORDER BY
SELECT * FROM actors ORDER BY actor_id;
SELECT * FROM actors ORDER BY film_id;
SELECT actor_name FROM actors WHERE actor_name LIKE '%i%' ORDER BY film_id DESC;

-- UPDATE: Update movie info ==================================
UPDATE actors SET actor_name = "Leo DiCaprio" WHERE actor_id = 1;
UPDATE actors SET actor_name = "Leonardo DiCaprio" WHERE actor_name = "Leo DiCaprio";

-- DELETE: Delete movie =======================================
DELETE FROM actors WHERE actor_name = "Leonardo DiCaprio";
DELETE FROM actors WHERE actor_id = 1;
DELETE FROM actors WHERE film_id = 11;