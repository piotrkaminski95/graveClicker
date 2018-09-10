export class Grave {
    
    constructor() {
        this._name;
        this._img;
    }
    
    setNameAndImage(name, imgSrc) {
        this._name = name;
        this._img = imgSrc;
    }
    
    static createFromObj(obj) {
        let grave = new Grave();
        Object.assign(grave, obj);
        return grave;
    }
    
    get name() {
        return this._name;
    }
    
    get img() {
        return this._img;
    }
}