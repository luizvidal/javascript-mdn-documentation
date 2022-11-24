// hello world https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#hello_world

/*function greetMe(yourName) {
    console.log(`Hello ${yourName}!`);
};

greetMe('World')*/

// Variable scope https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope

/*console.log(x === undefined);
var x = 3;

(function() {
    console.log(x);
    var x = 'local value';
})();*/

// const myList = [
//     "home",
//     "school","university "
//     + "hospital",
// ];

// console.log(myList);

// object literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals

/*
const sales = 'Toyota';

function carTypes(name) {
    return (name === 'honda') ? name : `Sorry, we don't sell ${name}.`;
};

const car = {
    myCar: 'Saturn',
    getCar: carTypes('honda'),
    special: sales,
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

const car = {
    manyCars: {
        a: 'Saab',
        b: 'Jeep',
    },
    7: 'Mazda'
};

console.log(car.manyCars.b);
console.log(car[7]);

const unusualPropertyNames = {
    '': 'An empty string',
    '!': 'Bang!'
};

console.log(unusualPropertyNames['']);
console.log(unusualPropertyNames['!']);
*/

// string literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals

/*
console.log("Joyo's cat".length)

const name = 'Lev', time = 'today';
console.log(`${name}, how are you ${time}?`);

const formatArg = (arg) => {
    if (Array.isArray(arg)) {
        return arg.map(item => `- ${item}`).join("\n");
    };

    if (arg.toString === Object.prototype.toString) {
        return JSON.stringify(arg);
    };

    return arg;
};

const print = (segments, ...args) => {
    let message = segments[0];

    segments.slice(1).forEach((segment, index) => {
        message += formatArg(args[index] + segment);
    });

}

const todos = [
    "Learn JavaScript",
    "Learn Web APIs",
    "Set up my website",
    "Profit!",
]

const progress = {
    javascript: 20,
    html: 50,
    css: 10
};

print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress)

console.log("I need to do: \n%o\nMy current progress is: %o", todos, progress);
*/

