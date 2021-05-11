// WAP to show the difference between %o and %x

#include <stdio.h>




int main()
 {
     int b, d;
    printf("Enter value of b in octal format: ");
    scanf("%o", &b);
 
    printf("Enter value of a in hexadecimal format:");
    scanf("%x", &d);
 
    printf(" b = %i, d= %i", b, d);

  return 0;
}