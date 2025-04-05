console.log("GBC")
//create a function => add
function add(a:number, b:number): number{
    return a + b
}
console.log("Add: ", add(2,5))//7
console.log("Add: ", add(2, "5")) //25
//2. create interface walker

interface Walker {
    readonly age: number;
    do_walk(age: number);
}

//3. create class "Mammal"
//display the types of access modifiers
// 3 p's => 1. Public 2. Private 3. Protected

class Mammal {
    public height: number;
    private dinner: string;
    protected pocket_money: number;


    //create the method
    constructor(p_height: number, p_dinner: string, p_money: number)
    {
        this.height = p_height;
        this.dinner = p_dinner;
        this.money = p_money;
    }
}
const m1 = new Mammal(7.7, "Meat", 1000);
console.log(m1)
console.log(m1.height);
console.log(m1.p_money);