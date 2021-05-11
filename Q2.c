//WAP to show the difference between “%d” and “%i”


#include <stdio.h>




int main()
 {
   int a, b, c, d;
 
    printf("Enter value of a in decimal format:");
    scanf("%d", &a);
 
    printf("Enter value of b in octal format: ");
    scanf("%i", &b);
 
    printf("Enter value of a in octal format:");
    scanf("%d", &d);
 
    printf("a = %i, b = %i, c = %i, d= %i", a, b, c, d);
  return 0;
}