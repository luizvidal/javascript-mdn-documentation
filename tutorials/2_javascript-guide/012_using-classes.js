// class MyClass {
//     constructor() {}

//     myField = 'foo';

//     myMethod() {
//         console.log(this.myField + 'bar')
//     }

//     static myStaticField = 'bar';

//     static myStaticMethod() {

//     }

//     // static {}

//     #myPrivateField = 'bar'
// }

// const myInstance = new MyClass();
// console.log(myInstance);
// myInstance.myMethod()

// const MyClass = class MyClassLongerName {

// }

// class Color {
//     constructor(r, g, b) {
//         this.values = [r, g, b];
//     }
// }

// class MyClass {
//     constructor() {
//         this.myField = 'foo';
//         return {}
//     }
// }

// console.log(new MyClass().myField)//undefined

// class Color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//   }

//   getRed() {
//     return this.values[0];
//   }

//   setRed(value) {
//     this.values[0] = value;
//   }
// }

// const red = new Color(255, 0, 0);
// red.setRed(0);
// console.log(red.getRed());

// class Color {
//     #values;

//     constructor(r, g, b) {
//         this.#values = [r, g, b];
//     }

//     getRed() {
//         return this.#values[0];
//     }

//     setRed(value) {
//         this.#values[0] = value;
//     }
// }

// const red = new Color(255, 0, 0);
// console.log(red)

// class Color {
//     #values;

//     constructor(r, g, b) {
//         this.#values = [r, g, b]
//     }

//     getRed() {
//         return this.#values[0];
//     }

//     setRed(value) {
//         if (value < 0 || value > 255) {
//             throw new RangeError('Invalid R value')
//         }
//         this.#values[0] = value;
//     }
// }

// const red = new Color(255, 0, 0);

// class Color {
//     constructor(r, g, b) {
//         this.values = [r, g, b];
//     }

//     get red() {
//         return this.values[0];
//     }

//     set red(value) {
//         this.values[0] = value
//     }
// }

// const red = new Color(255, 0, 0);
// red.red = 0;
// console.log(red.red)

// class MyClass {
//     luckyNumber = Math.floor((1+ Math.random()) * 5);
// }

// console.log(new MyClass().luckyNumber)

// class MyClass {
//     constructor() {
//         this.luckyNumber = Math.random()
//     }
// }

// class Color {
//   static isValid(r, g, b) {
//     return  (r >= 0) && (r <= 255) && 
//             (g >= 0) && (g <= 255) && 
//             (b >= 0) && (b <= 255);
//   }
// }
// const color = new Color(255,234,234);

// class MyClass {
//     static {
//         MyClass.myStaticProperty = 'foo';

//     }
    
// }

// console.log(MyClass.myStaticProperty)

// class Color {
//     #values;
    
//     constructor(r, g, b, a = 1) {
//         this.#values = [r, g, b, a];
//     }

//     get alpha() {
//         return this.#values[3];
//     }

//     set alpha(value) {
//         if (value < 0 || value > 1) {
//             throw new RangeError('Alpha value must be between 0 and 1')
//         }
//     }

// }

class Color {
    #values
    constructor(r, g, b) {
        this.#values = [r, g, b];
    }

    get red() {
        return this.#values[0];
    }

    static isValid(r, g, b) {
        return  (r >= 0) && (r <= 255) &&
                (g >= 0) && (g <= 255) &&
                (b >= 0) && (b <= 255) 
    }

    toString() {
        return this.#values.join(", ")
    }
}

class ColorWithAlpha extends Color {
    #alpha
    
    constructor(r, g, b, a) {
        super(r, g, b);
        this.#alpha = a;
    }

    get alpha() {
        return this.#alpha;
    }

    set alpha(value) {
        if (value < 0 || value > 1) {
            throw new RangeError('Alpha value must be between 0 and 1');
        }

        this.#alpha = value;
    }

    static isValid(r, g, b, a) {
        return super.isValid(r, g, b) && (a >= 0) && (a <= 1);
    }

    toString() {
        return `${super.toString()}, ${this.#alpha}`
    }

}

// const color = new ColorWithAlpha(255, 0, 0, 0.5);
// console.log(color.red)
// console.log(color.toString())

// const colorWithAlpha = new ColorWithAlpha(255, 0, 0, 0.5);
// const color = new Color(25,5,6);

// console.log(colorWithAlpha instanceof Color);//true
// console.log(colorWithAlpha instanceof ColorWithAlpha);//true

// console.log(color instanceof Color)// ture
// console.log(color instanceof ColorWithAlpha)//false
