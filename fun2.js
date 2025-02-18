function myfun(name,age)
{
    this.name=name;
    this.age=age;
}

const obj=new myfun("Rupam",25);

console.log(obj.name);

console.log(obj.age);