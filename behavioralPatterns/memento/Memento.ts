/*
 * Паттерн Снимок
 * Хранитель, Memento
 *
 * поведенческий паттерн проектирования, который позволяет
 * сохранять и восстанавливать прошлые состояния объектов,
 * не раскрывая подробностей их реализации
 *
 * Создатель содержит некоторое важное состояние, которое может со временем
 * меняться. Он также объявляет метод сохранения состояния внутри снимка и метод
 * восстановления состояния из него.
 */

class Originator {
    private state: string;
    constructor(state: string) {
        this.state = state;
        console.log('Originator: my initial state ' + state);
    }

    public doSmth(): void {
        console.log('Originator: I m doing smth important');
        this.state = this.generateRandomString(30);
        console.log('Originator: and my state has changed to: ' + this.state);
    }
    private generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array.apply(null, {length})
            .map(() =>
                charSet.charAt(Math.floor(Math.random() * charSet.length))
            )
            .join('');
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log('Originator: my state has changed to: ' + this.state);
    }
}

interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getState(): string {
        return this.state;
    }
    public getName(): string {
        return `${this.date} / (${this.state.substring(0, 9)}...)`;
    }
    public getDate(): string {
        return this.date;
    }
}
// опекун
class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log('\nCaretaker: saving originator state...');
        this.mementos.push(this.originator.save());
    }
    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log('Caretaker: restoring state to: ' + memento.getName());
        this.originator.restore(memento);
    }
    public showHistory(): void {
        console.log('Caretaker: list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('Super-puper');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSmth();

caretaker.backup();
originator.doSmth();

caretaker.backup();
originator.doSmth();

console.log('');
caretaker.showHistory();

console.log('Client: lets rollback');
caretaker.undo();

console.log('Client: once more');
caretaker.undo();
