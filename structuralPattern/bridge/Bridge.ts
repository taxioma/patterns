// Bridge, Мост

class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        const result = this.implementation.operationImplementation();
        return 'Abstraction: base operation result ' + result;
    }
}

class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return 'ExtendedAbstraction: extended operation result ' + result;
    }
}

interface Implementation {
    operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementation_A: result of platform A'
    }
}
class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementation_B: result of platform B'
    }
}

function clientCode(abstraction: Abstraction) {
    // ...
    console.log(abstraction.operation());
    //  ...
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);