class calculator
{
    constructor(previousOperandTextElement, currentOperandTextElement)
    {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

    }

   clear()
   {
        this.currentOperand= ''
        this.previousOperand = ''
        this.operation = undefined
   } 

   delete()
   {

   }

   operands(number)
   {
        this.currentOperand = number
   }

   operation(operation)
   {

   }

   result()
   {
        this.currentOperandTextElement.innerText = this.currentOperand
   }
}

//selecting the input

const numberButtons = document.querySelectorAll('[data-numbers]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-pre-operand]')
const currentOperandTextElement = document.querySelector('[data-cur-operand')

const calculator = new calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operands(button.innerText)
        calculator.result()
    })
})