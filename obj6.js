const Person=
{
    name:"Rupam",
    age:25,
    language:"Hindi"
}

Object.defineProperty(Person,"occupation",{enumerable:false});
Object.defineProperty(Person,"language",{enumerable:false});

console.log(Object.getOwnPropertyNames(Person));

console.log(Object.keys(Person));  //Object.keys() method returns all enumerable properties
