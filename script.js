const buttons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const resultPlace = document.querySelector("#result");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
const submit = document.querySelector("#submit");
const allButtons = document.querySelectorAll(".buttons");
const wholeOperation = document.querySelector("#whole-operation");
const comma = document.querySelector("#comma");
let result;
let operation = [];
let operator = "";
let i = 0;
let operationKey;
resultPlace.innerHTML = 0;
buttons.forEach((firstChose) => {
  firstChose.addEventListener("click", function () {
    operation.push(firstChose.innerHTML);
    i = 0;
    let showedNumber = firstChose.innerHTML;
    resultPlace.innerHTML = showedNumber;
  });
});

operators.forEach((operatorChose) => {
  operatorChose.addEventListener("click", function () {
    i++;

    if (i <= 1) {
      operation.push(operatorChose.innerHTML);
      operationKey = operatorChose.innerHTML;
    }
    console.log(operation[1]);
  });
});
allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    wholeOperation.innerHTML = operation.join("");
  });
});
clear.addEventListener("click", function () {
  operation = [""];
  resultPlace.innerHTML = 0;
});
back.addEventListener("click", function () {
  operation = operation.slice(0, -1);
});
submit.addEventListener("click", function () {
  result = eval(operation.join(""));
  if (result === Infinity) {
    resultPlace.innerHTML = "Nie można dzielić przez 0";
  } else {
    resultPlace.innerHTML = result;
  }
});
