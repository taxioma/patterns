/*
 * Паттерн Посетитель
 * Visitor
 *
 * поведенческий паттерн, который позволяет добавить новую операцию
 * для целой иерархии классов, не изменяя код этих классов.
 *
 *
 * */

interface Component {
    accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    public exlusiveMethodOfConcreteComponentA(): string {
        return 'A';
    }
}
class ConcreteComponentB implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    public exlusiveMethodOfConcreteComponentB(): string {
        return 'B';
    }
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
}

class ConcreteVisitor1 implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(
            `${element.exlusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`
        );
    }
    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(
            `${element.exlusiveMethodOfConcreteComponentB()} + ConcreteVisitor1`
        );
    }
}
class ConcreteVisitor2 implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(
            `${element.exlusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`
        );
    }
    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(
            `${element.exlusiveMethodOfConcreteComponentB()} + ConcreteVisitor2`
        );
    }
}

function clientCode(components: Component[], visitor: Visitor) {
    // ...
    for (const component of components) component.accept(visitor);
    // ...
}

const components = [new ConcreteComponentA(), new ConcreteComponentB()];

console.log('Client: works with base Visitor interface');
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
console.log('');
console.log('Client: can work with other type of Visitors');
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
