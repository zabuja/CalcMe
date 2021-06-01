class Calculator
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
        this.operation = null
   } 

   delete()
   {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
   }

   appendOperands(number) //appends the operands
   {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = String(this.currentOperand) + String(number)
   }



   compute()
   {
       let answer
       const pre = parseFloat(this.previousOperand)
       const cur = parseFloat(this.currentOperand)
       if(isNaN(pre) || isNaN(cur)) return
       switch (this.operation)
       {
            case '+':
                 answer = pre + cur
                 break
            case '-':
                 answer = pre-cur
                 break
            case 'x':
                  answer = pre*cur
                  break
            case '&divide':
                 answer = pre%cur
                 break
            default:
                return
       }
   }

   update()
   {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
        
   }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-pre-operand]')
const currentOperandTextElement = document.querySelector('[data-cur-operand')

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
     button.addEventListener('click', () => {
         calculator.appendOperands(button.innerText)
         calculator.update()
     })
 })
 
 operationButtons.forEach(button => {
     button.addEventListener('click', () => {
         calculator.addOperation(button.innerText)
         calculator.update()
     })
 })

 equalsButton.addEventListener('click', button => {
      calculator.compute()
      calculator.update()
 })

 clearButton.addEventListener('click', () =>{
      calculator.clear()
      calculator.update()
 })
 
 deleteButton.addEventListener('click', () =>{
      calculator.delete()
      calculator.update()
 })