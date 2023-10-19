// Simple Project Practice of Addition , substraction, Multipication, Division & Modulas

let firstValue = prompt("Enter Your First Number :");
let secondValue = prompt("Enter Your Second Number :");

firstValue = parseInt(firstValue);
secondValue = parseInt(secondValue);

let add = firstValue + secondValue;
let sub = firstValue - secondValue;
let mul = firstValue * secondValue;
let div = firstValue / secondValue;
let mod = firstValue % secondValue;

document.write("Your First Number is : " + firstValue + "<br>");
document.write("Your Second Number is : " + secondValue + "<br>" + "<br>");

document.write("Addition Result : " + add + "<br>");
document.write("Substraction Result : " + sub + "<br>");
document.write("Multipication Result : " + mul + "<br>");
document.write("Division Result : " + div + "<br>");
document.write("Modulas Result : " + mod + "<br>");

console.log("Your addition result is : " + add);
console.log("Your substraction result is : " + sub);
console.log("Your multipication result is : " + mul);
console.log("Your division result is : " + div);
console.log("Your modulas result is : " + mod);
