const person1={
    name:"john",
    age:22,

}

const person2={
    name:"Rupam",
    age:25,
}

let x=Object.entries(person1);

console.log(x);

Object.assign(person1,person2); //assign person 1 name to person 2

console.log(person1.name);