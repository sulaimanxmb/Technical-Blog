
#### Hard Link :
when we do :
`echo "Hello" > fileA.txt`
`ln fileA.txt fileB.txt`

then `cat` both of them we get "Hello" itself but what happens is:
fileA.txt ─┐
            ├── inode 12345 ── data: "Hello"
fileB.txt ─┘

Both files point to the same inode and they are not copies, So you can have multiple names point to the same file and __deleting any 1 of the file wont change the output of another file__ 
Useful if we want to create backups for Databases etc. So even if DB gets deleted it has a hard link backup

#### Soft Link :
Works same as Hard link but its like this :
fileC.txt ──> *fileA.txt* ──> inode ── data
So __if original file (*fileA.txt*) is deleted even the contents of fileC.txt will be lost called broken symlink__ 

Useful for creating shorcuts for long deep path files and Language versions instead of typing full "python3.14" - > python
So if I do cat fileC.txt, The kernel opens the file but sees nothing but a symlink to the full path of fileA.txt and it travels there and reads that