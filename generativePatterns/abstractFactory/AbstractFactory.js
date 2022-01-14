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
    ToyotaCoupe.prototype.create = function () {
        return 'create Toyota coupe';
    };
    return ToyotaCoupe;
}());
var ToyotaSedan = /** @class */ (function () {
    function ToyotaSedan() {
    }
    ToyotaSedan.prototype.create = function () {
        return 'create Toyota sedan';
    };
    return ToyotaSedan;
}());
var FordCoupe = /** @class */ (function () {
    function FordCoupe() {
    }
    FordCoupe.prototype.create = function () {
        return 'create Ford coupe';
    };
    return FordCoupe;
}());
var FordSedan = /** @class */ (function () {
    function FordSedan() {
    }
    FordSedan.prototype.create = function () {
        return 'create Ford sedan';
    };
    return FordSedan;
}());
function clientCode(factory) {
    var sedan = factory.createSedan();
    var coupe = factory.createCoupe();
    console.log(sedan.create());
    console.log(coupe.create());
}
console.log('toyota');
clientCode(new ToyotaFactory());
console.log('ford');
clientCode(new FordFactory());
