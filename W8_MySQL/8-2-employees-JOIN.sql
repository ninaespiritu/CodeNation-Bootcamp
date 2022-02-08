SELECT * FROM current_job_detail;
SELECT * FROM employee_detail;
SELECT * FROM jobs_history;
SELECT * FROM laptop_detail;

# What is the total number of employees?
SELECT COUNT(*) AS TotalNumberOfEmployees
FROM employee_detail JOIN jobs_history
ON employee_detail.employee_id = jobs_history.employee_id;

# Who is the highest earning employee and their job title
SELECT employee_detail.employee_id, name, job_title, salary, gender
FROM current_job_detail JOIN employee_detail
ON employee_detail.employee_id = current_job_detail.employee_id
WHERE salary = (SELECT MAX(salary) FROM current_job_detail);

# How many developers are there?
SELECT COUNT(*) AS NumberOfDevelopers FROM current_job_detail WHERE job_title LIKE "Developer";

# How many developers are there in each wage bracket?
SELECT name, job_title, salary
FROM current_job_detail JOIN employee_detail
ON employee_detail.employee_id = current_job_detail.employee_id
WHERE job_title LIKE "Developer" ORDER BY salary DESC;

# Which employees aren't developers and what are their salaries?
SELECT name, job_title, salary
FROM current_job_detail JOIN employee_detail
ON employee_detail.employee_id = current_job_detail.employee_id
WHERE job_title NOT LIKE "Developer" ORDER BY salary DESC;