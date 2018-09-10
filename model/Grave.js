export class Grave {
    
    constructor() {
        this.name;
        this.img;
    }
    
    constructor(name, imgSrc) {
        this.name = name;
        this.img = imgSrc;
    }
    
    static createFromObj(obj) {
        let grave = new Grave();
        Object.assign(grave, obj);
        return grave;
    }
    
    get name() {
        return this.name;
    }
    
    get img() {
        return this.img;
    }
}