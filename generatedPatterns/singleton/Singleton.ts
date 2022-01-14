class Singleton {
    private static instance:Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if  (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someBussinessLogic() {
        console.log('logic...');
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) console.log('objects are the same. ACCEPT')
    else console.log('objects are different. FAILED');
    
    
}

clientCode();