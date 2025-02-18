const obj=
{
    name:"Rupam",
    age:25,
};

const arr=
[
    "Rupam","Riya","Priya"
];

// console.log(arr1[0]);

// console.log(obj1.name);


console.log("this is object");
for(let ob in obj)
{
    const value=obj[ob];
    console.log(ob,value,);
}

console.log("this is array");
for(let a of arr)
    {
       
        console.log(a);
    }