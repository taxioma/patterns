var ToyotaFactory = /** @class */ (function () {
    function ToyotaFactory() {
    }
    ToyotaFactory.prototype.createSedan = function () {
        return new ToyotaSedan();
    };
    ToyotaFactory.prototype.createCoupe = function () {
        return new ToyotaCoupe();
    };
    return ToyotaFactory;
}());
var FordFactory = /** @class */ (function () {
    function FordFactory() {
    }
    FordFactory.prototype.createSedan = function () {
        return new FordSedan();
    };
    FordFactory.prototype.createCoupe = function () {
        return new FordCoupe();
    };
    return FordFactory;
}());
var ToyotaCoupe = /** @class */ (function () {
    function ToyotaCoupe() {
    }
    ToyotaCoupe.prototype.ToyotaCoupe = function () {
        console.log('create Toyota coupe');
    };
    return ToyotaCoupe;
}());
var ToyotaSedan = /** @class */ (function () {
    function ToyotaSedan() {
    }
    ToyotaSedan.prototype.ToyotaSedan = function () {
        console.log('create Toyota sedan');
    };
    return ToyotaSedan;
}());
var FordCoupe = /** @class */ (function () {
    function FordCoupe() {
    }
    FordCoupe.prototype.FordCoupe = function () {
        console.log('create Ford coupe');
    };
    return FordCoupe;
}());
var FordSedan = /** @class */ (function () {
    function FordSedan() {
    }
    FordSedan.prototype.FordSedan = function () {
        console.log('create Ford sedan');
    };
    return FordSedan;
}());
var factory1 = new ToyotaFactory();
console.log('factory 1');
factory1.createSedan();
var factory2 = new ToyotaFactory();
console.log('factory 2');
factory2.createCoupe();
