These are the regular expressions patterns :
In reference with [THM Regex Room](https://tryhackme.com/room/catregex)
##### Charsets :
To search for a particular alphabets/Numerics we use `[]` 
Ex 1 : `[fF]ile`  searches for File or file word
Ex 2 : `[Ff]ile[1-10]` searches for File1,File2,....File10 and same thing with file1.....file10
Ex 3 : `[Ff]ile[^7]` dosen't specifically show File7 or file7 
Ex 4 : `[cbh]at` gives cat, hat and bat

##### Wildcards :
This is used to match any character at place of `.` to search for . we use \
Ex 1 : `.at` will match bat, aat, cat, dat, 3at, @at  literally anything
Ex 2 : `example\.com` matches example.com

##### Optionals :
This is to match optional characters using `?`
Ex 1 : `abc?` matches ab and abc since c is optional
Ex 2: `cats?` matches cat and cats
Ex 2: `a(bc)?` makes bc as optional so matches a and abc

##### Repetition :
For repetitions we use `*` or `+`
`+` - repetition with 1 or more times
`*` -repetition with 0 or more times
Ex 1 : `[Cc]ats*` matches cats, Cat, Catss, Catssss, catssssss....... etc.
Ex 2 : `[Ca]ats+` matches Cats, cats, Catssss...... but not cat


