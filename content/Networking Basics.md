Handshake - A request send to a destination to access it

#### **_IP Adress_**

- IP v4 shows your IP address in decimals
- IP v6 shows your IP address in hexadecimal
- IPv4 starting from 192.168 are all private IP addresses
- Large corporations use IP address starting from 10.0
- usually xx.xx.xx.0 - represents the __Network Address__, This IP is not assigned to any device but it simply holds the address of the network
- and xx.xx.xx.255 - represents __Broadcast Address__ also cannot be assigned but if any packet send to this, all the devices receive the packet in that network 
#### **_MAC adress_**

The first 3 octets of MAC dress tell you about the vendor/company

To know how IP address and MAC address ## play a role in networking see [[OSI Canvas.canvas|OSI Canvas]]

#### **_TCP_**

- This is the main information transfer protocol and secure
- Used by almost all connections (browser, internet traffic, HTTP, FTP, telnet)
- Uses **3 way - handshake to confirm if both client and server are ready for data** 
- For 3 way - handshake usually the messages request is SYN and response is SYN/ACK and then you send an ACK to establish connections
- So basically TCP will know if data gets stolen is the middle

#### **_UDP_**

- Used for instant/fast connection (DNS etc..)
- Does not use handshake
- UDP doesn’t care about what happens to the data midway



#### **Common Ports**

#### TCP :

| **Protocol** | **Port**  | **Function**                       |
| ------------ | --------- | ---------------------------------- |
| **FTP**      | 21        | Uploads or access file in a server |
| **Telnet**   | 23        | Used to log-in remotely            |
| **SSH**      | 22        | Same as Telnet but crypted         |
| **DNS**      | 53        | Converts domain name to IP adress  |
| **HTTP**     | 80        | Web adress                         |
| **HTTPS**    | 443       | HTTP but crypted                   |
| **SMB**      | 139 / 445 | File sharing                       |

#### UDP :

| **Protocol** | **Port** | **Function**                                               |
| ------------ | -------- | ---------------------------------------------------------- |
| **DNS**      | 53       | Converts domain name to IP adress                          |
| **DHCP**     | 67 / 68  | It provides the IP addresses to devices across the network |


#### TCP/IP MODEL

| **Level **  | Name           | Example |
| ----------- | -------------- | ------- |
| **Level 1** | Network Access |         |
| **Level 2** | Internet       |         |
| **Level 3** | Transport      |         |
| **Level 4** | Application    |         |





#### **OSI MODEL** 

| **Level 1** | Physical     | Wires, cables                                            |
| ----------- | ------------ | -------------------------------------------------------- |
| **Level 2** | Data Link    | MAC address, Switches, Router, Wifi Access cards         |
| **Level 3** | Network      | IP address, Router, Hosts, IOT devices                   |
| **Level 4** | Transport    | TCP, UDP                                                 |
| **Level 5** | Session      | Session and connection maintanance, Session cookie, Port |
| **Level 6** | Presentation | SSL, MPEG, JPEG, MP4 encoding etc. (Handles encryption)  |
| **Level 7** | Application  | HTTPS, FTP etc                                           |
| **Level**   | **Property** | **Devices (Examples)**                                   |

#### **GET and POST request** 

| **GET request**                                                             | **POST request**                                                                |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| This request usually modifies the URL                                       | This request doesn’t change the URL                                             |
| Parameters are visible in the URL, making it less secure for sensitive data | Parameters are not visible in the URL, making it more secure for sensitive data |
| Used to retrieve data from a server                                         | Used to send data to the server to create or update resources                   |
| Usually used in search pages                                                | Usually used to store usernames and passwords                                   |

#### **Other Protocols** :

- **DNS** - It converts Domain Names into IP addresses
      Ex - [www.google.com](http://www.google.com) —> 121.29.8.9

- **ARP** - It is used to get a computers MAC address through its IP address by sending a __ARP packet__ to every device in that network and only the particular device responds back telling its MAC address



# Subnetting :
A subnet is simply a partition in a network, To prevent a device from one subnet trying to talk with a device for another subnet for security reasons with firewalls Ex : 10.10.1.3, 10.10.2.7, 10.10.4.2 are the subnets in the same network

## Subnet Mask : 
This is the rule which tells a subnet how it must be

There are different subnet masks present:

### 255.255.255.0 or CIDR 24
The IP addresses with `xx.xx.xx.xx/24`, They are usually small networks and its much easier to mamage 
The most common subnet mask with 256 IP addresses where
255 - means it cannot change
0 - means it can change and usually 1 is the Network Address and 255 is the broadcast Address
Ex : 
198.22.39.0 - Network Address
198.22.39.1.....198.22.39.254  - for devices
198.22.39.255 - Broadcast Address

### 255.255.0.0 or CIDR 16
The IP address goes something like `xx.xx.xx.xx/16` usually for large networks
This has around 65,534 usable IP's
Ex :
10.10.0.0 - Network address
10.10.0.1......10.10.255.254  - for devices
10.10.255.255 - Broadcast Address
__But since /16 maybe too hard to each subnet is divided into /24__ 
So in first subnet (10.10.0.0/24):
10.10.0.0 - Network address
10.10.0.1.....10.0.0.254 - Devices
10.10.0.255 - Broadcast address

Then Next subnet (10.10.1.0/24) :...... goes on

Like this there are many __Subnets such as /32 /30 /29 /28 .......

#### Common CIDR's :

|**CIDR**|**Subnet Mask**|**Usable Hosts**|
|---|---|---|
|/8|255.0.0.0|~16 million|
|/16|255.255.0.0|65,534|
|/24|255.255.255.0|254|
|/30|255.255.255.252|2|
|/32|255.255.255.255|1 (single IP)|
## VLAN :
A VLAN works on level 2 and is assigned to a subnet, which makes it so that when you connect to a Wifi with multiple devices the devices will be connected to different Subnets because of VLAN's



