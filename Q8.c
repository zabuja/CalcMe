// WAP to show the use of logical operator

#include <stdio.h>

int main()
{   int a=1, b=1, c=2, d=3;

    ((a==b) && (b<d))? printf("a equals b and b lesser than d\n"): printf("not equals and less");

    ((a<c) || (a<d)) ? printf("a is lesser than c or d\n"): printf("neither");

    printf("complete");

    return 0;
}