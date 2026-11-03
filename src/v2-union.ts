//! Literal Type

type Status = "panding"
const status : Status = "panding"

//! Basic Union

type Identity = string | number
const id : Identity = "Mizanur"

//! Literal Union

type Role = "admin" | "user" | "manager"
const useRole : Role = "manager"

//! Object Union 

type Admin = {id:number, role: "admin", privileges: string[]}
type Member = {id:number, role: "member", plans: string[]}

type User = Admin | Member

const user : User = {id:124, role:"member", plans: ["abc", "def"]}