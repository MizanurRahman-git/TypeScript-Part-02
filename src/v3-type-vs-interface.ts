//* Type Alias VS Interface

//? Interface Generally Connected to Objects.
//? Type Alias is More Connected to Literals, Unions, Tuples, Primitives

//TODO: Type Alias ===> 

type ID = number

//! interface id  number

type Role = "admin" | "user"

//! interface role "admin" | "user"

interface User {
    name: string,
    id: number,
    role: Role
}

const user : User = {
    name:"Mizanur",
    id: 123,
    role:"admin"
}



//TODO: Interface ==>

interface Animal {
    species: string
}

interface Cat extends Animal {
    breed: string
}

const cat : Cat = {
    breed:"persian",
    species: "Felix Catus"
}


//TODO: Type Alias ====>

type Vehicle = {
    brand: string
}

type Car = Vehicle & {
    model: string
}

const car : Car = {
    model:"1kdhw34",
    brand:"Toyota"
}



//TODO:  Interface ====> 

interface IEmployee {
    name:string
}

interface IEmployee {
    id:number
}


//! This is not valid
// type TEmployee = {
//     name:string
// }
// type TEmployee = {
//     id:string
// }


const employee : IEmployee = {
    name: "Mizanur",
    id: 123
}

