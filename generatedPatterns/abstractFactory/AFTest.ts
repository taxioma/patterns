// семейство абстрактных продуктов
interface AbstractFactory {
    createProductA: AbstractProductA;
    createProductB: AbstractProductB;
}

class ExampleFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ExampleProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ExampleProductB1();
    }
}

class ExampleFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ExampleProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ExampleProductB2();
    }
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

class ExampleProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'result product A-1';
    }
}

class ExampleProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'result product A-2'
    }
}

interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ExampleProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'result product B-1'
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA;
        return 'result of product B-1 with collaborate' + result

    }

}
class ExampleProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'result product B-2'
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA;
        return 'result of product B-2 with collaborate' + result

    }
}

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('App: start 1st factory');
clientCode(new ExampleFactory1());

console.log('App: start 2nd factory');
clientCode(new ExampleFactory2());