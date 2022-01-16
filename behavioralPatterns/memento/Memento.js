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
var Originator = /** @class */ (function () {
    function Originator(state) {
        this.state = state;
        console.log('Originator: my initial state ' + state);
    }
    Originator.prototype.doSmth = function () {
        console.log('Originator: I m doing smth important');
        this.state = this.generateRandomString(30);
        console.log('Originator: and my state has changed to: ' + this.state);
    };
    Originator.prototype.generateRandomString = function (length) {
        if (length === void 0) { length = 10; }
        var charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array.apply(null, { length: length })
            .map(function () {
            return charSet.charAt(Math.floor(Math.random() * charSet.length));
        })
            .join('');
    };
    Originator.prototype.save = function () {
        return new ConcreteMemento(this.state);
    };
    Originator.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log('Originator: my state has changed to: ' + this.state);
    };
    return Originator;
}());
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    ConcreteMemento.prototype.getState = function () {
        return this.state;
    };
    ConcreteMemento.prototype.getName = function () {
        return this.date + " / (" + this.state.substring(0, 9) + "...)";
    };
    ConcreteMemento.prototype.getDate = function () {
        return this.date;
    };
    return ConcreteMemento;
}());
// опекун
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    Caretaker.prototype.backup = function () {
        console.log('\nCaretaker: saving originator state...');
        this.mementos.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log('Caretaker: restoring state to: ' + memento.getName());
        this.originator.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('Caretaker: list of mementos:');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
var originator = new Originator('Super-puper');
var caretaker = new Caretaker(originator);
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
