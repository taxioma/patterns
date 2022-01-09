var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return 'Creator worked with ' + product.operation();
    };
    return Creator;
}());
var ExampleCreator1 = /** @class */ (function (_super) {
    __extends(ExampleCreator1, _super);
    function ExampleCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleCreator1.prototype.factoryMethod = function () {
        return new ExampleProduct1();
    };
    return ExampleCreator1;
}(Creator));
var ExampleCreator2 = /** @class */ (function (_super) {
    __extends(ExampleCreator2, _super);
    function ExampleCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleCreator2.prototype.factoryMethod = function () {
        return new ExampleProduct2();
    };
    return ExampleCreator2;
}(Creator));
var ExampleProduct1 = /** @class */ (function () {
    function ExampleProduct1() {
    }
    ExampleProduct1.prototype.operation = function () {
        return 'result of product 1';
    };
    return ExampleProduct1;
}());
var ExampleProduct2 = /** @class */ (function () {
    function ExampleProduct2() {
    }
    ExampleProduct2.prototype.operation = function () {
        return 'result of product 2';
    };
    return ExampleProduct2;
}());
function clientCode(creator) {
    console.log('client: work');
    console.log(creator.someOperation());
}
console.log('App: example creator 1');
clientCode(new ExampleCreator1());
console.log('----');
console.log('App: example creator 2');
clientCode(new ExampleCreator2());
