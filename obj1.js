function Person(firstname,lastname,age) //Constructor function
{
    this.first=firstname;
    this.last=lastname;
    this.age=age;
}

Person.prototype.fullname=function()
{
    return this.first+" "+this.last;
}

Person.prototype.occupation="Software Engg";

const myperson=new Person("Rupam","Yadav",25);

console.log(myperson.first,myperson.last,myperson.age);

console.log(myperson.fullname())