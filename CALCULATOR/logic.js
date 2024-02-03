let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText == 'X'){
            buttonText='*';
            screenValue += buttonText;    //screenValue is a string(variable)
            screen.value = screenValue;  //screen.value is a value & screen is a input tag
        }
        else if(buttonText == 'C'){
            screenValue = "";    
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value= eval(screenValue);
        }
        else{
            screenValue += buttonText;    
            screen.value = screenValue;
        }
        
    })
}