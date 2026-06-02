Normal Scan with nuclei :
```bash
cat final_alive_subdomains.txt | nuclei -t cves/ -t vulnerabilities/
```

All templates are located in :
```bash
/Users/sulaiamneksambi/nuclei-templates
```
### Nuclei Templates :

Basic template which sends a GET request and sees if its a express js or not 
```yaml
# Unique ID (Name)
id : node-express

#INFORMATION SECTION
info :
	name: Node Express Technology
	author : sulaiman

#PROTOCOL SECTION :
http:
	- mehthod : GET
	  path :
		  - "{{BaseURL}}"           # URL given in the command
	  matchers :                    # Takes the request and sees if the request
		  - type : word             # has this in the headers
		    name : express
		    words :
			    - "X-Powered-By : Express"
			part : header
```

see reference of their [Youtube channel](https://www.youtube.com/@projectdiscovery/videos)


