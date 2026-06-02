
also be familiar with `Fabric and boto3` libraries of python

Some practice script see :
```python
#!/Users/sulaimaneksambi/Desktop/Python/.venv/bin/python

import random
import os


Dict = {"Job": "Software Engineer", "Company": "TechCorp", "Location": "New York"}
print(Dict.keys())
print(Dict.values())
print(Dict.items())
Dict['Job'] = 'Plumber'   # changes the value from saftware engneer 
Dict['J-word'] = Dict.pop('Job')   # chages the key

IP = ["192", "168", "29", "1"]
print(".".join(IP))




# JSON Manipulation :
# For modifying JSON files you need to convert JSON to dictionary and then modify thier values and then convert it back to JSON
# Both JSON and dictionary may look same but they are not same
import json

json_data = `{"name" : "john", "age":30, "city":"New York"}`
data = json.loads(json_data)  # This converts JSON data to dictionary data

data['country'] = 'USA'
data['age'] = 28

updated_json_data = json.dumps(data) # This converts Dictionary data back to JSON



#Loops :

List = "Devops"
for i in List:

	print(i)
	#1 2 3 4 5

  

def Arguments(*args, **kwargs): #*ardgs use for any number of numeric and **kwargs for any numebers of string arguments
	print(args) #args is a tuple
	print(kwargs) #kwargs is a dictionary
	
	choice = random.choice(list(kwargs.keys()))
	print(choice)

Arguments(1, 2, 3, 4, 5, a1="D1", a2="D2", a3="D3", a4="D4", a5="D5",)
# If u dont know how many arguments you will pass, use *args and **kwargs

  
# OS module commands :
os.system("ls") # Direct system command and the output is displayed as exit codes
os.path.isdir("/etc/passwd/uk/ik") # Check if the path is a directory
os.path.isfile("/etc/passwd/uk/ik/path.txt") # Check if the path is
os.mkdir("Directory")
os.listdir('.') #ls in current Directory
os.rmdir("Directory")
os.remove("file.txt")  # rm -rf for files






#File handling :
#Reading :
file = open("File1.txt", "r")
content = file.read()             # This has entire file
line = file.readline()
lines = file.readlines()
print(content)            # Prints the entire file normally
print(line)               # Prints the first line from file
print(lines)              # Prints each Lines in tuple
file.close()

#Writting :
file = open("File2.txt", "w")
file.write("This will replace content of file with this")
file.close()

#Appending :
file = open("File3.txt", "a")
file.write("\n This will be written in new line")
file.close()








# Networking :
# 2 way communication between 2 scripts
# Server side :
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # Socket Object
IP = '127.0.0.1'
port = 4444

server_socket.bind((IP, port))      # Binding IP and port for connection
server_socket.listen(5)             # Listening upto 5 requests

client_socket, client_address = server_socket.accept()
print(f"Connection established with {client_address}")

data = client_socket.recv(1024).decode('utf-8')
print(f"Received {data}")

response = "Hello from server!"
client_socket.send(response.encode('utf-8'))

client_socket.close()
server_socket.close()

# Client side :
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# Here AF_INET is for IPv4 address and SOCK_STREAM is making sure data is reaching 
host = '127.0.0.1'
port = 4444
client_socket.connect((host, port))

message = "Hello, server!"
client_socket.send(message.encode('utf-8'))

data = client_socket.recv(1024).decode('utf-8')
print(f"Recieved from server {data})
client_scoket.close()

```
