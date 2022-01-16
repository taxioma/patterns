// Команда, Действие, Транзакция, Action, Command

interface Command {
    execute(): void;
}
// простая команда
class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(
            `SimpleCommand: Hey, I can do simple think like print (${this.payload})`
        );
    }
}
// сложная команда, делегирует выполнение получателям
class ComplexCommand implements Command {
    private receiver: Receiver;

    // context for execute methods
    private a: string;
    private b: string;

    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        console.log(
            'ComplexCommand: Complex stuff shoud be done by  receiver object'
        );
        this.receiver.doSmth(this.a);
        this.receiver.doSmthElse(this.b);
    }
}
// получатели хранят бизнес-логику
class Receiver {
    public doSmth(a: string): void {
        console.log(`Receiver: Work on (${a})`);
    }
    public doSmthElse(b: string): void {
        console.log(`Receiver: Work on else (${b})`);
    }
}
// отправитель связан с командами. Он отправляет им запрос
class Invoker {
    private onStart: Command;
    private onFinish: Command;

    // initialize
    public setOnStart(command: Command): void {
        this.onStart = command;
    }
    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }
    // при этом отправитель не зависит от конкретной команды, он передает косвенно получателю
    public doSmthImportant(): void {
        console.log('Invoker: Does anybody want smth done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        console.log('Invoker:...doing smth really important');

        console.log('Invoker: Does anybody want smth done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Hello, my dear friend'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Send report'));
invoker.doSmthImportant();
