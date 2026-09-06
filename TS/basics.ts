/*let myName: string = "Bob"
// Primitive Data Types: string, number, boolean
// Exercise 1: Explicitly type the variables below:

let numberOfWheels = 4
let isStudent = false

let numberOfWheels: number = 4
let isStudent: boolean = false*/



//Defining Custom Types
// Exercise 2: finish the object type definition

/*type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false
}
*/

/*
//Exercise Nr. 3
type Person = {
    name: string
    age: number
    isStudent: boolean
    address: {
        street: string
        city: string
        country: string
    }
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}
*/
// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

/*type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}
*/


type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1)

