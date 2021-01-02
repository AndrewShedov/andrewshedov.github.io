


class User {

  constructor(name1) {
    this.name = name1;        
  }

  sayHi() {
    console.log(this.name);
  }

}

// Использование:
let user = new User("Иван1");
user.sayHi();

console.log(user);





function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Создаём функцию с предустановленным ведущим аргументом
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

console.log (list2)
console.log (list3)



let user2 = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};
user2.sayHi();
setTimeout(user2.sayHi, 1);



let user3 = {
  firstName: "Алег"
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

// привязка this к user
let funcUser = func.bind(user3);

funcUser("Привет");




let user4 = {
  firstName: "Вася",
  say(phrase1,phrase2) {
    console.log(`${phrase1},${phrase2} ${this.firstName}!`);
  }
};

let say = user4.say.bind(user4);

say("Привет","Очаровательный"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
say("Пока","");


function mul(a, b, c) {
  return a * b + c;
}

let double = mul.bind(null,2,3);

console.log( double(3,4) ); // = mul(2, 3) = 6
console.log( double(4,2) ); // = mul(2, 4) = 8
console.log( double(5,3) ); // = mul(2, 5) = 10


let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"

console.log(map); // 3

function hash() {
  console.log( [].join.call(arguments) ); // 1,2
}

hash(1, 2);

function sum(a, b) {
  return  console.log(a + b);
}

function withdraw(account, amount) {
  account.total = amount;
}

let her = {
total: "5"
}

let her2 = 55

withdraw(her, her2)

console.log(her.total);

sum(5,6)


const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach((element) => {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)


var sports = ['футбол', 'бейсбол'];
var total = sports.push([{dsfgs:"fdgds"}],[her]);

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total);  // 4

/*
function sort(){}


for (let value of Object.values(blog)) {
  console.log(value); // John, затем 30
}
*/


const blog = [{"title":"Afghanistan","flag":"https://restcountries.eu/data/afg.svg"},{"title":"Multicolored animated instagram and facebook icons","Theme":"https://restcountries.eu/data/afg.svg"}];

console.log(blog[0['title']]);

var obj = {key1: 200, key2: 300, key2: 400};
console.log(obj.key1); //выведет 200

var obj = {'Коля': 200, 'Вася': 300, 'Петя': 400};
console.log(obj['Вася']); //выведет 300