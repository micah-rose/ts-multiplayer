class Grault {
    private garply: string;

    constructor(quux: Quux, waldo: number[]) {
        this.garply = quux.quuz + " " + quux.corge + " " + waldo;
    }

    public getGarply() {
        return this.garply;
    }
}

//use interfaces to define your own types
//the use of interfaces is when you are doing a merge
//a merge is when the same interface is defined twice with a different parameter
//TS treats keywords type and interface the same
interface Quux {
    quuz: string
    corge: number
}

function foo(bar: Quux) {
    return "Hello, " + bar.quuz + " " + bar.corge;
}

let baz = {quuz: 'ABC', corge: 123};

let fred: Grault = new Grault(baz, [1,2,3]);

console.log(fred.getGarply());

//the below won't work with running in node, had to comment out in order to run
// try {
//     document.body.innerHTML = fred.getGarply();
// } catch (e) { }
