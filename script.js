
  const display = document.getElementById
  ('display');
  const clearButton = document.getElementById
  ('clear');
  const deleteButton = document.getElementById
  ('delete');
  const equalsButton = document.getElementById
  ('equals');
  const numberButton = document.querySelectorAll
  ('#zero,#one,#two,#three,#four,#five,#six,#seven,#eight,#nine');
  const operatorButtons = document.querySelectorAll 
  ('#plus,#minus,#multiply,#divide');


   let currentNumber = ";
   let previousNumber = ";
   let currentOperator = null;

   numberButtons.forEach(button=>{
    button.addEventlistener('click',()=>{
     currentNumber += button.textContent;
     display.value = currentNumber;
    });
    
});
   