var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = __assign(__assign({}, this.circularReference), { prototype: __assign({}, this) });
        return clone;
    };
    return Prototype;
}());
var ComponentWithBackReference = /** @class */ (function () {
    function ComponentWithBackReference(prototype) {
        this.prototype = prototype;
    }
    return ComponentWithBackReference;
}());
function clientCode() {
    var p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);
    var p2 = p1.clone();
    if (p1.primitive === p2.primitive)
        console.log('primitive field has been cloned correctly. ACCEPT');
    else
        console.log('primitive field has not been cloned correctly. FAILED');
    if (p1.component === p2.component)
        console.log('primitive component has not been cloned correctly. FAILED');
    else
        console.log('primitive component has been cloned correctly. ACCEPT');
    if (p1.circularReference === p2.circularReference)
        console.log('Component with reference has not been cloned correctly. FAILED');
    else
        console.log('Component with reference has been cloned correctly. ACCEPT');
    if (p1.circularReference.prototype === p2.circularReference.prototype)
        console.log('Component with reference is linked with original object. FAILED');
    else
        console.log('Component with reference is linked to the clone. ACCEPT');
}
clientCode();
