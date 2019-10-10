function deli() {
  console.log('-'.repeat(80));
}
let str1 = '+7(903)-123-45-67';
// keep those digit character using \d character class
let regexp1 = /\d/g;
let match1 = str1.match(regexp1);
console.log('match1:' + match1.join(''));
// or remove those non-digit character with \D
let regexp2 = /\D/g;
console.log('match2:' + str1.replace(regexp2,''));

let regexp3 = /\d/g;
let match2 = str1.match(regexp3);
console.log(match2);

// with s flag '.' means litterally any character , without s flag except for newline
let str2 = 'A\nB'
console.log(str2.match(/A.B/));
console.log(str2.match(/A.B/s));

// 匹配汉字
let str3 = '汉1283  ,字';
console.log(str3.match(/\p{sc=Han}/gu));

// multiline mode
let str4 = `the line 1
line 2
line 3`;
console.log(str4.match(/\d$/gm));
// when we use \d\n instead of multiline mode with $
// now 2 matches instead of 3 , beacause of the line 3 with no newline
// besides, every match now contains '\n'
{
  let str = str4;
  console.log(str.match(/\d\n/g));
}

// quantifiers 
// shorthand +:{1,} ?:{0,1} *:{0,}
{
  deli();
  let str = '44 sduaihf 12333 sclhdjkf 11';
  console.log(str.match(/\d{3,6}/));
}
