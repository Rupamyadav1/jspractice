const counter=
{
    count:0,
};


Object.defineProperty(counter,"reset",{
    set:
        function()
        {
            counter.count=0;
        }
    
});



Object.defineProperty(counter,"increment",{
    set:
        function()
        {
            counter.count++;
        }
    
});

Object.defineProperty(counter,"decrement",{
    set:
        function()
        {
            counter.count - 1;
        }
});

//counter.reset;
counter.increment;
//counter.decrement;

console.log(counter.count)