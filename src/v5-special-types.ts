//TODO: Typescript Type Hierarchy   ====> 

//* Top Types

let helloWorld : any = "Hello World"
helloWorld=123
helloWorld.length

const something : unknown = "Hello World"
//! We can't access it
// something.length

//* Core Types

let something2 : unknown;

const num : number = 123

something2 = num

type Status = "pending" | "success"
let someStatus : string;

const status : Status = "success"
someStatus = status

//* Nullish Types

interface User {
    name:string
}

type loggedInUser = User | null

const currentUser : loggedInUser = null

//* Unit Type

const greet = () => {
    console.log("Hello World");
}

greet()

//* Sub-Type of Unit Type

const anothergreet = () : undefined => {
    console.log("Hello World")
    return undefined
}

const greetings : void = anothergreet()
console.log(greetings);

//* Bottom Type

const getError = (msg:string) : never => {
    throw new Error(msg)
}

const x : string = getError("ABC")
const y : number = getError("124")
const z : boolean = getError("true")
const a : null = getError("CBA")
const b : undefined = getError("")