// for statement https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement

// for (let step = 0; step < 5; step++) {
//     console.log('Walking...')
// };

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// };

// do...while statement https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement

// let i = 0;
// do {
//     i += 1;
//     console.log(i);
// } while(i < 5);


// while statement

// let n = 0;
// let x = 0;
// while(n < 3) {
//     n++;
//     x += n;
//     console.log(x)
// };

// labeled statement

// let x = 0;
// let z = 0;

// labelCancelLoops: while (true) {
//     console.log('Outer loops: ', x)
//     x += 1;
//     z = 1;

//     while (true) {
//         console.log('Inner loops: ', z)
//         z += 1;

//         if (z === 10 && x === 10) {
//             break labelCancelLoops;
//         } else if (z === 10) {
//             break;
//         }
//     };
// }

// continue statement

// let i = 0; 
// let n = 0;

// while (i < 5) {
//     i ++;

//     if (i === 3) {
//         continue
//     };

//     n += i;

//     console.log(n);
// }

// let i = 0;
// let j = 10;

// checkiandj: while (i < 4) {
//     console.log(i);
//     i += 1;

//     checkj: while (j > 4) {
//         console.log(j);
//         j -= 1;

//         if ((j % 2) === 0) {
//             continue checkj;
//         }

//         console.log(j, ' is odd')
//     }
//     console.log('i = ', i);
//     console.log('j = ', j);
// }

// for...in statement

// for (variable in object) 
//     statement

// function dumpProps(obj, objName) {
//     let result = '';

//     for (const i in obj) {
//         result += `${objName}.${i} = ${obj[i]} \n`;
//     }

//     return result;
// }

// car = {
//     make: 'Ford',
//     model: 'Mustang'
// }

// console.log(dumpProps(car, 'car'));

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// for (const i in obj) {
//     console.log(i, ': ', obj[i]);
// }

//  for in -> key of obj
//  for of -> values of array

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
}
