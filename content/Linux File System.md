
/ - Root
##### Binary Locations :
/bin - User commands (ls, cp, cat)
/sbin - Admin Commands (ip, reboot, mount)
/usr/bin - user installed binaries
/usr/sbin - Admin Binaries

/lib - stores binaries related to core system programs (Similar to DLL's in windows)

##### Security Related :
/etc/passwd - User accounts
/etc/shadow - Password Hashes (restricted)
/etc/group - Group definations
/etc/sudoers - Sudo previlages
/etc/cron* - Scheduled tasks
/etc/systemd/ - Services
/etc/ssh/sshd_config - SSH security

##### User Related (inside /home/(user)) :
.ssh/ - SSH keys
.bash_history or .zsh_history - Stores logs of bash and zsh commands

##### Temporary Locations :
/tmp - Anything stored here is cleared after boot
/var/temp - Not cleared after boot

##### Logs :
/var/log/ - has directories and files with all logs 