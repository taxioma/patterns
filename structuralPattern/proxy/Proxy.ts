// Заместитель, Proxy

interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request...');
    }
}

class ProxySubject implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }
    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }
    private logAccess(): void {
        console.log('Proxy: logging the time of request');
    }
}

function clientCode(subject: Subject) {
    // ...
    subject.request();
    // ...
}

console.log('Client: trying execute with real subject: ');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: executing with proxy');
const proxy = new ProxySubject(realSubject);
clientCode(proxy);
