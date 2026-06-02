## Common Commands :

`file (filename)`  - Returns the type of file
`less (filename)` - Shows the file line by line instead of flooding everything

`ln file1.txt file2.txt` - Creates a hard link for the 2 files
`ln -s file1.txt file2.txt` - Creates a soft link for the 2 files

`which (Exacutable Name)` - Returns the location of the Executable (Only works for executable)

`cat -n (file name)` - Returns content of the file with number of lines printed

`diff (file1) (file2)` - Compares both the files and gives the difference

#### Creating own command :
To create a custom command which when ran executes your _script.sh_ :
1. Make it executable
2. Move it to `~/.local/bin/(Command-Name)
3. Check if `~/.local/bin` is in _$PATH_ (`echo $PATH | grep ~/.local/bin`)
4. If not then add it in _PATH_ (`echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc`) and then `source ~/.bashrc`
5. Now simply type `(Command-Name)` in CLI and the script is executed
