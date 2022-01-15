// Фасад, Facade

class Facade {
    protected subsystem1: Subsystem1;
    protected subsystem2: Subsystem2;

    constructor(subsystem1: Subsystem1 = null, subsystem2: Subsystem2 = null) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    public operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += 'Facade orders subsystems to perform the action: \n';
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        return result;
    }
}

class Subsystem1 {
    public operation1(): string {
        return 'Subsystem_1: Ready to start\n';
    }
    // ...
    public operationN(): string {
        return 'Subsystem_1: GoGoGo\n';
    }
}

class Subsystem2 {
    public operation1(): string {
        return 'Subsystem_2: The next\n';
    }
    // ...
    public operationZ(): string {
        return 'Subsystem_2: Z operation\n';
    }
}

function clientCode(facade: Facade) {
    // ...
    console.log(facade.operation());
    // ...
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
console.log('Client: I want work with system');
clientCode(facade);
