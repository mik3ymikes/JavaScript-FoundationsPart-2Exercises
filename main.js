console.log("URL", document.URL);
console.log("title", document.title);

function greet(name) {
  console.log("greetings " + name);
}

greet("mike");

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 2));
console.log(multiply(2, 4));
console.log(multiply(2, 3));

let person = {
  name: "ben",
  age: "34",
  gender: "woman",
};

console.log(person);

let car = {
  make: "ford",
  model: "focus",
  year: 1998,
};

console.log(car);

function reverseString(word) {
  console.log(word.split("").reverse().join(""));
  console.log(word.split(""));
}

reverseString("mike");

function calculateArea(radius) {
  let area = Math.round(3.14 * Math.pow(radius, 2));
  return area;
}

let rad1 = calculateArea(65);
console.log(rad1);

console.log("getDate():", new Date().toDateString());
console.log("getSeconds():", new Date().getSeconds());
console.log("Minutes():", new Date().getMinutes());
console.log("gethours():", new Date().getHours());

let ran = Math.floor(Math.random() * 10) + 1;

console.log(ran);

function whaaa(arg) {
  console.log(`Hey we the monkeys ${arg}`);
}

whaaa("people");

let raz = {
  name: "john",
  age: 17,
  occupation: "Dr",
};

function afunc() {
  // console.log(raz);
  prompt("what is yoru name");
  prompt("what is yoru age");
  prompt("what is yoru job");
}

function objKEY(ranObject) {
  let blah = [];
  let nah = [];
  let combined = [];

  for (key in ranObject) {
    console.log(key);
    blah.push(key);
    nah.push(ranObject[key]);
  }
  blah.sort();

  return [[blah], [nah]];
}

let meh = objKEY(raz);

console.log(meh);

console.log(meh[0], meh[1]);

let arr2 = [2, 3, 4, [3, 4, 5]];
console.log(arr2);

function reversey(sentence) {
  let splity = sentence.split(" ");
  let reversey = splity.reverse();
  let shh = reversey.join(" ");
  return shh;

  console.log(sentence);
}

console.log(reversey("hey what is up"));
