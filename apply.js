const person1={
    fullname:function(age,city)
    {
        return this.firstname +" "+this.lastname+" "+age+" "+city;
    }
}

const person2={
    firstname:"Rupam",
    lastname:"Yadav",
}

console.log(person1.fullname.apply(person2,["25","umargam"]));