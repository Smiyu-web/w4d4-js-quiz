/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 1: What's the output?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function greeting() {
  console.log(name);
  console.log(age);
  var name = "Hana";
  let age = 21;
}

greeting();

// A: Hana and undefined
// B: Hana and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Ans: D
// Short explanation:
// Variables are after console.log.
// It has to be before console.log if you want to print out.


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 2: What's the output?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

+true;
!"Lydia";

// A: 1 and false
// B: false and NaN
// C: false and false

// Ans: A
// Short explanation:
// 'true' equals -1, so it becomes 1.
// '!' means NOT. 'Lydia' is true so it would be false with '!'.

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 3: What's the output?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function sum(a, b) {
  return a + b;
}

sum(1, "2");

// A: NaN
// B: TypeError
// C: "12"
// D: 3

// Ans: C
// Short explanation:
// "2" is string and 1 is number. String and number can't be added.
// it only can be out them together.

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 4: What's the output?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// Ans: C
// Short explanation:
// 'number++' increses the number but it would't increase right the away. It returns the previous value
// '++number' increses the number right the away.



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 5: What's the output?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

!!null;
!!"";
!!1;

// A: false true false
// B: false false true
// C: false true true
// D: true true false

// Ans: B
// Short explanation:
// ! will change to opposit boolean.
// 'null' and '""' are falsy so when there are two !, it would be false.
// '1' is truely, so it would be true.


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 6: What's the output?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

console.log(3 + 4 + "5");

// A: "345"
// B: "75"
// C: 12
// D: "12"

// Ans:B
// Short explanation:
// 3 and 4 are number and 5 is string. String wouldn't be added to number.

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 7: What's the value of num?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

const num = parseInt("7*6", 10);

// A: 42
// B: "42"
// C: 7
// D: NaN

// Ans:C
// Short explanation:
// "7*6" is string. When it's string, it would only take first of number.

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 8: 
Write a function indexOfIgnoreCase taking two strings 
and determining the first occurrence of the second 
string in the first string. The function should be 
case insensitive.

Example: indexOfIgnoreCase('bit','it') and 
indexOfIgnoreCase('bit','IT') should return 1.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

//Hint
function indexOfIgnoreCase(s1, s2) {
  // Change s1 and s2
  // first to lowercase.
  let x = s1.toLowerCase();
  let y = s2.toLowerCase();
  // Then use the
  // indexOf method.
  return x.indexOf(y);
}

console.log(indexOfIgnoreCase('bit', 'IT'));

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 9: 
Write a function firstChar, which returns the 
first character that is not a space when a string 
is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

//Hint:
function firstChar(text) {
  // Trim first.
  let x = text.trim();
  // Then use the
  // charAt method.
  return x.charAt(0);
}

console.log(firstChar(' Rosa Parks '));

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 10: 
Write a function normalize, that replaces '-' 
with '/' in a date string.

Example: normalize('20-05-2017') should return 
'20/05/2017'.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function replaceText(date) {
  let finalDate = date.split('-').join('/');
  return finalDate;
}

console.log(replaceText('20-05-2017'));