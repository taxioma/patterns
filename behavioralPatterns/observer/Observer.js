/*
 * Паттерн Наблюдатель
 * Издатель-Подписчик, Слушатель, Observer
 *
 * поведенческий паттерн проектирования, который создаёт механизм подписки,
 * позволяющий одним объектам следить и реагировать на события,
 * происходящие в других объектах
 *
 * Интферфейс издателя объявляет набор методов для управлениями подписчиками
 */
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (observer) {
        var isExist = this.observers.indexOf(observer) !== -1 ? true : false;
        if (isExist)
            return console.log('Subject: observer has been attached already');
        console.log('Subject: attached the observer');
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1)
            return console.log('Subject: Nonxistent observer');
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Observer was detached');
    };
    ConcreteSubject.prototype.notify = function () {
        console.log('Subject: notify observers...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteSubject.prototype.someBussinessLogic = function () {
        console.log('\nSubject: I do smth important\n');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log('Subject: my state has just changed to ' + this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event');
        }
    };
    return ConcreteObserverA;
}());
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject &&
            (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event');
        }
    };
    return ConcreteObserverB;
}());
var subject = new ConcreteSubject();
var observer1 = new ConcreteObserverA();
subject.attach(observer1);
var observer2 = new ConcreteObserverB();
subject.attach(observer2);
subject.someBussinessLogic();
subject.someBussinessLogic();
subject.detach(observer2);
subject.someBussinessLogic();
