function person(friend,person2)
{
    console.log("My friend name is " + friend);
    person2();
    return 0;
}

function person2()
{
    console.log("My name is Rupam");
}

person("Riya",person2);