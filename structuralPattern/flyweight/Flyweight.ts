// Легковес, Приспособленец, Кэш, Flyweight

class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState): void {
        const jsonSharedState = JSON.stringify(this.sharedState);
        const jsonUniqueState = JSON.stringify(uniqueState);
        console.log(
            `Flyweight: Displaying shared ${jsonSharedState} and unique ${jsonUniqueState} state`
        );
    }
}

class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log(
                'FlyweightFactory: no existing flyweight, creating new one'
            );
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('FlyingFacory: reusing existing flyweight');
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`FlyweightFactory: I have ${count} flyweights`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white']
    // ...
]);
factory.listFlyweights();

// ...

function addCarToPoliceDatabase(
    ff: FlyweightFactory,
    plates: string,
    owner: string,
    brand: string,
    model: string,
    color: string
) {
    console.log('\nClient: I want to add car to database');
    const flyweight = ff.getFlyweight([brand, model, color]);

    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(
    factory,
    'CLT456B',
    'Avraam Linkoln',
    'BMW',
    'M5',
    'red'
);
addCarToPoliceDatabase(factory, 'CLT456B', 'James Bond', 'BMW', 'M5', 'black');

factory.listFlyweights();
