
### Artifact :
The piece of evidence collected during a breach
Ex : If Malware used windows registry keys for persistence then we take the registry key as artifact

If the breach goes out of control you call the CIRT, who have broader knowledge in czber threats.

MSSP : They are the organizations who manage and monitor other businesses Ex : IBM security, AT&T Cybersecurity, Palo Alto Networks etc.             


### EDR :

End points are the devices like laptops, computers and to monitor them its End-point detection response (EDR)
Ex :
- [**CrowdStrike Falcon**](https://www.crowdstrike.com/wp-content/uploads/2022/03/crowdstrike-falcon-insight-data-sheet.pdf)
- [**Microsoft Defender for Endpoint**](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint)

__Note : EDR is host-only tool not network detection tool__

EDR's functions are :
Visibility - they provide changes in Process, Registry, Files and folder, User actions and much more in a dashboard structure

Detection : Through behaviour and Signatutres 

### EDR's are much advanced version of AV which help us

We can setup many EDR agents to sit at different endpoints and monitor them and send the data to a EDR console for a full overview
This data send is called __Telemetry__

### Threat Hunting :
Threat Hunters proactively search for compromises in a network even when no alerts have been triggered, Their job is to find compromises before it gets too late

##### For IOC (Indicators of Compromise)
A repo for all Live malwares visit [theZoo](https://github.com/ytisf/theZoo) or [Threat Encyclipedia](https://www.trendmicro.com/vinfo/us/threat-encyclopedia)
Check for CVE's etc.

also [ATT&CK Navigator](https://mitre-attack.github.io/attack-navigator/) is also a great tool for visualizing attacks for Threat Hunters



