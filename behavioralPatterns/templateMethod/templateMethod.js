/*
 * Паттерн Шаблонный метод
 * Template Method
 *
 * поведенческий паттерн проектирования, который определяет скелет алгоритма,
 * перекладывая ответственность за некоторые его шаги на подклассы.
 * Паттерн позволяет подклассам переопределять шаги алгоритма,
 * не меняя его общей структуры.
 *
 *
 * Абстрактный Класс определяет шаблонный метод, содержащий скелет некоторого
 * алгоритма, состоящего из вызовов (обычно) абстрактных примитивных операций.
 *
 * Конкретные подклассы должны реализовать эти операции, но оставить сам
 * шаблонный метод без изменений.
 */
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
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    // скелет алгоритма
    AbstractClass.prototype.templateMethod = function () {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    };
    // реализации есть
    AbstractClass.prototype.baseOperation1 = function () {
        console.log('Abstract class says: Im doing the bulk of the work');
    };
    AbstractClass.prototype.baseOperation2 = function () {
        console.log('Abstract class says: But I let subclasses override some operations');
    };
    AbstractClass.prototype.baseOperation3 = function () {
        console.log('Abstract class says: But I am doing the bulk of the work anyway');
    };
    // хуки - можно переопределить, но если что, по умолчанию пустая реализация
    AbstractClass.prototype.hook1 = function () { };
    AbstractClass.prototype.hook2 = function () { };
    return AbstractClass;
}());
var ConcreteClass1 = /** @class */ (function (_super) {
    __extends(ConcreteClass1, _super);
    function ConcreteClass1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass1.prototype.requiredOperation1 = function () {
        console.log('ConcreteClass1: Implement operation 1');
    };
    ConcreteClass1.prototype.requiredOperation2 = function () {
        console.log('ConcreteClass1: Implement operation 2');
    };
    return ConcreteClass1;
}(AbstractClass));
var ConcreteClass2 = /** @class */ (function (_super) {
    __extends(ConcreteClass2, _super);
    function ConcreteClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass2.prototype.requiredOperation1 = function () {
        console.log('ConcreteClass2: Implement operation 1');
    };
    ConcreteClass2.prototype.requiredOperation2 = function () {
        console.log('ConcreteClass2: Implement operation 2');
    };
    ConcreteClass2.prototype.hook1 = function () {
        console.log('ConcreteClass2: Overriden Hook1');
    };
    return ConcreteClass2;
}(AbstractClass));
function clientCode(abstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}
console.log('Some client works with the 1st variant of subclasses');
clientCode(new ConcreteClass1());
console.log('');
console.log('Some client works with the 2nd variant of subclasses');
clientCode(new ConcreteClass2());
