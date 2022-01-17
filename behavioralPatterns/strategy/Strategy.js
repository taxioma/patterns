/*
 * Паттерн Стратегия
 * Strategy
 *
 * поведенческий паттерн проектирования, который определяет семейство схожих алгоритмов
 * и помещает каждый из них в собственный класс, после чего алгоритмы можно взаимозаменять
 * прямо во время исполнения программы
 *
 * поведенческий паттерн, выносит набор алгоритмов в собственные классы и делает их взаимозаменимыми.
 * Другие объекты содержат ссылку на объект-стратегию и делегируют ей работу.
 * Программа может подменить этот объект другим, если требуется иной способ решения задачи.
 */
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.doSomeBussinessLogic = function () {
        console.log('Context: Sorting data using strategy (dont know how I will do it)');
        var result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    };
    return Context;
}());
var ConcreteStrategyA = /** @class */ (function () {
    function ConcreteStrategyA() {
    }
    ConcreteStrategyA.prototype.doAlgorithm = function (data) {
        return data.sort();
    };
    return ConcreteStrategyA;
}());
var ConcreteStrategyB = /** @class */ (function () {
    function ConcreteStrategyB() {
    }
    ConcreteStrategyB.prototype.doAlgorithm = function (data) {
        return data.reverse();
    };
    return ConcreteStrategyB;
}());
var context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set normal sorting');
context.doSomeBussinessLogic();
console.log('');
console.log('Client: Strategy is set reverse sorting');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBussinessLogic();
