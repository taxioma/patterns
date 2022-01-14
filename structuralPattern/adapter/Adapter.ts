// Wrapper, Обёртка, Adapter, Адаптер

class Target {
    public request(): string {
        return 'Target - default behavior'
    }
}

// adaptee = адаптированный
class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return 'Adapter: [translated]' + result;
    }
}

function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Client: I work with Target obj:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee()
console.log('Client: I work with Adaptee. But dont understand it');
console.log('Adaptee: ' + adaptee.specificRequest());

console.log('');

console.log('Client: but I have result of Adapter');
const adapter = new Adapter(adaptee);
clientCode(adapter);

console.log(adapter.request);
