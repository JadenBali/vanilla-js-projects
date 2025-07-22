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
        if(isNaN(display.value)){
            display.value = 0;
        }
        if(!isFinite(display.value)){
            display.value = 0;
        }
        setTimeout(clearDisplay,2000)
    }
    catch(error){
        display.value = `Error`;
        setTimeout(clearDisplay, 3000);
    }
    
}
document.title = `My calculator`;