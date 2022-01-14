// Клон, Prototype, Прототип

class Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);

        clone.circularReference = {
            ...this.circularReference,
            prototype: {...this}
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();

    if (p1.primitive === p2.primitive)
        console.log('primitive field has been cloned correctly. ACCEPT');
    else
        console.log(
            'primitive field has not been cloned correctly. FAILED' +
                p2.primitive
        );

    if (p1.component === p2.component)
        console.log(
            'primitive component has not been cloned correctly. FAILED' +
                p2.component
        );
    else console.log('primitive component has been cloned correctly. ACCEPT');

    if (p1.circularReference === p2.circularReference)
        console.log(
            'Component with reference has not been cloned correctly. FAILED' +
                p2.circularReference
        );
    else
        console.log(
            'Component with reference has been cloned correctly. ACCEPT'
        );

    if (p1.circularReference.prototype === p2.circularReference.prototype)
        console.log(
            'Component with reference is linked with original object. FAILED' +
                p2.circularReference.prototype
        );
    else console.log('Component with reference is linked to the clone. ACCEPT');
}

clientCode();
