// Abstract Factory

interface CarFactory {
    createSedan(): Sedan;
    createCoupe(): Coupe;
}

class ToyotaFactory implements CarFactory {
    public createSedan(): Sedan {
        return new ToyotaSedan();
    }

    public createCoupe(): Coupe {
        return new ToyotaCoupe();
    }
}

class FordFactory implements CarFactory {
    public createSedan(): Sedan {
        return new FordSedan();
    }

    public createCoupe(): Coupe {
        return new FordCoupe();
    }
}

interface Sedan {
    create(): string;
}
interface Coupe {
    create(): string;
}

class ToyotaCoupe implements Coupe {
    public create(): string {
        return 'create Toyota coupe';
    }
}

class ToyotaSedan implements Sedan {
    public create(): string {
        return 'create Toyota sedan';
    }
}

class FordCoupe implements Coupe {
    public create(): string {
        return 'create Ford coupe';
    }
}

class FordSedan implements Sedan {
    public create(): string {
        return 'create Ford sedan';
    }
}

function clientCode(factory: CarFactory) {
    const sedan = factory.createSedan();
    const coupe = factory.createCoupe();

    console.log(sedan.create());
    console.log(coupe.create());
}

console.log('toyota');
clientCode(new ToyotaFactory());
console.log('ford');
clientCode(new FordFactory());
