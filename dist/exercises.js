"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    fileName;
    constructor(fileName) {
        this.fileName = fileName;
    }
    writingFile(massage) {
        console.log(massage);
    }
}
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName}  ${this.lastName}`;
    }
}
class Employee extends Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    salary(hours) {
        return hours * 34.32;
    }
}
class EmployeeImplement {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
function echo(value) {
    return value;
}
echo(new Employee('hila', 'sher')); //emloyee extends from person, therefore it's possible
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        // keyOf return an union of the property of T 
        // if T will be a product it's return union like this: 'name' | 'price'
        return this._objects.find(obj => obj[property] === value);
        //the compiler dond know that T have an property so we write keyof
    }
}
let store = new Store(); //<Product> tells the compiler that this is a Product.
store.add({ name: 'ball', price: 25 });
store.find('name', '56');
store.find('price', 25);
//store.find('notExictingProp', 5) //give an Error cause this isn't a property of product.
function echo2(value) {
    return value;
}
function printName(obj) {
    return obj.name;
}
class Entity {
    id;
    constructor(id) {
        this.id = id;
    }
}
//# sourceMappingURL=exercises.js.map