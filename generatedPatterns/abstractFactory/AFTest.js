var ExampleFactory1 = /** @class */ (function () {
    function ExampleFactory1() {
    }
    ExampleFactory1.prototype.createProductA = function () {
        return new ExampleProductA1();
    };
    ExampleFactory1.prototype.createProductB = function () {
        return new ExampleProductB1();
    };
    return ExampleFactory1;
}());
var ExampleFactory2 = /** @class */ (function () {
    function ExampleFactory2() {
    }
    ExampleFactory2.prototype.createProductA = function () {
        return new ExampleProductA2();
    };
    ExampleFactory2.prototype.createProductB = function () {
        return new ExampleProductB2();
    };
    return ExampleFactory2;
}());
var ExampleProductA1 = /** @class */ (function () {
    function ExampleProductA1() {
    }
    ExampleProductA1.prototype.usefulFunctionA = function () {
        return 'result product A-1';
    };
    return ExampleProductA1;
}());
var ExampleProductA2 = /** @class */ (function () {
    function ExampleProductA2() {
    }
    ExampleProductA2.prototype.usefulFunctionA = function () {
        return 'result product A-2';
    };
    return ExampleProductA2;
}());
var ExampleProductB1 = /** @class */ (function () {
    function ExampleProductB1() {
    }
    ExampleProductB1.prototype.usefulFunctionB = function () {
        return 'result product B-1';
    };
    ExampleProductB1.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA;
        return 'result of product B-1 with collaborate' + result;
    };
    return ExampleProductB1;
}());
var ExampleProductB2 = /** @class */ (function () {
    function ExampleProductB2() {
    }
    ExampleProductB2.prototype.usefulFunctionB = function () {
        return 'result product B-2';
    };
    ExampleProductB2.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA;
        return 'result of product B-2 with collaborate' + result;
    };
    return ExampleProductB2;
}());
function clientCode(factory) {
    var productA = factory.createProductA();
    var productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
console.log('App: start 1st factory');
clientCode(new ExampleFactory1());
console.log('App: start 2nd factory');
clientCode(new ExampleFactory2());
