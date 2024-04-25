const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const input = document.querySelector("#input");
const multiple = document.querySelector("#multiple");
const cavab = document.querySelector("#result");
const minus = document.querySelector("#minus");
const vurma = document.querySelector("#vurma");
const bolme = document.querySelector("#bolme");
const netice = document.querySelector("#netice");
let basket = null;
let result = null;
one.addEventListener("click", () => {
  input.value = "1";
  basket = 1;
});
two.addEventListener("click", () => {
  input.value = "2";
  basket = 2;
});
three.addEventListener("click", () => {
  input.value = "3";
  basket = 3;
});
four.addEventListener("click", () => {
  input.value = "4";
  basket = 4;
});
five.addEventListener("click", () => {
  input.value = "4";
  basket = 5;
});
six.addEventListener("click", () => {
  input.value = "6";
  basket = 6;
});
seven.addEventListener("click", () => {
  input.value = "7";
  basket = 7;
});
eight.addEventListener("click", () => {
  input.value = "8";
  basket = 8;
});
nine.addEventListener("click", () => {
  input.value = "9";
  basket = 9;
});
zero.addEventListener("click", () => {
  input.value = "0";
  basket = 0;
});
multiple.addEventListener("click", () => {
  input.value = "+";
  result += basket;
  cavab.value = result;
});
minus.addEventListener("click", () => {
  input.value = "-";
  result -= basket;
  cavab.value = result;
});

vurma.addEventListener("click", () => {
  input.value = "*";
  result *= basket;
  cavab.value = result;
});
bolme.addEventListener("click", () => {
  input.value = "/";
  result /= basket;
  cavab.value = result;
});
netice.addEventListener("click", () => {
  input.value = "";
  result = basket;
  cavab.value = result;
});
