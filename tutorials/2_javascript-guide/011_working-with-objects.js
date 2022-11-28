const obj = {
  property1: "value 1",
  2: "value 2",
  "property n": 3,
};

const myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
};

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");

const myCar = new Car("Eagle", "Talon TSi", 1993, rand);

// console.log(myCar)

const Animal = {
  type: "Invertebrates",
  displayType() {
    console.log(this.type);
  },
};

const animal1 = Object.create(Animal);
const fish = Object.create(Animal);
fish.type = "Fishes";
// fish.displayType();

const myObj = {};
const str = "myString";
myObj[str] = "This key is in variable str";

function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

// showProps(Animal, 'Animal')
Car.prototype.color = "red";
Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};
// myCar.displayCar()

const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};

const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Enginer Inter",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

// const myObj2 = {
//     a: 7,
//     get b() {
//         return this.a + 1;
//     },
//     /**
//      *
//      @param {number} x
//      */
//     set c(x) {
//         this.a = x / 2;
//     },
// };

const myObj2 = { a: 0 };
Object.defineProperties(myObj2, {
  b: {
    get() {
      return this.a + 1;
    },
  },

  c: {
    set(x) {
      this.a = x / 2;
    },
  },
});

myObj2.c = 100;

