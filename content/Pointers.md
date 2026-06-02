&n is the address of n 
And while dealing with addresses we use 
\*n instead of n
Here we returning the variable value of r1 back to main() function using these pointer properties 
```c
#include<stdio.h>
#include<math.h>
int function(float n,*r1)
{
 int r1;
 *r1 = n*n;
}
int main()
{
 float n,r1;
 printf(“Enter number N :”);
 scanf(“%d”,&n);
 function(n,&r1);
 pritnf(“%d”,r1);
}
```

