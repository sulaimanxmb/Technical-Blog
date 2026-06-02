### Image Analysis :

First use basic tools like :
```bash
strings (image.png)
```

if you find any folder names here 
the image contains a embedded hidden zipped folder check with :
```bash
binwalk (image.png) 
```
and then extract it by :
```bash
binwalk -e (image.png)
```


