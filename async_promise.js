async function myfun()
{

    let x=1;
    if(x== 0)
    {
    return "hello";
    }
    else{
        return "hiii";
    }
}

myfun().then(
    (value)=>{
        console.log(value);
    },
   (error)=>{
    console.log(error);
   }

)