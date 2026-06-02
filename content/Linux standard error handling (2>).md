## Redirecting Standard output and error :
Generally :
0 - represents Input
1 - represents standard output
2 - represents standard error

When :
`ls > ouput.txt` *then output is stored in the file and error is thrown into the shell* 

Example of directing output and error in different files :
`ls > output.txt 2>> error.txt`

Example of output and error going in the same file
`ls > output.txt 2>$1`  

Example of errors getting ignored :
`ls 2> /dev/null`
