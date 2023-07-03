"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let diskriminant = Math.pow(b,2)-4*a*c;
  
  
  if (diskriminant < 0) {
   return arr;

} else if (diskriminant === 0) {
  let root = -b / (2 * a);
  arr.push(root);

} else if (diskriminant > 0) {
  
  let rootFirst = (-b + Math.sqrt(diskriminant) )/(2*a);
  let rootSecond = (-b - Math.sqrt(diskriminant) )/(2*a);
  arr.push(rootFirst, rootSecond);
} 
return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  percent = percent / 100; 
  let loanAmount = amount - contribution; 
  let monthlyInterest = percent / 12; 

  let monthlyPayment =
    loanAmount *
    (monthlyInterest +
      monthlyInterest / (Math.pow(1 + monthlyInterest, countMonths) - 1)); 
  
  let totalPayment = monthlyPayment * countMonths; 
  totalPayment = Math.round(totalPayment * 100) / 100; 

  return totalPayment;
}