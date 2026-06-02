
### Basics Type shi :
```sql
SELECT emp_no, first_name, last_name
FROM employees
WHERE first_name = 'Georgi'
LIMIT 10;
```


### Date Type shi :
```sql
SELECT emp_no, first_name, last_name, hire_date
FROM employees
WHERE hire_date BETWEEN '1998-01-01' AND '1998-12-31';
```

### Assending / Desending Type shi :
```sql
select emp_no,first_name,birth_date 
from employees 
order by birth_date desc        -- This Means Sort by desending remove this for assending order sort
limit 10;
```

### Grouping and MIN/MAX/AVG :
```sql
select emp_no,AVG(salary) 
from salaries 
group by emp_no 
limit 10;
```

### Counting in a particular Column :
```sql
select gender, COUNT(*)
from employees
group by gender;
```

### Shows count of employees per year :
```sql
SELECT YEAR(hire_date), COUNT(*)
FROM employees
GROUP BY YEAR(hire_date)
ORDER BY YEAR(hire_date);
```


