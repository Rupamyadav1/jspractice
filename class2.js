class nameclass{
    constructor(name)
    {
        this.name=name;
    }

    namemethod()
    {
        return "my name is " +this.name;
    }
}

class ageclass extends nameclass
{
    constructor(name,age)
    {
       super(name);
        this.age=age;
    }
    agemethod()
    {
        return this.namemethod()+ " and age is "+this.age;
    }
}

const obj=new ageclass("Rupam",25)

console.log(obj.agemethod());