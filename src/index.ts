//how to declare an enum
const enum Size {small = 1, Medium, Large};
//how to use enums
let userSize = Size.Medium ;

//functions in typescript        //what will return
function calculateTax( income = 0): number{
    if(income < 50_000)
        return income * 1.2;
    return income * 1.3;
}

//objects on typescript
type Employee = {
    readonly id: number, //how to declare a readonly property
    name: string,
    phone?: number //an option
    sumSalary: (hours: number) => number //declare a method
}

let employee1: Employee = {
    id: 1,
    name: 'h',
    sumSalary: (hours: number) => hours * 34.32
}

// employee.id = 2; //an error cause it's readonly property

function kgToLbs(weight: number | string){
    if( typeof weight === 'number')
        return weight * 2.2
    else 
        return console.log(parseInt(weight))
}

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIwidget = Draggable & Resizable;

let UIwidVal: UIwidget = {
    drag: () => {},
    resize: () => {}
}

function greet( name: string | null){ //oniun opertator
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('hola');
}

type Users = {name: string, age: number, occupation?: string}

let users: Users[] = [
    {
        name: 'hila',
        age: 22
    },
    {
        name: 'Itay',
        age: 24,
        occupation: 'Rabai'
    }
]

type User = {
    name?: string,
    address?: {street: string},
}

function getUser(num: number):User | null {
    if(num !== 0)
        return {address: {street: 'Grinberg'}}
    else
        return null
} 

let user = getUser(1);

//class in TypeScript.
class Account{
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
    constructor(
        public readonly id:number,
        public owner: string,
        private _balance: number = 0,
        nickname?: string
    ){}

    deposit(amount: number){
        if(amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }

    get balance(){//to read the value 
        return this._balance
    }
}

class SeatsAreaDinamicly {
    //index signature property
    [seatName: string]: string;
}

let seats = new SeatsAreaDinamicly()
seats.A1 = 'hila';
seats.A2 = 'Ori';

// inheritance in TypeScript

class Person {
    constructor(public firstName: string, public lastName: string){}

    get fullName():string {
        return this.firstName + ' ' + this.lastName
    }

}

class Student extends  Person {
    constructor(public studentId: number, firstName: string, lastName: string){
        super(firstName, lastName);
    }

    takingTest():void {
        console.log('taking a test')
    }
}

//override a method
class Teacher extends Person {
    override get fullName():string {
        return 'proffesor ' + super.fullName
    }
}

let t = new Teacher('hila', 'sher')

//abstract class & method
abstract class Shape{
    constructor(public color: string){
        this.color = color;
    }
    abstract render(): void;
    abstract draw(): void;

}

class Circle extends Shape{
    constructor(color: string){
        super(color);
    }
    override render(){
        console.log('render')
    }
    override draw(){
        console.log('draw');
    }
}

//interfaces classes
interface ShapeInterface{
    color: string;
    render(): void;
    draw(): void;
}

class CircleInterface implements ShapeInterface{
    constructor(public color:string){}

    render(): void {
        throw new Error("Method not implemented.");
    }
    draw(): void {
        throw new Error("Method not implemented.");
    }
}

class Account1 {
    constructor(private _balance: number, protected _taxRate: number){}
}

let a = new Account1(0, 5)

//Generic
class UnKnownType<T> {
    constructor(unknownType: T){}
}

let u = new UnKnownType<string> ('type')

//type Mapping
//if we want to maping the property of class to somthing else

interface Product {
    name: string;
    price: number;
}

type readOnly<T> = { //to do all the propertys of object readonly
    readonly [K in keyof T]: T[K]
}

type optional<T> = {
    [K in keyof T]? : T[K]
}

let product: readOnly<Product> = {
    name: 'ball',
    price: 25
};

`//product.name = 'dall' //Error cause its readonly property

//to more options: https://www.typescriptlang.org/docs/handbook/utility-types.html
`
//decorator - Component delaration
function Component(constructor: Function){
    console.log('Component decorated call');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    }
}

`@Component`;
class ProfileComponent {
}


//decorator factory - Component declaration with arguments

type ComponentOptions = {
    selector: string;
}

function ComponentWithArgs(options: ComponentOptions){ //get the argument
    return (constructor: Function) => {
        console.log('Component decorated call');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options; //using the arg
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        }
    }
}

function Pipe(constructor: Function){
    console.log('Pipe decorated call');
    constructor.prototype.pipe = true;
}


`@ComponentWithArgs({selector: '#my-profile'})`;
`@Pipe`; //@Pipe will be execute first and the results will be sent to @ComponentWithArgs
//like Math f( g(x) )

class ProfileComponentArga{
}

//Decoratoe Method in class
function Log(target: any, propertyType: string, descriptor: PropertyDescriptor){
    const originalFunction = descriptor.value as Function;
    descriptor.value = function(...args: any){
        console.log('befor the Method ' + propertyType);
        originalFunction.call(this, ...args)
        console.log('after the Metod ' + propertyType); 
    }
    
}


class PersonDecorator {

    @Log
    sayHello(message: string){
        console.log('my message: ' + message);
    }
}

function MinLength(length: number){
    return (target: any, propertyName: string) => {
        let value: string;
        delete target[propertyName];
        const descriptor: PropertyDescriptor = {
            get(){ return value },
            set(newVal: string){
                if(newVal.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    }
}

class parameterDecorator {
    @MinLength(4)
    password!: string;
    
    constructor(password: string){
        this.password = password;
    }
}

let p = new parameterDecorator('5');
console.log(p.password);

//import from sum file 
import { CircleModule, SquareModule } from "./Shapes.ts/index";

