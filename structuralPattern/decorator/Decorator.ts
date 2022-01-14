// Декоратор, Wrapper, Обёртка, Decorator

interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecorator_A(${super.operation()})`;
    }
}
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecorator_B(${super.operation()})`;
    }
}

function clientCode(component: Component) {
    // ...
    console.log('RESULT: ' + component.operation());

    // ...
}

const simple = new ConcreteComponent();
console.log('Client: I can work with simple component');
clientCode(simple);

console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: I can work with decorated component');
clientCode(decorator2);
