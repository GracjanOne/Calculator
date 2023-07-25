/* BUGI

*/
/* TODO 

-Dodanie oprawy graficznej
-Rozwinięcie liczb po przecinku
-Zaokrąglenie liczby za pomocą round
*/
const buttons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const resultPlace = document.querySelector("#result");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
const submit = document.querySelector("#submit");
const allButtons = document.querySelectorAll(".buttons");
const wholeOperation = document.querySelector("#whole-operation");
const percent = document.querySelector("#percent");
const history = document.querySelector("#operations-history");
const clearHistory = document.querySelector("#clear-history");
let isSubmited = false;
let percentOperation = 0;
let isPercentClicked = false;
let result;
let operation = [];

let targetedOperation = "";
let operator = "";
let i = 0;
let operationKey;
resultPlace.innerHTML = 0;

buttons.forEach((firstChose) => {
  firstChose.addEventListener("click", function () {
    if(isSubmited === true){
      resultPlace.innerHTML = 0;
      operation = [];
      isSubmited = false;
    }
    operation.push(firstChose.innerHTML);
    i = 0;
    let showedNumber = firstChose.innerHTML;
    resultPlace.innerHTML = showedNumber;
  });
});

percent.addEventListener("click", function () {
  isPercentClicked = true;
  percentOperation = operation[0] / 100;
});
operators.forEach((operatorChose) => {
  operatorChose.addEventListener("click", function () {
    i++;

    if (i <= 1) {
      operation.push(operatorChose.innerHTML);
      operationKey = operatorChose.innerHTML;
    }
  });
});
allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    wholeOperation.innerHTML = operation.join("");
  });
});
clear.addEventListener("click", function () {
  operation = [""];
  wholeOperation.innerHTML = "";
  resultPlace.innerHTML = 0;
});
back.addEventListener("click", function () {
  operation = operation.slice(0, -1);
  wholeOperation.innerHTML = wholeOperation.innerHTML.slice(0, -1);
  i = 0;
});
submit.addEventListener("click", function () {
  isSubmited = true;
  result = eval(operation.join(""));
  if (result === Infinity) {
    resultPlace.innerHTML = "Nie można dzielić przez 0";
  }
  if (isPercentClicked === true) {
    resultPlace.innerHTML = percentOperation;
  } else {
    resultPlace.innerHTML = result;
  }
  targetedOperation = operation.join("");

  history.innerHTML += targetedOperation + "=" + result;
  history.innerHTML += "<br>";
});
clearHistory.addEventListener("click", function () {
  history.innerHTML = "Historia" + "<br>";
});
