// Заместитель, Proxy
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('RealSubject: Handling request...');
    };
    return RealSubject;
}());
var ProxySubject = /** @class */ (function () {
    function ProxySubject(realSubject) {
        this.realSubject = realSubject;
    }
    ProxySubject.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    ProxySubject.prototype.checkAccess = function () {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    };
    ProxySubject.prototype.logAccess = function () {
        console.log('Proxy: logging the time of request');
    };
    return ProxySubject;
}());
function clientCode(subject) {
    // ...
    subject.request();
    // ...
}
console.log('Client: trying execute with real subject: ');
var realSubject = new RealSubject();
clientCode(realSubject);
console.log('');
console.log('Client: executing with proxy');
var proxy = new ProxySubject(realSubject);
clientCode(proxy);
