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
        value = eval(value);
        value = Number(value)
        if(isNaN(value)){
            value = 0;
        }
        if(!isFinite(value)){
            value = 0;
        }
        if(value % 2 !== 0){
            value.toFixed(2)
        }
        setTimeout(clearDisplay,2000)
    }
    catch(error){
        display.value = `Error`;
        setTimeout(clearDisplay, 3000);
    }
    let value = display.value
    
}
document.title = `My calculator`;
