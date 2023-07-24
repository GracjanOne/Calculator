const buttons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
let operation = [""];
let operator = "";
let i = 0;
buttons.forEach((firstChose) => {
  firstChose.addEventListener("click", function () {
    operation += firstChose.innerHTML;
    i = 0;
    alert(operation);
    
  });
});
operators.forEach((operatorChose) => {
  operatorChose.addEventListener("click", function () {
    i++;
    if (i <= 1) {
      operation += operatorChose.innerHTML;
    }
  });
});
clear.addEventListener("click", function(){
    operation = [""]
});
back.addEventListener("click", function(){
    operation = operation.slice(0,-1);
})
