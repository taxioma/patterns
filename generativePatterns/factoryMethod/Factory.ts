// Виртуальный конструктор, Factory Method

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return 'Creator worked with ' + product.operation();
    }
}

class ExampleCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ExampleProduct1();
    }
}

class ExampleCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ExampleProduct2();
    }
}

interface Product {
    operation(): string;
}

class ExampleProduct1 implements Product {
    public operation(): string {
        return 'result of product 1'
    }
}

class ExampleProduct2 implements Product {
    public operation(): string {
        return 'result of product 2'
    }
}

function clientCode(creator: Creator) {
    console.log('client: work');
    console.log(creator.someOperation());
}

console.log('App: example creator 1');
clientCode(new ExampleCreator1())
console.log('----');
console.log('App: example creator 2');
clientCode(new ExampleCreator2());

