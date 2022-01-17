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

class Context {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBussinessLogic(): void {
        console.log(
            'Context: Sorting data using strategy (dont know how I will do it)'
        );
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}
class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set normal sorting');
context.doSomeBussinessLogic();

console.log('');

console.log('Client: Strategy is set reverse sorting');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBussinessLogic();
