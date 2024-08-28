function appendToDisplay(value){
  var display=document.getElementById('display');
  if(isValidCharacter(value)){
    display.value += value;
  }
}


function isValidCharacter(character){
    return /^[0-9+\-*/.%]$/.test(character)
}

function clearDisplay(){
    var display=document.getElementById('display');
    display.value="";   
}

function deleteDisplay(){
  var display=document.getElementById('display');
   display.value= display.value.slice(0,-1)
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}