//Objects
const person: {
    firstName: string;
    lastName: string;
    age: number;
    hobbies?: string;   /* ? bedeutet optional, es kann auch undefined sein*/
    address?: {
        street: string;
        city: string;
    }
} = {
    firstName: "Mia",
    lastName: "Musterfrau",
    age: 22
};

person.hobbies = "Fishing, cooking";
console.log(person.lastName + ", " + person.firstName + ", " + person.age + "Jahre");