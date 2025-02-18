const obj=
{
    name:"Rupam",
    age:25,
    cars:[
        {name:"Audi",models:["xyz","abc","tttt"]},
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]},       
        {name:"xyz", models:["500", "Panda"]}

    ]
}

for(let i in obj.cars)
{
    console.log(obj.cars[i].name);
    for(let j in obj.cars[i].models)
    {
        console.log(obj.cars[i].models[j]);
    }

}