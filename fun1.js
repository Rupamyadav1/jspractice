function myfun(a,b)
{
    if(a==2 && b==2)
    {
        return 2;
    }
    else{
        return a*b;
    }
}
function myarr(...args)
{
    let sum=0;
   for(let arg of args)
   {
    sum=sum+arg;
   }
   return sum;
}

// console.log(myfun(3,4));

// console.log(myfun(2,4));

console.log(myarr(1,2,3,4));