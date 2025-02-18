const person=
{
    name:"Rupam",
    get na()
    {
        return this.name;
    }
}

const person2={
    name:"rupam",
    language:"",
   
   
    set lang(val)
    {
        return this.language=val;
    }
}

person2.lang="eng";
console.log(person.na);

console.log(person2.language)
console.log(Object.getOwnPropertyNames(person2))

