
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

interface Sedan {}
interface Coupe {}

class ToyotaCoupe implements Coupe {
    public ToyotaCoupe() {
        console.log('create Toyota coupe');
    }
}

class ToyotaSedan implements Sedan {
    public ToyotaSedan() {
        console.log('create Toyota sedan');
    }
}

class FordCoupe implements Coupe {
    public FordCoupe() {
        console.log('create Ford coupe');
    }
}

class FordSedan implements Sedan {
    public FordSedan() {
        console.log('create Ford sedan');
    }
}

const factory1 = new ToyotaFactory();
console.log('factory 1');
factory1.createSedan();
const factory2 = new ToyotaFactory();
console.log('factory 2');
factory2.createCoupe();
