//WAP to show bitwise operators

#include <stdio.h>



int main()
{
    int first=12,second=45;

    printf("Bitwise AND = %d\n",first&second);
    printf("Bitwise OR = %d\n",first|second);
    printf("Bitwise XOR = %d\n",first^second);
    // complement operator works on a single operand
    printf("Bitwise complement operator = %d",~-first); 

    return 0;
    
}