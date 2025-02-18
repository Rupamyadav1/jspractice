    let count=0; //global variable   

    let local=0;
    
    function add()
    {
        //let count=0;
        count++; //it will not affect the global variable
        //local++; 
        return count;
    }

    add();
    add();
    add();
    
    console.log(count);
    //console.log(local);
