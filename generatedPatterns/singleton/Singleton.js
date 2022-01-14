var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someBussinessLogic = function () {
        console.log('logic...');
    };
    return Singleton;
}());
function clientCode() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2)
        console.log('objects are the same. ACCEPT');
    else
        console.log('objects are different. FAILED');
}
clientCode();
