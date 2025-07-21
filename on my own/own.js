const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementbyId("myP");
let count = 0;

decreaseBtn.onclick = function(){
    count -= 1;
    countLabel.textContent = count;
};
increaseBtn.onclick = function(){
    count += 1;
    count = countLabel.textContent;
}
