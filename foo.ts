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

let baz = {quuz: 'ABC', corge: 123}

console.log(foo(baz));