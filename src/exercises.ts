
class Logger {
    constructor(public fileName: string){}

    writingFile(massage: string){
        console.log(massage)
    }
}
class Person {
    constructor(public firstName: string, public lastName: string){}

    get fullName():string {
        return `${this.firstName}  ${this.lastName}`
   }
}

class Employee extends Person {
    constructor(public firstName: string, public lastName: string){
        super(firstName, lastName)
    }
    salary(hours: number){
        return hours * 34.32;
    }
}

interface Addrees {
        street: string;
        city: string;
        zipCode: number;
}

interface EmployeeInterface {
    name: string;
    salary: number;
    address?: Addrees;
}

class EmployeeImplement implements EmployeeInterface {
  constructor(public name: string, public salary: number ){}
}


function echo<T extends Person> (value: T): T{ //only accepts value of Person class
    return value;
}

echo(new Employee('hila', 'sher'))//emloyee extends from person, therefore it's possible


interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];
    add(obj: T): void {
        this._objects.push(obj);
    }
    find(property: keyof T, value: unknown):T | undefined { 
        // keyOf return an union of the property of T 
        // if T will be a product it's return union like this: 'name' | 'price'

        return this._objects.find(obj => obj[property] === value)
        //the compiler dond know that T have an property so we write keyof
    }
}

let store = new Store<Product>();//<Product> tells the compiler that this is a Product.
store.add({name: 'ball', price: 25})
store.find('name', '56');
store.find('price', 25);
//store.find('notExictingProp', 5) //give an Error cause this isn't a property of product.

function echo2<T> (value: T):T {
    return value;
}

function printName<T extends { name: string }> (obj: T){
    return obj.name
}

class Entity <T>{
    constructor(private id: T){}
}

//decorators
function sauce(sauce: string){
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce;
    };   
}


@sauce('pesto')
class piza{
}