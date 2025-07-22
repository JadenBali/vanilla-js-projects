const selectorObject = document.getElementById(`mySelectorObject`)
const selectorObject2 = document.getElementById(`mySelectorObject2`);
const selectorOperator = document.getElementById(`selectorOperator`);
const selectorItems = document.getElementById(`selectorItems`);

selectorObject.style.height = `100px`
selectorObject.style.width = `100px`
selectorObject.style.backgroundColor = `yellow`

selectorItems.style.display = `flex`
selectorItems.style.gap = `10px`



selectorObject2.style.height = `100px`
selectorObject2.style.width = `100px`
selectorObject2.style.backgroundColor = `blue`



selectorOperator.style.padding = `10px 20px`
selectorOperator.style.backgroundColor = `hsl(120, 100%, 50%)`
selectorOperator.style.border = `none`
selectorOperator.style.borderRadius = `10px`

selectorOperator.addEventListener(`click`, event =>{
    selectorObject.classList.add(`selector`);
})

document.addEventListener(`keydown`, event =>{
        if(event.key == `ArrowRight`){
        selectorObject.classList.remove(`selector`);
        selectorObject2.classList.add(`selector`);
    }
        if(event.key == `ArrowLeft`){
        selectorObject2.classList.remove(`selector`)
        selectorObject.classList.add(`selector`);
        }
        
    }
    
)
// this is my change