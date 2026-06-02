While using caido if you get a GET or POST request try changing it to TRACE request (It sends your request back from server) to see if the request got modified are not
###  Reconnaissance :
#### Subdomain enumeration :
**Active Subdomain enumeration :** Interacting with target continuously, by brute forcing

There is a command with amass

**Passive Subdomain enumeration :** using public data (Better ngl)


`subfinder -d example.com -all -recursive -t 200 > subfinder.txt` 

`amass enum -d example.com -o amass.txt`

`assetfinder --subs-only example.com > assetfinder.txt`

combine all these to subdomains.txt

`cat subdomains.txt | sudo httpx -sc > alive_domains.txt`

after getting all SUB-DOMAINS try for a subdomain takeover using Automated tools like :
1. Subzy       :     `sudo subzy run -targets (domains file)`
2. Nuclei


Use burp suite host or IP range in sitemap by a regix like `.*\.test\.com$

#### Live & Resolving 
(have no idea what this does but check these subdomains)

`dnsx -l subdomains.txt -r resolvers.txt -o dnsx_resolved.txt`

Then Resolve to IP's :
`dnsx -l dnsx_resolved.txt -a -resp-only -o dnsx_resolved_ips.txt`

run nmap for those IP's
`nmap -iL dnsx_resolved_ips.txt -sV -oN nmap_dnsx.txt`

#### Probing :
use this:
`httpx -l subdomains.txt -title -sc -location -p 80,443,8000,8080,8443 -td -cl 
`-probe -o probe_httpx.txt`

**Note : The failed ones which appear are mostly 404 forbidden pages**

`cat httpx.txt | grep -v "FAILED" | awk '{print $1}' | tee probed_only_domains.txt`
This gives only domain names

#### Content Discovery :

`cat probed_domains.txt | feroxbuster --stdin -s 200 --no-recursion -k 
`--random-agent --no-state -r -W 0 -w feroxbuster.txt`  
or
``katana -list probed_domains.txt -jc | grep "\.js"``
or do manually

#### Archived URL's (wayback machine) :

`katana -passive -pss waybackarchive,commoncrawl,alienvault -f qurl -u target.com | anew katana_urls.txt`

#### ASN :

`amass intel -asn <ASN_Number> -o asn_targets.txt`

Use [censys](https://search.censys.io) and shodan here

#### Testing :

### Login Bypasses :
for logging in some developers set a **Default OTP** which can be used to bypass otp
So create a new account using email and then use common code like 11111,00000,123456

Put dstny.com to censys and started testing on the first IP came

used : `gobuster dir -u http://185.39.124.194 -w /path/to/wordlist.txt -s "200,301,403" --status-codes-blacklist ""`
Better use feroxbuster ngl

If you see FTP port open then use `lftp ftp://IP` and try running ls orsmtg for connection

when a port is filtered that mostly means protected by firewall

If you get 404 page with IP restriction use `curl -H 'X-FORWARDED-FOR: 127.0.0.1:5000/secret'`

#### Mindmap :
![[Mindmap.png]]






