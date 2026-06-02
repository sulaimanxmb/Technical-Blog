
`id` or `id (username)` - Shows all UID, GID, groups of the current user
### For Managing users :

##### useradd
To add a new user properly run :
`sudo useradd -m -s /bin/bash (username)`
To add a new user and also assign him a group:
`sudo useradd -m -G (groupname) -s /bin/bash (username)`

here :
`-m` - initialises the home directory of that user (create `/home/(username)/`)
`-s /bin/bash` - Sets user login shell (Provides Command history, tab completion etc.)

Verify the user with :
`cat /etc/passwd | grep (username)`

__Note : Alternative to `useradd`there is `adduser` which does all everything__ 
__Syntax__ : `sudo adduser (username)`
But `useradd` is preferred in servers for precise control

To delete a user:
`sudo userdel (username)` 
`sudo userdel -r (username)` - Deletes its home directory also

##### groupadd
To Create a new group :
`sudo groupadd (groupname)`

Verify with :
`cat /etc/group | grep (groupname)`

To delete a group:
`sudo groupdel (groupname)`

##### usermod 
To add a user to a group:
`sudo usermod -aG (groupname) (username)`

Remove a user from a group :
`sudo gpasswd -d (username) (groupname)`


### For changing file permissions :
##### chmod (Who)(Operator)(Permission)
Who can be :
u - user (owner)
g - group
o - others
a - everyone (u + g + o)

Operator :
`+`  - Add
`-` - Remove
`=` - Equal

Permission for files :
`r` - can read contents of the file
`w` - can modify/write inside the file
`x` - can execute it if its executable

Permisions for Directories:
`r` - Can see all the files in that directory
`w` - Can Create new files / modify them
`x` - Can Enter into directory and access the files

Example :
`chmod u+x file.txt` - Adds the owner execute permission
`chmod o= file.txt` - Removes all permission of that file
`chmod o=r file.txt` - Set others to read only
`chmod u=rwx g=rw o=r` - Sets as given

__Note : removing executable permission from Directory prevents cd into it__ 

##### umask (who)(operator)(Permission)
`umask` defines the default permissions for when a file / directory is created

__Note : To see it type `umask -S`__ 

Example :
`umask u=rwx g=rx o=rx`  

##### chown (username):(groupname) (filename)
Chown defines the ownership of the File / Directory
Example :
`chown (username) file1.txt` - Changes the owner of that file

`chown :(groupname) file1.txt` - Changes the group of the file

`chown (username):(groupname) file1.txt` - Changes of that file

`chown -R (username):(groupname) Dir1/Dir2` - Changes both of all files and folders present in that part