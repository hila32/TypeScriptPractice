"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//how to declare an enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
//how to use enums
let userSize = Size.Medium;
//functions in typescript        //what will return
function calculateTax(income = 0) {
    if (income < 50_000)
        return income * 1.2;
    return income * 1.3;
}
let employee1 = {
    id: 1,
    name: 'h',
    sumSalary: (hours) => hours * 34.32
};
// employee.id = 2; //an error cause it's readonly property
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return console.log(parseInt(weight));
}
let UIwidVal = {
    drag: () => { },
    resize: () => { }
};
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('hola');
}
let users = [
    {
        name: 'hila',
        age: 22
    },
    {
        name: 'Itay',
        age: 24,
        occupation: 'Rabai'
    }
];
function getUser(num) {
    if (num !== 0)
        return { address: { street: 'Grinberg' } };
    else
        return null;
}
let user = getUser(1);
//class in TypeScript.
class Account {
    id;
    owner;
    _balance;
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    // nickname?: string;
    // constructor(id: number, owner: string, balance = 0){
    //     this.id = id;
    //     this.owner = owner;
    //     this._balance = balance;/*private property we won't see it in the
    //     account poroperty*/
    // }
    //in shorter form
    constructor(id, owner, _balance = 0, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
class SeatsAreaDinamicly {
}
let seats = new SeatsAreaDinamicly();
seats.A1 = 'hila';
seats.A2 = 'Ori';
// inheritance in TypeScript
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Student extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takingTest() {
        console.log('taking a test');
    }
}
//override a method
class Teacher extends Person {
    get fullName() {
        return 'proffesor ' + super.fullName;
    }
}
let t = new Teacher('hila', 'sher');
//abstract class & method
class Shape {
    color;
    constructor(color) {
        this.color = color;
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        console.log('render');
    }
    draw() {
        console.log('draw');
    }
}
class CircleInterface {
    color;
    constructor(color) {
        this.color = color;
    }
    render() {
        throw new Error("Method not implemented.");
    }
    draw() {
        throw new Error("Method not implemented.");
    }
}
class Account1 {
    _balance;
    _taxRate;
    constructor(_balance, _taxRate) {
        this._balance = _balance;
        this._taxRate = _taxRate;
    }
}
let a = new Account1(0, 5);
//Generic
class UnKnownType {
    constructor(unknownType) { }
}
let u = new UnKnownType('type');
let product = {
    name: 'ball',
    price: 25
};
`//product.name = 'dall' //Error cause its readonly property

//to more options: https://www.typescriptlang.org/docs/handbook/utility-types.html
`;
//decorator - Component delaration
function Component(constructor) {
    console.log('Component decorated call');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}
`@Component`;
class ProfileComponent {
}
function ComponentWithArgs(options) {
    return (constructor) => {
        console.log('Component decorated call');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options; //using the arg
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
function Pipe(constructor) {
    console.log('Pipe decorated call');
    constructor.prototype.pipe = true;
}
`@ComponentWithArgs({selector: '#my-profile'})`;
`@Pipe`; //@Pipe will be execute first and the results will be sent to @ComponentWithArgs
//like Math f( g(x) )
class ProfileComponentArga {
}
//Decoratoe Method in class
function Log(target, propertyType, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function (...args) {
        console.log('befor the Method ' + propertyType);
        originalFunction.call(this, ...args);
        console.log('after the Metod ' + propertyType);
    };
}
class PersonDecorator {
    sayHello(message) {
        console.log('my message: ' + message);
    }
}
__decorate([
    Log
], PersonDecorator.prototype, "sayHello", null);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        delete target[propertyName];
        const descriptor = {
            get() { return value; },
            set(newVal) {
                if (newVal.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class parameterDecorator {
    password;
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], parameterDecorator.prototype, "password", void 0);
let p = new parameterDecorator('5');
console.log(p.password);
//# sourceMappingURL=index.js.map