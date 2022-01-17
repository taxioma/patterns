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

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class ConcreteSubject implements Subject {
    public state: number;
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.indexOf(observer) !== -1 ? true : false;
        if (isExist)
            return console.log('Subject: observer has been attached already');
        console.log('Subject: attached the observer');

        this.observers.push(observer);
    }
    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1)
            return console.log('Subject: Nonxistent observer');

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Observer was detached');
    }
    public notify(): void {
        console.log('Subject: notify observers...');
        for (const observer of this.observers) observer.update(this);
    }

    public someBussinessLogic(): void {
        console.log('\nSubject: I do smth important\n');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log('Subject: my state has just changed to ' + this.state);
        this.notify();
    }
}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event');
        }
    }
}
class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        if (
            subject instanceof ConcreteSubject &&
            (subject.state === 0 || subject.state >= 2)
        ) {
            console.log('ConcreteObserverB: Reacted to the event');
        }
    }
}

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
subject.attach(observer1);
const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBussinessLogic();
subject.someBussinessLogic();

subject.detach(observer2);

subject.someBussinessLogic();
