/*
 * Паттерн Посетитель
 * Visitor
 *
 * поведенческий паттерн, который позволяет добавить новую операцию
 * для целой иерархии классов, не изменяя код этих классов.
 *
 *
 * */
var ConcreteComponentA = /** @class */ (function () {
    function ConcreteComponentA() {
    }
    ConcreteComponentA.prototype.accept = function (visitor) {
        visitor.visitConcreteComponentA(this);
    };
    ConcreteComponentA.prototype.exlusiveMethodOfConcreteComponentA = function () {
        return 'A';
    };
    return ConcreteComponentA;
}());
var ConcreteComponentB = /** @class */ (function () {
    function ConcreteComponentB() {
    }
    ConcreteComponentB.prototype.accept = function (visitor) {
        visitor.visitConcreteComponentB(this);
    };
    ConcreteComponentB.prototype.exlusiveMethodOfConcreteComponentB = function () {
        return 'B';
    };
    return ConcreteComponentB;
}());
var ConcreteVisitor1 = /** @class */ (function () {
    function ConcreteVisitor1() {
    }
    ConcreteVisitor1.prototype.visitConcreteComponentA = function (element) {
        console.log(element.exlusiveMethodOfConcreteComponentA() + " + ConcreteVisitor1");
    };
    ConcreteVisitor1.prototype.visitConcreteComponentB = function (element) {
        console.log(element.exlusiveMethodOfConcreteComponentB() + " + ConcreteVisitor1");
    };
    return ConcreteVisitor1;
}());
var ConcreteVisitor2 = /** @class */ (function () {
    function ConcreteVisitor2() {
    }
    ConcreteVisitor2.prototype.visitConcreteComponentA = function (element) {
        console.log(element.exlusiveMethodOfConcreteComponentA() + " + ConcreteVisitor2");
    };
    ConcreteVisitor2.prototype.visitConcreteComponentB = function (element) {
        console.log(element.exlusiveMethodOfConcreteComponentB() + " + ConcreteVisitor2");
    };
    return ConcreteVisitor2;
}());
function clientCode(components, visitor) {
    // ...
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(visitor);
    }
    // ...
}
var components = [new ConcreteComponentA(), new ConcreteComponentB()];
console.log('Client: works with base Visitor interface');
var visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
console.log('');
console.log('Client: can work with other type of Visitors');
var visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
