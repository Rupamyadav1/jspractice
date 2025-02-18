const mp=new Map([
    ['apples',200],
    ['bananas',300],
    ['chickoo',500]
]);
console.log(mp.entries());

console.log(mp.keys());

console.log(mp.values());
console.log("here for loop in the map");
for(let m of mp)
{
    console.log(m);
}