/*
 * Паттерн Состояние
 * State
 *
 * поведенческий паттерн проектирования, который позволяет объектам
 * менять поведение в зависимости от своего состояния.
 * Извне создаётся впечатление, что изменился класс объекта
 *
 * Контекст определяет интерфейс, представляющий интерес для клиентов. Он также
 * хранит ссылку на экземпляр подкласса Состояния, который отображает текущее
 * состояние Контекста.
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
var Context = /** @class */ (function () {
    function Context(state) {
        this.transitionTo(state);
    }
    Context.prototype.transitionTo = function (state) {
        console.log('Context: transition to ' + state.constructor.name);
        this.state = state;
        this.state.setContext(this);
    };
    Context.prototype.request1 = function () {
        this.state.handle1();
    };
    Context.prototype.request2 = function () {
        this.state.handle2();
    };
    return Context;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var ConcreteStateA = /** @class */ (function (_super) {
    __extends(ConcreteStateA, _super);
    function ConcreteStateA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateA.prototype.handle1 = function () {
        console.log('ConcreteStateA handles request1.');
        console.log('ConcreteStateA wants to change the state of the context.');
        this.context.transitionTo(new ConcreteStateB());
    };
    ConcreteStateA.prototype.handle2 = function () {
        console.log('ConcreteStateA handles request2');
    };
    return ConcreteStateA;
}(State));
var ConcreteStateB = /** @class */ (function (_super) {
    __extends(ConcreteStateB, _super);
    function ConcreteStateB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateB.prototype.handle1 = function () {
        console.log('ConcreteStateB handles request1');
    };
    ConcreteStateB.prototype.handle2 = function () {
        console.log('ConcreteStateB handles request2');
        console.log('ConcreteStateB wants to change the state of the context');
        this.context.transitionTo(new ConcreteStateA());
    };
    return ConcreteStateB;
}(State));
var context = new Context(new ConcreteStateA());
context.request1();
context.request2();
