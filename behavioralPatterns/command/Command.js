// Команда, Действие, Транзакция, Action, Command
// простая команда
var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: Hey, I can do simple think like print (" + this.payload + ")");
    };
    return SimpleCommand;
}());
// сложная команда, делегирует выполнение получателям
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    ComplexCommand.prototype.execute = function () {
        console.log('ComplexCommand: Complex stuff shoud be done by  receiver object');
        this.receiver.doSmth(this.a);
        this.receiver.doSmthElse(this.b);
    };
    return ComplexCommand;
}());
// получатели хранят бизнес-логику
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSmth = function (a) {
        console.log("Receiver: Work on (" + a + ")");
    };
    Receiver.prototype.doSmthElse = function (b) {
        console.log("Receiver: Work on else (" + b + ")");
    };
    return Receiver;
}());
// отправитель связан с командами. Он отправляет им запрос
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    // initialize
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    // при этом отправитель не зависит от конкретной команды, он передает косвенно получателю
    Invoker.prototype.doSmthImportant = function () {
        console.log('Invoker: Does anybody want smth done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log('Invoker:...doing smth really important');
        console.log('Invoker: Does anybody want smth done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    return Invoker;
}());
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Hello, my dear friend'));
var receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Send report'));
invoker.doSmthImportant();
