for some basics refer [[Linux]]

2 types
1. Debian (Kali, Ubuntu)      Packages end with :     .deb
2. RPM (Oracle Linux, Centos,REHEL)    Packages end with :     .rpm

#### Commands :
```shell
cp -r (target_directory_name) (Final_directory_name)   # Copy Directories
cat > /dev/null > file_which_needs_to_be_cleared.txt   # Clears file content
ls | wc -l                                             # Counting
passwd (username)                                      # Change password

scp file.txt user@remote_host:/path/filename.txt       # Moving files
                                                       # from Local to remote

scp user@remote_host:/path/file.txt /dest/filename.txt # Moving files
                                                       # from remote to local
```

#### Mounting Storage :
To mount a storage permanently Edit the `/etc/fstab` file and add these lines :
/dev/sdb1 /mnt/mydrive ext4 defaults 0 0 (For Local)
server:/path /mnt/mydrive nfs defaults 0 0 (for NFS)
and then do sudo mount -a


#### Users & Groups :
```bash
groupadd (group name)
useradd (username)
id (username)                        # Check about the user
useradd -G (groupname) (username)    # Adds that user in that group
sudo chown (user):(group) /path/to/directory   # Adds a group/user for the directory to be accessed you can later change that perm with chmod (leave blank if no user is there ex : chown :G1 /file) 
```
#### File Permisions :
Example : <span style="color: lightgreen;">d</span><span style="color: pink;">r</span><span style="color: pink;">w</span><span style="color: pink;">x</span><span style="color: yellow;">r</span><span style="color: yellow;">w</span><span style="color: yellow;">x</span><span style="color: lightblue;">r</span><span style="color: lightblue;">w</span><span style="color: lightblue;">x</span>

<span style="color: lightgreen;">Green - File Type</span> 
<span style="color: pink;">Pink - Owner</span> 
<span style="color: yellow;">Yellow - groups</span> 
<span style="color: lightblue;">Blue - Others</span> 
###### Changing permissions :
```bash
chmod (user)(+or-)(Permission) (filename)
Ex : chmod o+x filename.txt
	 chmod g+w filnema.txt

# Or follow numeric configuration of :
r,w and x = 7
r and w = 5
etc..
chmod 770 filename.txt
``` 
#### Archiving :
```bash
zip -r directory_name.zip directory_location
unzip directory_name.zip
```
#### Files :
```bash
/etc/passwd                              - user IDs 
/etc/shadow                              - user Password
                         #User ID of root is 1
```
#### VIM :
```shell
:se nu           # Displays the Line numbers
:wq              # Saves and quits
Shift + G        # Goes to last line
g + g            # goes to first Line
/word            # Searches that word
:%s/text1/text2  # Replaces text1 with text2
```

be familiar with `grep` commands

`>` command ovewrite existing file or creates new file                     
`>>` dosen't  overwrite











