const person1={
    fullname:function()
    {
        return this.firstname +" "+this.secondname;
    }
}

const person2={
    firstname:"Rupam",
    secondname:"Yadav",
   
}


console.log(person1.fullname.call(person2))