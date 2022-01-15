// Легковес, Приспособленец, Кэш, Flyweight
var Flyweight = /** @class */ (function () {
    function Flyweight(sharedState) {
        this.sharedState = sharedState;
    }
    Flyweight.prototype.operation = function (uniqueState) {
        var jsonSharedState = JSON.stringify(this.sharedState);
        var jsonUniqueState = JSON.stringify(uniqueState);
        console.log("Flyweight: Displaying shared " + jsonSharedState + " and unique " + jsonUniqueState + " state");
    };
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    FlyweightFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    FlyweightFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: no existing flyweight, creating new one');
            this.flyweights[key] = new Flyweight(sharedState);
        }
        else {
            console.log('FlyingFacory: reusing existing flyweight');
        }
        return this.flyweights[key];
    };
    FlyweightFactory.prototype.listFlyweights = function () {
        var count = Object.keys(this.flyweights).length;
        console.log("FlyweightFactory: I have " + count + " flyweights");
        for (var key in this.flyweights) {
            console.log(key);
        }
    };
    return FlyweightFactory;
}());
var factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white']
    // ...
]);
factory.listFlyweights();
// ...
function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
    console.log('\nClient: I want to add car to database');
    var flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}
addCarToPoliceDatabase(factory, 'CLT456B', 'Avraam Linkoln', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CLT456B', 'James Bond', 'BMW', 'M5', 'black');
factory.listFlyweights();
