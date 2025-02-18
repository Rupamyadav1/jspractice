const arr=[1,3,5,6,8];
const arr1=[];
let b="";

const arr2=[1,2,3,4];

for(let i=0;i<arr.length;i++)
{
    b=arr[i]*2;
}

console.log(b);

const a=arr2.map(item=>item*3)

console.log(a);

console.log("original array "+arr);

console.log(typeof (b));