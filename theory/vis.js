// число Number
let n = 123;
n = 12.345;

//BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//Строка
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// Булевый (логический) тип boolean
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
let isGreater = 4 > 1; // true 

//Значение «null»
let age1 = null;

// Значение «undefined» Оно означает, что «значение не было присвоено».
let age2;
console.log(age2); // выведет "undefined"

//Объекты 
let user = new Object(); // синтаксис "конструктор объекта"
let user1 = {};  // синтаксис "литерал объекта"

let user2 = {
    name: "John",
    age: 30,
    "likes birds": true
  };
  

  
  // доступ к свойству через переменную
  console.log( user2["likes birds"] ); // John (если ввели "name")