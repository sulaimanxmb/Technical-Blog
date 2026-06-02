This occurs due to software bug when the program dosen't check the size of input being takes and it results in overflow of input and over write the other bits or return functions

This mostly happens for languages that allow it Example : C and C++ and not possible in languages like Python

This code has a buffer overflow :
```c
int main(void) {
    char buf[16];

    printf("Enter your name: ");
    gets(buf);              
    printf("Hello, %s\n", buf);

    return 0;
}
```

whereas this dosen't have it :
```c
int main(void) {
    char buf[16];

    printf("Enter your name: ");
    if (fgets(buf, sizeof(buf), stdin) == NULL) {
        /* handle EOF/error */
        return 1;
    }

    /* fgets keeps the newline if there was room — remove it */
    buf[strcspn(buf, "\n")] = '\0';

    printf("Hello, %s\n", buf);
    return 0;
}
```

This can be exploited for a RCE and reverse shell
