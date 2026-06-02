
### Cheatsheet :
![[Media/Nmap Cheatsheet.png]]


Most detailed command
```bash
sudo nmap -sS -sV -T4 -Pn -p- <IP> -oN nmap_scan_results.txt
```

There are also scripts present which you can run with nmap

Example :
Here I have run multiple scripts at once 
```bash
sudo nmap --script "ftp-anon,http-title,http-methods,ssl-cert,rtsp-url-brute,pptp-version" -p21,80,443,554,1723 <IP>
```

Check which scripts are present by going to :
```bahs
cd /opt/homebrew/opt/nmap/share/nmap/scripts
```

