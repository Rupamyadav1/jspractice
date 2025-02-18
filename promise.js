let promise=new Promise((resolve,reject)=>{ //Promise is an promise constructor
    let x=2;
    if (x == 0)
    {
        resolve("Ok");
    }
    else if(x == 1){
        reject("error");
    }
    else{
        console.log("pending");
    }
});

promise.then((value)=>{
    console.log(value);
},
(value)=>{
    console.log(value);
}
)

