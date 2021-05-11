// WAP to show the use of typecasting

#include <stdio.h>




int main()
 {
   //implicit

   int  num = 13;
   char c = 'k'; //107
   float sum;
   sum = num + c;
   printf("sum = %f\n", sum );


   //explicit

  float a = 1.2;
	int b = (int)a + 1;
	printf("Value of a is %f\n", a);
	printf("Value of b is %d\n",b);
  return 0;
}