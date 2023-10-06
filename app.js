// q1
function date(){
    new date()
}
date()
//q2
function greet(){
    var firstname = prompt("enter first name");
    var lastname = prompt("enter last name");
    var fullname = firstname + lastname ;
    console.log(fullname);
}
greet();
//q3
function addtwonum(){
    var num1 = +prompt("enter first num");
    var num2 = +prompt("enter last num");
    var userinput = num1+num2
    console.log(userinput);
}
addtwonum()
//q4
function cal(){
var numb1 = +prompt("enter first num");
var oper = +prompt("enter operater");
var numb2 = +prompt("enter last num");
if(oper==="+"){
    numb1+numb2
}
else if(oper==="-"){
    numb1-numb2
}
if(oper==="*"){
    numb1*numb2
}
if(oper==="/"){
    numb1/numb2
}
}
var result=cal(numb1,oper,numb2);
console.log(result);
//q6
function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
const result = fact(5);
console.log(result);
//q7
function Coun(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + '<br>');
  }
}

Coun(1, 10);
//q8
// q9
function calRecArea(width, height) {
  return width * height;
}

function calRecAreaWithVariables() {
  const width = arguments[0];
  const height = arguments[1];
  return width * height;
}

const area1 = calRecArea(5, 10); 
console.log('Area 1:', area1);

const area2 = calRecAreaWithVariables(3, 7); 
console.log('Area 2:', area2);
// q10
//q11
// q 12
 function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const inputString = 'Web Development Tutorial';
const longestWordResult = findLongestWord(inputString);
console.log('Longest Word:', longestWordResult);
// q 13
 function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

const sampleString = 'JSResourceS.com';
const letterToCount = 'o';

const occurrenceCount = countOccurrences(sampleString, letterToCount);
console.log(`Number of occurrences of '${letterToCount}' in '${sampleString}': ${occurrenceCount}`);