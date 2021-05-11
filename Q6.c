// WAP to show the use of relational operator (==,<,!=)

#include<stdio.h>

int main()
{ 
    int a = 5, b = 7, c = 6;
    {(a==b)?printf("a equals b\n"):printf("not\n");}
    


    (a<b)? printf("a less than b\n"):printf("not\n");
   
   
   
   (a==c)? printf("a equals c\n") : printf("not\n");
   
    
    
    (a!=c)?printf("a not equals c\n"):printf("not\n");
    
    
    printf("\nlogical operators checked");
    return 0;
}