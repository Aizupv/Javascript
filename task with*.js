// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }

// Вывести в консоль результат работы функции с возрастами 17, 18, 61
let age = 17;
let age_2 = 18;
let age_3= 61; 
let ChkAge = function(age){
age=Number(age)
  if (typeof age == 'number'){

   if (age < age_2){
 console.log( "You don’t have access cause your age is" ,"<",age,">" , "It’s less then", age_2)
 } else if(age >= age_2 && age<age_3){
console.log("“Welcome!”")
 } else if (age > age_3) {
console.log("“Keep calm and look Culture channel”")  
 } else {
 console.log("“Technical work”")}
  } else
  {console.log ("ERROR")}
}

// ChkAge(10)
// ChkAge(18)
// ChkAge(61)
let agePromt = prompt("enter dage")
ChkAge(agePromt)
// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


  