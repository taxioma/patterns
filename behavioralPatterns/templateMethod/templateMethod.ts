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

abstract class AbstractClass {
    // скелет алгоритма
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }

    // реализации есть
    protected baseOperation1(): void {
        console.log('Abstract class says: Im doing the bulk of the work');
    }
    protected baseOperation2(): void {
        console.log(
            'Abstract class says: But I let subclasses override some operations'
        );
    }
    protected baseOperation3(): void {
        console.log(
            'Abstract class says: But I am doing the bulk of the work anyway'
        );
    }

    // реализация в подклассах
    protected abstract requiredOperation1(): void;
    protected abstract requiredOperation2(): void;

    // хуки - можно переопределить, но если что, по умолчанию пустая реализация
    protected hook1(): void {}
    protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log('ConcreteClass1: Implement operation 1');
    }
    protected requiredOperation2(): void {
        console.log('ConcreteClass1: Implement operation 2');
    }
}
class ConcreteClass2 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log('ConcreteClass2: Implement operation 1');
    }
    protected requiredOperation2(): void {
        console.log('ConcreteClass2: Implement operation 2');
    }
    protected hook1(): void {
        console.log('ConcreteClass2: Overriden Hook1');
    }
}

function clientCode(abstractClass: AbstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}

console.log('Some client works with the 1st variant of subclasses');
clientCode(new ConcreteClass1());
console.log('');

console.log('Some client works with the 2nd variant of subclasses');
clientCode(new ConcreteClass2());
