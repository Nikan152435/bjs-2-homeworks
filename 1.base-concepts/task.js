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
// Вопросы Почему мы преобразование процентной ставки в десятичную пишем просто в строчке простой?
//percent - процент за пользование кредитом, 
//contribution - первоначальный взнос, 
//amount -  сумма кредита,
//countMonths - длительность кредита
//loanAmount - остаток по кредиту - тело кредита
//monthlyInteres - Месячная процентная ставка
//monthlyPayment - Месячный платеж


  percent = percent / 100; // Преобразование процентной ставки в десятичную форму
  let loanAmount = amount - contribution; // Тело кредита
  let monthlyInterest = percent / 12; // Месячная процентная ставка

  let monthlyPayment =
    loanAmount *
    (monthlyInterest +
      monthlyInterest / (Math.pow(1 + monthlyInterest, countMonths) - 1));// Я вот тут не 
//поняла как мы посчитали Месячный платеж=== 
//Тело кредита *(Месячная процент ставка+ Месячная процентная ставка/(Math.pow(1 + //monthlyInterest, countMonths) - 1)). Итого я не поняла вот эту запись
//Math.pow(1 + monthlyInterest, countMonths) - 1)) ----  как это разобрать?
  
  let totalPayment = monthlyPayment * countMonths; // Общая сумма выплат
  totalPayment = Math.round(totalPayment * 100) / 100; // Округление до двух значений после запятой

  return totalPayment;
}