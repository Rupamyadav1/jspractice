const arr=["apple","mango","banana","chickoo"];

arr.splice(1,2,"zzzz","yyyy");

const arr1=arr.toSpliced(1,2,"spliced1","splied2");

const arr2=["car","vehicle","bus","track","zeep"];

const arr3=arr2.slice(1,4);


for(let a of arr)
{
    console.log(a);
}
console.log("new array");

for(let a of arr1)
{
    console.log(a);
}

console.log("new array array 3");
for(let a of arr3)
{
    console.log(a);
}
