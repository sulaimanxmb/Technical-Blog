#### Definition :
##### Backdoor : 
A backdoor is a program allowing to control a system remotely

##### Payload :
A payload is a program in backdoor which helps in establishing connection 
Here's a photographic example -
![[msf.png]]


#### Naming of payload :
A payload may consist of mainly 3 sections ie :
**Platform / Type / Communication direction_Communication Protocol**

`Platform Ex :` windows, linux, osx, android, apple_ios, pyhton, java, generic
`Type Ex :` meterpreter, shell, dillinject, exec, vncinject, messagebox
`Communication Direction Ex :` reverse, bind ( direct )
`Communication Protocol Ex :` https, tcp, http, udp

Example of simple windows backdoor : `windows/meterpreter/reverse_http`

![[msf2.png]]

![[msf3.png]]

#### Creating a custom backdoor using msfvenom :

for all commands do : `msfvenom --help`

##### Step1 : select your payload and see options
Ex : here I created a payload for windows
![[msf4.png]]
**You get a long list of options so scroll up to normal options and change**

##### Step 2 : Select your options 
Scroll Up untill you get this :
![[msf5.png]]
*Here modify the LHOST with your IP and LPORT with a free port*
the command should look like this :
![[msf6.png]]
**And the backdoor called** `backdoor_rev.exe` **must be present in your current directory**

#### Listening to Connections through metasploit :
##### Step 1 : run metasploit module
*first type* : `msfconsole` 

**Then use the multi handler module** :
![[msf7.png]]
**and then run the** `show options` **command to see all options**

You get this setting which is wrong :
![[msf8.png]]

##### Step 2 : correct payload and LHOST
To correct Payload run :
![[msf9.png]]

To correct LHOST and LPORT run :
![[msf10.png]]

##### Step 3 : Final check and run
for cross-check run : `show options` and see if everything is correct
after everything is correct run :
`exploit` and your metasploit will open that port and be checking for connection

#### Hacking a windows computer :
##### Step 1 : Moving File to apache2 web server
First open files and `var/www/html` and create a new folder called `Evil-Files` and move the payload there
![[msf11.png]]

##### Step 2 : Start server
![[msf12.png]]

##### Step 3 : Download backdoor
Go to `Kali IP/Evil-Files/` and download the file with security disabled  
![[msf13.png]]

##### Step 4 : Execute
If the backdoor is executed successfully then this will appear in your listening connection :
![[msf14.png]]

