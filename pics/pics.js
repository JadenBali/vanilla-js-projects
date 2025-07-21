console.log(document)

const display = document.getElementById(`display`);

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = ``
}

function calculate(){
    try{
        display.value = eval(display.value);
        setTimeout(clearDisplay,2000)
    }
    catch(error){
        display.value = `Error`;
        setTimeout(clearDisplay, 3000);
    }
    
}
document.title = `My calculator`;