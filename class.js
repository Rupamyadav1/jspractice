class car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }

    age()
    {
        const date=new Date();

        return date.getFullYear()-this.year;
    }
}

const c=new car("Rupam",1999);

let a=c.age();

console.log("you are "+a+ " years old");

console.log(c);