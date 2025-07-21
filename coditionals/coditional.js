let max = 100;
let min = 1;
let ans = Math.floor(Math.random()*(max - min +1) + min);
let attempts = 0;
let isRunning = true;
let guess;

while(isRunning){
    guess = window.prompt(`Input a number between ${min} and ${max}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Input a valid number")
    }
    else if(guess < min || guess > max){
        window.alert(`Input a number between ${min} and ${max}`)
    }
    else{
        attempts++;
        if(guess > ans){
            window.alert("Too high! Try again.");
        }
        else if(guess < ans){
            window.alert("Too low! Try again.");
        }
        else{
            window.alert(`Congratulations! You guessed the number ${ans} in ${attempts} attempts.`);
            isRunning = false;
        }
    }
    
    
}