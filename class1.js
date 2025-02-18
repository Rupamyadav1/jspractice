class car
{
    constructor(brand)
    {
        this.brand=brand;
    }

    persent()
    {
        return this.brand;
    }

}

class audi extends car
{
    constructor(brand,mod)
    {
        super(brand);
        
        this.mod=mod;
    }
    show()
    {
        return "i have a brand  "+this.persent()+" and its mod is "+this.mod;
    }
}

const objaudi=new audi("honda","driving");

console.log(objaudi.show());