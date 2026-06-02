when a system starts up, the kernel lauches a program called `init` which runs a few scripts in `/etc`, and the Process ID's (PID) are in ascending order so PID 1 is usually `init` 

`ps` - shows processes associated with only current shell

`ps x` - shows all processes associated with current user (GUI, daemons, services etc.)

`ps aux` - Processes of all users

`top` or `htop` - Provides real time, updating list of processes running

`kill (PID)` - Terminates that process

`kill -9 (PID)` - For force killing the hung process

`pgrep (Process name)` - Find a PID with its name

`ps -p (PID)` - Find the process name with its PID



