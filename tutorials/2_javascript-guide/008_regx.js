// const re = /ab+c/
// const re = new RegExp('ab+c');
// console.log(re)
// const string = 'asdf';
// console.log(string.replace('as', 'asdf'));//asdfdf
const re = /\w+\s/g;
const str = 'fee fi fo fum';
const myArray = str.match(re);
console.log(myArray);
