
### Webserver :
the default webserver folder there is 
```bash
/Library/webserver/Documents/
```

To change it change 
```bash
sudo nano /etc/apache2/httpd.conf
```

Search by Control+W and change these 2 lines 
```bash
DocumentRoot "/Library/WebServer/Documents"
<Directory "/Library/WebServer/Documents">
```

### SSH key :
you can generate your own ssh key with :
```zsh
ssh-keygen -t rsa -b 4096 -C "Main_key"
```
This will create a public and private key in .ssh folder in your current directory


