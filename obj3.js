const person =
{
    firstname:"Rupam",
    lastname:"Yadav",
    age:25,
    occupation:"software engg",

};

Object.defineProperty(person,"fullname",{get:function()
    {
        return this.firstname +" "+this.lastname;
    }
})
console.log(person.fullname);

Object.defineProperty(person,"language",{value:"hindi"})
console.log(Object.getOwnPropertyNames(person));
console.log(person.language)