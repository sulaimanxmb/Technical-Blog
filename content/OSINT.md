
### Web tools :
 [Censys.io](https://search.censys.io)

For finding usernames for in 500+ websites : [WhatsMyName](https://whatsmyname.app)

for finding info about a website : [DNSdumpster](https://dnsdumpster.com)

for Image forensics (ie upload a photo and extract data from it) :
[exif.tools](https://exif.tools)

### Google Dorking :


### SUB-DOMAINS :
***Google Dorking :*** go [here](https://www.google.com/advanced_search) or do manually by learning

***web tools :*** 

***Automated-tools :*** subfinder, assetfinder

use subfinder and this command `sudo subfinder -d (domain name) -all > subdomains.txt`  
after finding all sub-domains we filter the alive ones using ***httpx***

command being `cat subdomains.txt | sudo httpx > alive_subdomains.txt` 

also get to know thier status code by :
`cat alive_subdomain.txt | sudo httpx -sc > alive_domain_status_code.txt`

subfinder -d website.com | httpx -sc -silent

also amass try
`amass enum -active -d example.com -brute -min-for-recursive 3
